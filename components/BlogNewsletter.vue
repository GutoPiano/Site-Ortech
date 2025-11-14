<template>
  <div class="mt-16 bg-gradient-to-br from-ortech-green to-emerald-900 rounded-2xl p-8 md:p-12 text-center">
    <h3 class="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">
      Quer receber nossas novidades e dicas exclusivas?
    </h3>
    <p class="text-xl text-gray-200 mb-8 font-montserrat max-w-3xl mx-auto">
      Cadastre seu e-mail e receba conteúdos contábeis direto na sua caixa de entrada.
    </p>
    
    <form @submit.prevent="handleSubmit" class="max-w-2xl mx-auto">
      <div class="flex flex-col sm:flex-row gap-4">
        <input 
          v-model="email"
          type="email" 
          placeholder="Seu melhor e-mail"
          required
          class="flex-1 px-6 py-4 rounded-lg font-montserrat text-gray-800 focus:outline-none focus:ring-4 focus:ring-ortech-gold"
        />
        <button 
          type="submit"
          class="bg-ortech-gold hover:bg-yellow-500 text-ortech-green font-montserrat font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Quero Receber
        </button>
      </div>
      
      <p class="text-sm text-gray-300 mt-4 font-montserrat">
        📧 Sem spam. Apenas conteúdo de qualidade sobre contabilidade e gestão.
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const handleSubmit = async () => {
  if (email.value) {
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email.value })
      })

      if (response.ok) {
        alert(`✅ Obrigado! Seu email ${email.value} foi cadastrado com sucesso!\n\nEm breve você receberá nossas novidades e dicas exclusivas sobre contabilidade.`)
        email.value = ''
      } else {
        alert('❌ Erro ao cadastrar email. Tente novamente.')
      }
    } catch (error) {
      console.error('Erro ao cadastrar newsletter:', error)
      alert('❌ Erro ao cadastrar email. Tente novamente.')
    }
  }
}
</script>
