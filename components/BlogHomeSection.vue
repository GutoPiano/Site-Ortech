<template>
  <section id="blog" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Título da Seção -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-poppins font-bold text-ortech-green mb-4">
          Tudo o que você precisa saber sobre abertura e gestão da sua empresa
        </h2>
        <p class="text-lg text-gray-600 font-montserrat max-w-3xl mx-auto">
          Confira os conteúdos que nossos especialistas prepararam para ajudar você a escrever sua história de sucesso.
        </p>
      </div>

      <!-- Grid de Artigos -->
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Card do Artigo Principal -->
        <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
          <!-- Imagem -->
          <div class="card-image-1 overflow-hidden">
            <img 
              src="/images/planejamento tributário.png" 
              alt="MEI, Simples ou Lucro Presumido"
              class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            >
          </div>

          <!-- Conteúdo -->
          <div class="p-6">
            <h3 class="text-xl font-poppins font-bold text-ortech-green mb-3 group-hover:text-ortech-gold transition-colors">
              MEI, Simples ou Lucro Presumido: Qual o melhor regime tributário para o comércio varejista em 2025?
            </h3>
            <p class="text-gray-600 font-montserrat text-sm mb-4">
              Descubra qual regime tributário é mais vantajoso para o varejo e como escolher o melhor modelo para reduzir impostos.
            </p>
            <NuxtLink 
              to="/artigo-regime-tributario" 
              class="inline-flex items-center gap-2 text-ortech-green font-montserrat font-semibold hover:text-ortech-gold transition-colors"
            >
              Leia mais
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Card 2 - Segundo Artigo -->
        <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
          <!-- Imagem -->
          <div class="card-image-2 overflow-hidden">
            <img 
              src="/images/prestador de servico.png" 
              alt="Faturamento recorrente e gestão financeira"
              class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            >
          </div>

          <!-- Conteúdo -->
          <div class="p-6">
            <div class="mb-3">
              <span class="inline-block bg-ortech-gold/10 text-ortech-gold px-3 py-1 rounded-full text-xs font-montserrat font-semibold">
                Gestão Financeira
              </span>
            </div>

            <h3 class="text-xl font-poppins font-bold text-ortech-green mb-3 group-hover:text-ortech-gold transition-colors">
              Faturamento recorrente e gestão financeira: guia completo para prestadores de serviços
            </h3>
            <p class="text-gray-600 font-montserrat text-sm mb-4">
              Saiba como estruturar faturamento recorrente, organizar sua gestão financeira e garantir previsibilidade no fluxo de caixa.
            </p>
            <a 
              href="#" 
              class="inline-flex items-center gap-2 text-gray-400 font-montserrat font-semibold cursor-not-allowed"
              onclick="return false;"
            >
              Em breve
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Card 3 - Placeholder -->
        <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group opacity-50">
          <div class="h-48 bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-poppins font-bold text-gray-400 mb-3">
              Em breve: Mais conteúdos sobre tributação
            </h3>
            <p class="text-gray-400 font-montserrat text-sm mb-4">
              Novos artigos sobre planejamento tributário e economia de impostos.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>


<style scoped>
/* Altura customizada para o card 1 - proporção da imagem planejamento tributário */
.card-image-1 {
  height: 280px;
}

/* Altura customizada para o card 2 - proporção da imagem prestador de servico */
.card-image-2 {
  height: 400px;
}

@media (max-width: 768px) {
  .card-image-1 {
    height: 200px;
  }
  
  .card-image-2 {
    height: 300px;
  }
}
</style>
