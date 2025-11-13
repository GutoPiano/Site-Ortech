<template>
  <div class="flex items-center">
    <img 
      :src="logoSrc" 
      :alt="altText"
      :class="imageClass"
      :style="{ height: `${height}px` }"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'light', // 'light' ou 'dark'
    validator: (value) => ['light', 'dark'].includes(value)
  },
  height: {
    type: Number,
    default: 60
  },
  altText: {
    type: String,
    default: 'Ortech Contabilidade e Consultoria'
  }
})

const logoSrc = computed(() => {
  return '/images/logo.png'
})

const imageClass = computed(() => {
  return 'h-auto object-contain'
})
</script>
