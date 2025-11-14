<template>
  <article class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1 cursor-pointer" @click="handleCardClick">
    <!-- Imagem com gradiente por categoria -->
    <div :class="['relative h-48 overflow-hidden', getCategoryGradient(article.category)]">
      <div class="absolute inset-0 flex items-center justify-center">
        <!-- Ícone dinâmico por categoria -->
        <svg v-if="article.category === 'Impostos'" class="w-20 h-20 text-ortech-gold opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <svg v-else-if="article.category === 'Gestão'" class="w-20 h-20 text-ortech-gold opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <svg v-else-if="article.category === 'Curitiba'" class="w-20 h-20 text-ortech-gold opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
        <svg v-else-if="article.category === 'Serviços'" class="w-20 h-20 text-ortech-gold opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <svg v-else-if="article.category === 'Varejo'" class="w-20 h-20 text-ortech-gold opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <svg v-else class="w-20 h-20 text-ortech-gold opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <!-- Categoria Badge -->
      <div class="absolute top-4 left-4">
        <span class="bg-ortech-gold text-ortech-green px-3 py-1 rounded-full text-xs font-bold">
          {{ article.category }}
        </span>
      </div>
    </div>

    <!-- Conteúdo -->
    <div class="p-6">
      <!-- Data -->
      <p class="text-sm text-gray-500 mb-2 font-montserrat">
        {{ formatDate(article.date) }}
      </p>

      <!-- Título -->
      <h2 class="text-xl font-poppins font-bold text-ortech-green mb-3 line-clamp-2">
        {{ article.title }}
      </h2>

      <!-- Excerpt -->
      <p class="text-gray-600 mb-4 font-montserrat text-sm line-clamp-3">
        {{ article.excerpt }}
      </p>

      <!-- Botão -->
      <a 
        :href="article.link || '#'" 
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block bg-ortech-gold hover:bg-yellow-500 text-ortech-green font-montserrat font-bold py-2 px-6 rounded-lg transition-all"
      >
        Ler mais
      </a>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  article: {
    type: Object,
    required: true
  }
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('pt-BR', { 
    day: '2-digit', 
    month: 'long', 
    year: 'numeric' 
  })
}

const getCategoryGradient = (category) => {
  const gradients = {
    'Impostos': 'bg-gradient-to-br from-emerald-800 to-emerald-600',
    'Gestão': 'bg-gradient-to-br from-green-700 to-green-500',
    'Curitiba': 'bg-gradient-to-br from-teal-800 to-teal-600',
    'Serviços': 'bg-gradient-to-br from-emerald-900 to-emerald-700',
    'Varejo': 'bg-gradient-to-br from-green-800 to-green-600'
  }
  return gradients[category] || 'bg-gradient-to-br from-ortech-green to-emerald-900'
}

const handleCardClick = () => {
  if (props.article.link) {
    window.open(props.article.link, '_blank', 'noopener,noreferrer')
  }
}
</script>
