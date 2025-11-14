export default defineEventHandler(async (event) => {
  try {
    // URLs dos feeds RSS
    const feeds = [
      'https://www.contabeis.com.br/rss/noticias.xml',
      'https://www.gov.br/receitafederal/pt-br/rss.xml',
      'https://www.sebrae.com.br/rss/noticias.xml'
    ]

    const allNews: any[] = []

    // Buscar notícias de cada feed
    for (const feedUrl of feeds) {
      try {
        const response = await fetch(feedUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; OrtechBot/1.0)'
          }
        })
        
        if (response.ok) {
          const xmlText = await response.text()
          const items = parseRSSFeed(xmlText, getSourceName(feedUrl))
          allNews.push(...items)
        }
      } catch (error) {
        console.error(`Erro ao buscar feed ${feedUrl}:`, error)
      }
    }

    // Ordenar por data (mais recentes primeiro) e limitar a 5
    const sortedNews = allNews
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5)

    return sortedNews
  } catch (error) {
    console.error('Erro ao processar feeds RSS:', error)
    return []
  }
})

function parseRSSFeed(xmlText: string, source: string) {
  const items: any[] = []
  
  // Regex para extrair itens do RSS
  const itemRegex = /<item>([\s\S]*?)<\/item>/g
  const titleRegex = /<title><!\[CDATA\[(.*?)\]\]><\/title>|<title>(.*?)<\/title>/
  const linkRegex = /<link>(.*?)<\/link>/
  const descRegex = /<description><!\[CDATA\[(.*?)\]\]><\/description>|<description>(.*?)<\/description>/
  const dateRegex = /<pubDate>(.*?)<\/pubDate>/

  let match
  while ((match = itemRegex.exec(xmlText)) !== null) {
    const itemXml = match[1]
    
    const titleMatch = itemXml.match(titleRegex)
    const linkMatch = itemXml.match(linkRegex)
    const descMatch = itemXml.match(descRegex)
    const dateMatch = itemXml.match(dateRegex)

    if (titleMatch && linkMatch) {
      const title = titleMatch[1] || titleMatch[2] || ''
      const link = linkMatch[1] || ''
      const description = (descMatch?.[1] || descMatch?.[2] || '').replace(/<[^>]*>/g, '').substring(0, 150)
      const pubDate = dateMatch?.[1] || new Date().toISOString()

      items.push({
        id: `${source}-${items.length}`,
        title: title.trim(),
        link: link.trim(),
        summary: description.trim() + '...',
        source,
        date: formatDate(pubDate)
      })
    }
  }

  return items
}

function getSourceName(url: string): string {
  if (url.includes('contabeis')) return 'Contábeis'
  if (url.includes('receitafederal')) return 'Receita Federal'
  if (url.includes('sebrae')) return 'Sebrae'
  return 'Notícias'
}

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  } catch {
    return new Date().toLocaleDateString('pt-BR')
  }
}
