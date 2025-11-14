<template>
  <div class="bg-white rounded-xl shadow-lg p-6">
    <h3 class="text-lg font-poppins font-bold text-ortech-green mb-4">
      📰 Últimas Notícias do Setor
    </h3>
    
    <!-- Loading State -->
    <div v-if="loading" class="space-y-4">
      <div v-for="n in 3" :key="n" class="animate-pulse">
        <div class="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div class="h-3 bg-gray-100 rounded w-1/2"></div>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center py-4">
      <p class="text-sm text-gray-500 mb-2">
        Não foi possível carregar as notícias no momento.
      </p>
      <button 
        @click="handleRefresh"
        class="text-xs text-ortech-green hover:text-ortech-gold font-medium"
      >
        Tentar novamente
      </button>
    </div>

    <!-- News Items -->
    <div v-else class="space-y-4">
      <div v-for="news in newsItems" :key="news.id" class="border-b border-gray-100 pb-4 last:border-0">
        <a 
          :href="news.link" 
          target="_blank"
          rel="noopener noreferrer"
          class="block hover:bg-gray-50 p-2 rounded-lg transition-colors"
        >
          <h4 class="font-montserrat font-semibold text-sm text-ortech-green hover:text-ortech-gold mb-1 line-clamp-2">
            {{ news.title }}
          </h4>
          <div class="flex items-center gap-2 text-xs text-gray-500">
            <span class="font-medium">{{ news.source }}</span>
            <span>•</span>
            <span>{{ news.date }}</span>
          </div>
          <p class="text-xs text-gray-600 mt-1 line-clamp-2">
            {{ news.summary }}
          </p>
        </a>
      </div>
    </div>

    <div class="mt-4 pt-4 border-t border-gray-100">
      <div class="flex items-center justify-between">
        <p class="text-xs text-gray-500 font-montserrat">
          <span v-if="isCacheValid()">
            Cache válido por {{ getCacheTimeRemaining() }} min
          </span>
          <span v-else>
            Atualizado automaticamente
          </span>
        </p>
        <button 
          @click="handleRefresh"
          :disabled="loading"
          class="text-xs text-ortech-green hover:text-ortech-gold font-medium flex items-center gap-1 disabled:opacity-50"
        >
          <svg class="w-3 h-3" :class="{ 'animate-spin': loading }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Atualizar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useNews } from '~/composables/useNews'

const { 
  newsItems, 
  loading, 
  error, 
  fetchNews, 
  refreshNews,
  isCacheValid,
  getCacheTimeRemaining
} = useNews()

let intervalId = null

const handleRefresh = async () => {
  await refreshNews()
}

// Buscar notícias ao montar o componente
onMounted(async () => {
  await fetchNews()
  
  // Atualizar notícias a cada 30 minutos
  intervalId = setInterval(async () => {
    await fetchNews()
  }, 30 * 60 * 1000)
})

// Limpar interval ao desmontar
onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>
