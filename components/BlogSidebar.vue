<template>
  <aside class="space-y-6">
    <!-- Campo de Busca -->
    <div class="bg-white rounded-xl shadow-lg p-6">
      <h3 class="text-lg font-poppins font-bold text-ortech-green mb-4">Buscar Artigos</h3>
      <div class="relative">
        <input 
          v-model="searchInput"
          @input="handleSearch"
          type="text" 
          placeholder="Buscar artigos..."
          class="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-lg focus:border-ortech-gold focus:outline-none font-montserrat"
        />
        <button class="absolute right-3 top-1/2 -translate-y-1/2 text-ortech-green hover:text-ortech-gold">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Categorias -->
    <div class="bg-white rounded-xl shadow-lg p-6">
      <h3 class="text-lg font-poppins font-bold text-ortech-green mb-4">Categorias</h3>
      <ul class="space-y-2">
        <li v-for="category in categories" :key="category.name">
          <button 
            @click="selectCategory(category.name)"
            :class="[
              'w-full flex items-center justify-between py-2 px-3 rounded-lg transition-colors group text-left',
              selectedCategory === category.name 
                ? 'bg-ortech-green text-white' 
                : 'hover:bg-gray-50'
            ]"
          >
            <span :class="[
              'flex items-center gap-2 font-montserrat',
              selectedCategory === category.name 
                ? 'text-white' 
                : 'text-gray-700 group-hover:text-ortech-green'
            ]">
              <span>{{ category.icon }}</span>
              <span>{{ category.name }}</span>
            </span>
            <span :class="[
              'text-sm',
              selectedCategory === category.name 
                ? 'text-ortech-gold' 
                : 'text-gray-400'
            ]">
              {{ category.count }}
            </span>
          </button>
        </li>
      </ul>
    </div>

    <!-- Últimas Notícias do Setor -->
    <BlogRssFeed />
  </aside>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  selectedCategory: {
    type: String,
    default: null
  }
})

const emit = defineEmits(['filter-category', 'search'])

const searchInput = ref('')

const categories = [
  { name: 'Varejo', icon: '📊', count: 1 },
  { name: 'Serviços', icon: '💼', count: 1 },
  { name: 'Impostos', icon: '💰', count: 2 },
  { name: 'Gestão', icon: '📈', count: 1 },
  { name: 'Curitiba', icon: '🏙️', count: 1 }
]

const selectCategory = (categoryName) => {
  if (props.selectedCategory === categoryName) {
    // Se já está selecionada, remove o filtro
    emit('filter-category', null)
  } else {
    emit('filter-category', categoryName)
  }
}

const handleSearch = () => {
  emit('search', searchInput.value)
}
</script>
