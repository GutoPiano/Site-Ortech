import { ref } from 'vue'

// Estado global compartilhado entre componentes
const newsItems = ref([])
const loading = ref(false)
const error = ref(false)
const lastFetchTime = ref(null)

// Tempo de cache em milissegundos (30 minutos)
const CACHE_DURATION = 30 * 60 * 1000

export const useNews = () => {
  /**
   * Verifica se o cache ainda é válido
   */
  const isCacheValid = () => {
    if (!lastFetchTime.value) return false
    const now = Date.now()
    const timeSinceLastFetch = now - lastFetchTime.value
    return timeSinceLastFetch < CACHE_DURATION
  }

  /**
   * Salva dados no localStorage
   */
  const saveToLocalStorage = (data) => {
    try {
      const cacheData = {
        news: data,
        timestamp: Date.now()
      }
      localStorage.setItem('ortech_news_cache', JSON.stringify(cacheData))
    } catch (err) {
      console.error('Erro ao salvar cache no localStorage:', err)
    }
  }

  /**
   * Carrega dados do localStorage
   */
  const loadFromLocalStorage = () => {
    try {
      const cached = localStorage.getItem('ortech_news_cache')
      if (!cached) return null

      const cacheData = JSON.parse(cached)
      const now = Date.now()
      const timeSinceCache = now - cacheData.timestamp

      // Verifica se o cache ainda é válido
      if (timeSinceCache < CACHE_DURATION) {
        return cacheData.news
      }

      // Cache expirado, remove do localStorage
      localStorage.removeItem('ortech_news_cache')
      return null
    } catch (err) {
      console.error('Erro ao carregar cache do localStorage:', err)
      return null
    }
  }

  /**
   * Notícias de fallback caso a API falhe
   */
  const getFallbackNews = () => {
    return [
      {
        id: 1,
        title: 'Receita Federal divulga calendário de obrigações fiscais para dezembro',
        source: 'Receita Federal',
        date: '13/11/2025',
        summary: 'Confira os prazos e obrigações que sua empresa precisa cumprir no último mês do ano.',
        link: 'https://www.gov.br/receitafederal'
      },
      {
        id: 2,
        title: 'Black Friday: Sebrae orienta empresários sobre planejamento de vendas',
        source: 'Sebrae',
        date: '12/11/2025',
        summary: 'Dicas essenciais para aproveitar a data comercial mais importante do ano.',
        link: 'https://www.sebrae.com.br'
      },
      {
        id: 3,
        title: 'Reforma Tributária: Transição começa em 2026',
        source: 'Contábeis',
        date: '11/11/2025',
        summary: 'Empresas devem se preparar para mudanças no sistema tributário brasileiro a partir do próximo ano.',
        link: 'https://www.contabeis.com.br'
      },
      {
        id: 4,
        title: 'Prazo para adesão ao Simples Nacional 2026 termina em janeiro',
        source: 'Contábeis',
        date: '10/11/2025',
        summary: 'Empresas interessadas em migrar para o regime simplificado devem se planejar com antecedência.',
        link: 'https://www.contabeis.com.br'
      },
      {
        id: 5,
        title: 'Curitiba: Prefeitura anuncia novos incentivos fiscais para 2026',
        source: 'Prefeitura de Curitiba',
        date: '09/11/2025',
        summary: 'Medidas visam estimular a economia local e beneficiar pequenas e médias empresas.',
        link: 'https://www.curitiba.pr.gov.br'
      }
    ]
  }

  /**
   * Busca notícias da API
   */
  const fetchNews = async (forceRefresh = false) => {
    // Se já está carregando, não faz nova requisição
    if (loading.value) return

    // Verifica cache em memória
    if (!forceRefresh && isCacheValid() && newsItems.value.length > 0) {
      console.log('Usando cache em memória')
      return
    }

    // Verifica cache no localStorage
    if (!forceRefresh) {
      const cachedNews = loadFromLocalStorage()
      if (cachedNews && cachedNews.length > 0) {
        console.log('Usando cache do localStorage')
        newsItems.value = cachedNews
        lastFetchTime.value = Date.now()
        return
      }
    }

    // Busca da API
    loading.value = true
    error.value = false

    try {
      const response = await fetch('/api/rss-feed')
      
      if (response.ok) {
        const data = await response.json()
        
        if (data && data.length > 0) {
          newsItems.value = data
          lastFetchTime.value = Date.now()
          saveToLocalStorage(data)
          console.log('Notícias carregadas da API')
        } else {
          // API retornou vazio, usa fallback
          newsItems.value = getFallbackNews()
          console.log('API retornou vazio, usando fallback')
        }
      } else {
        throw new Error('Erro na resposta da API')
      }
    } catch (err) {
      console.error('Erro ao buscar notícias:', err)
      error.value = true
      
      // Tenta usar cache expirado como último recurso
      const cachedNews = loadFromLocalStorage()
      if (cachedNews && cachedNews.length > 0) {
        newsItems.value = cachedNews
        console.log('Usando cache expirado como fallback')
      } else {
        // Usa notícias estáticas
        newsItems.value = getFallbackNews()
        console.log('Usando notícias estáticas de fallback')
      }
    } finally {
      loading.value = false
    }
  }

  /**
   * Força atualização das notícias
   */
  const refreshNews = async () => {
    await fetchNews(true)
  }

  /**
   * Limpa o cache
   */
  const clearCache = () => {
    newsItems.value = []
    lastFetchTime.value = null
    localStorage.removeItem('ortech_news_cache')
    console.log('Cache limpo')
  }

  /**
   * Retorna tempo restante do cache em minutos
   */
  const getCacheTimeRemaining = () => {
    if (!lastFetchTime.value) return 0
    const now = Date.now()
    const timeSinceLastFetch = now - lastFetchTime.value
    const timeRemaining = CACHE_DURATION - timeSinceLastFetch
    return Math.max(0, Math.floor(timeRemaining / 60000)) // Retorna em minutos
  }

  return {
    newsItems,
    loading,
    error,
    fetchNews,
    refreshNews,
    clearCache,
    isCacheValid,
    getCacheTimeRemaining
  }
}
