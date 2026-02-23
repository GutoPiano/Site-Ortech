<template>
  <section id="depoimentos" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-ortech-green mb-4">
          O que nossos clientes dizem
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          Depoimentos de quem confia na Ortech
        </p>
      </div>
        
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="depoimento in depoimentos" :key="depoimento.nome" class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
          <div class="flex items-center mb-6">
            <div class="w-16 h-16 bg-ortech-gold rounded-full flex items-center justify-center text-ortech-green font-bold text-2xl">
              {{ depoimento.iniciais }}
            </div>
            <div class="ml-4">
              <h4 class="font-bold text-ortech-green">{{ depoimento.nome }}</h4>
              <p class="text-sm text-gray-600">{{ depoimento.cargo }}</p>
            </div>
          </div>
          <div class="flex mb-4">
            <svg v-for="n in 5" :key="n" class="w-5 h-5 text-ortech-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p class="text-gray-700 italic">"{{ depoimento.texto }}"</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const depoimentos = [
  {
    nome: 'Carlos Oliveira',
    iniciais: 'CO',
    cargo: 'Proprietário de Rede Varejista',
    texto: 'A Ortech transformou a gestão do meu negócio. Consegui reduzir impostos e ter mais controle financeiro. Atendimento impecável!'
  },
  {
    nome: 'Ricardo Santos',
    iniciais: 'RS',
    cargo: 'Diretor Comercial',
    texto: 'Profissionais extremamente competentes. O atendimento online é muito prático e eles sempre respondem rápido pelo WhatsApp.'
  },
  {
    nome: 'Mariana Costa',
    iniciais: 'MC',
    cargo: 'Empresária do Setor de Serviços',
    texto: 'Desde que contratei a Ortech, minha empresa cresceu muito. O planejamento tributário fez toda a diferença na lucratividade!'
  }
]
</script>
