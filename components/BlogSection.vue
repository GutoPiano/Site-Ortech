<template>
  <section id="blog" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Cabeçalho da Seção -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-poppins font-bold text-ortech-green mb-4">
          Blog Ortech — Dicas, Notícias e Atualizações Contábeis
        </h1>
        <p class="text-xl text-gray-600 font-montserrat max-w-4xl mx-auto">
          Fique por dentro das novidades sobre contabilidade, gestão e negócios para empresas de Curitiba e de todo o Brasil.
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Conteúdo Principal - Grid de Artigos -->
        <div class="lg:col-span-2">
          <!-- Filtro ativo -->
          <div v-if="selectedCategory" class="mb-6 flex items-center gap-2">
            <span class="text-sm text-gray-600 font-montserrat">Filtrando por:</span>
            <span class="bg-ortech-green text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              {{ selectedCategory }}
              <button @click="clearFilter" class="hover:text-ortech-gold">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </span>
          </div>

          <!-- Grid de artigos -->
          <div class="grid md:grid-cols-2 gap-6">
            <BlogCard 
              v-for="article in filteredArticles" 
              :key="article.id"
              :article="article"
            />
          </div>

          <!-- Mensagem quando não há resultados -->
          <div v-if="filteredArticles.length === 0" class="text-center py-12">
            <p class="text-gray-500 font-montserrat">Nenhum artigo encontrado para esta categoria.</p>
            <button @click="clearFilter" class="mt-4 text-ortech-green hover:text-ortech-gold font-medium">
              Ver todos os artigos
            </button>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <BlogSidebar 
            :selected-category="selectedCategory"
            @filter-category="filterByCategory"
            @search="searchArticles"
          />
        </div>
      </div>

      <!-- Nossa História -->
      <HistoriaSection />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedCategory = ref(null)
const searchQuery = ref('')

const allArticles = [
  {
    id: 1,
    title: 'Receita Federal divulga calendário de obrigações fiscais para dezembro',
    excerpt: 'Confira os prazos e obrigações que sua empresa precisa cumprir no último mês do ano fiscal.',
    date: '2025-11-13',
    category: 'Impostos',
    link: 'https://www.gov.br/receitafederal/pt-br/assuntos/noticias'
  },
  {
    id: 2,
    title: 'Black Friday: Sebrae orienta empresários sobre planejamento de vendas',
    excerpt: 'Dicas essenciais para aproveitar a data comercial mais importante do ano e aumentar suas vendas.',
    date: '2025-11-12',
    category: 'Varejo',
    link: 'https://www.sebrae.com.br/sites/PortalSebrae/noticias'
  },
  {
    id: 3,
    title: 'Reforma Tributária: Transição começa em 2026',
    excerpt: 'Empresas devem se preparar para mudanças no sistema tributário brasileiro a partir do próximo ano.',
    date: '2025-11-11',
    category: 'Impostos',
    link: 'https://www.contabeis.com.br/noticias/'
  },
  {
    id: 4,
    title: 'Prazo para adesão ao Simples Nacional 2026 termina em janeiro',
    excerpt: 'Empresas interessadas em migrar para o regime simplificado devem se planejar com antecedência.',
    date: '2025-11-10',
    category: 'Gestão',
    link: 'https://www.contabeis.com.br/noticias/'
  },
  {
    id: 5,
    title: 'Curitiba: Prefeitura anuncia novos incentivos fiscais para 2026',
    excerpt: 'Medidas visam estimular a economia local e beneficiar pequenas e médias empresas da região.',
    date: '2025-11-09',
    category: 'Curitiba',
    link: 'https://www.curitiba.pr.gov.br/noticias'
  },
  {
    id: 6,
    title: 'eSocial: Novas funcionalidades facilitam envio de informações',
    excerpt: 'Sistema recebe atualizações que simplificam o cumprimento de obrigações trabalhistas pelas empresas.',
    date: '2025-11-08',
    category: 'Serviços',
    link: 'https://www.gov.br/esocial/pt-br'
  }
]

const filteredArticles = computed(() => {
  let filtered = allArticles

  // Filtrar por categoria
  if (selectedCategory.value) {
    filtered = filtered.filter(article => article.category === selectedCategory.value)
  }

  // Filtrar por busca
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(article => 
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query)
    )
  }

  return filtered
})

const filterByCategory = (category) => {
  selectedCategory.value = category
}

const searchArticles = (query) => {
  searchQuery.value = query
}

const clearFilter = () => {
  selectedCategory.value = null
  searchQuery.value = ''
}
</script>
