<template>
  <section id="home" class="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-8">
        <!-- Conteúdo de texto -->
        <div class="text-center md:text-left">
          <!-- Nome ORTECH com fonte arredondada -->
          <h1 class="text-6xl md:text-7xl font-poppins font-black mb-6 text-ortech-green tracking-wide">
            ORTECH
          </h1>
          
          <p class="text-ortech-gold font-playfair font-bold mb-4 text-xl md:text-2xl italic">
            "Contabilizando o seu sucesso."
          </p>
          <h2 class="text-3xl md:text-5xl font-montserrat font-bold mb-6 leading-tight text-gray-800">
            Contabilidade em Curitiba para Empresas e Prestadores de Serviço
          </h2>
          <p class="text-lg md:text-xl mb-8 text-gray-600 font-montserrat">
            Especialistas no setor varejista e de serviços com atendimento presencial e online.
          </p>
          <a 
            href="https://wa.me/554133276453?text=Olá,%20gostaria%20de%20falar%20com%20um%20contador" 
            target="_blank"
            class="inline-block bg-ortech-gold hover:bg-yellow-500 text-ortech-green font-montserrat font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Falar com um Contador Agora
          </a>
        </div>
        
        <!-- Imagem do escritório - visível em todas as telas -->
        <div class="w-full">
          <div class="rounded-2xl overflow-hidden shadow-2xl border-4 border-ortech-gold/30">
            <img 
              src="/images/logo nova.png" 
              alt="Ortech Contabilidade e Consultoria"
              class="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
