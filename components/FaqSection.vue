<template>
  <section id="faq" class="pt-20 pb-32 bg-gradient-to-br from-gray-50 to-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-poppins font-bold text-ortech-blue mb-4">
          Perguntas Frequentes
        </h2>
        <p class="text-xl text-gray-600">
          Tire suas dúvidas sobre nossos serviços contábeis
        </p>
      </div>

      <div class="space-y-6">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="bg-ortech-green rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
        >
          <button
            @click="toggleFaq(index)"
            class="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-ortech-gold"
          >
            <span class="text-lg font-semibold text-white pr-8">
              {{ faq.question }}
            </span>
            <svg
              :class="['w-6 h-6 text-white transition-transform duration-300 flex-shrink-0', { 'rotate-180': openIndex === index }]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            :class="['overflow-hidden transition-all duration-300', openIndex === index ? 'max-h-[500px]' : 'max-h-0']"
          >
            <div class="px-8 pt-2 pb-6 text-white leading-relaxed">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 mb-12 text-center px-4">
        <p class="text-xl text-gray-600 mb-6">Não encontrou a resposta que procurava?</p>
        <a 
          href="https://wa.me/554133276453" 
          target="_blank"
          class="inline-flex items-center gap-3 bg-ortech-green hover:bg-emerald-800 text-white font-bold py-4 px-10 rounded-lg transition-all transform hover:scale-105 shadow-lg"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Fale Conosco pelo WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(null)

const toggleFaq = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

const faqs = [
  {
    question: 'Vocês atendem empresas de todos os portes?',
    answer: 'Sim! Atendemos desde MEI e microempresas até empresas de médio e grande porte. Nossos serviços são personalizados de acordo com as necessidades específicas de cada cliente.'
  },
  {
    question: 'Qual o melhor regime tributário para minha empresa?',
    answer: 'O regime tributário ideal depende do faturamento, atividade e estrutura da sua empresa. Oferecemos análise completa para identificar se o Simples Nacional, Lucro Presumido ou Lucro Real é mais vantajoso para o seu negócio, garantindo economia tributária.'
  },
  {
    question: 'Quais documentos preciso para abrir minha empresa?',
    answer: 'Você precisará de RG, CPF, comprovante de residência dos sócios, contrato de locação ou escritura do imóvel onde a empresa funcionará. Nossa equipe orienta sobre toda a documentação necessária.'
  },
  {
    question: 'Como funciona o serviço de contabilidade mensal?',
    answer: 'Cuidamos de toda a parte contábil e fiscal da sua empresa: emissão de guias de impostos, folha de pagamento, declarações obrigatórias, balanços e demonstrativos. Você recebe relatórios mensais e tem suporte contínuo da nossa equipe.'
  },
  {
    question: 'Quanto tempo demora para abrir empresa e obter CNPJ?',
    answer: 'A emissão do CNPJ costuma ocorrer em 24 a 48 horas após o envio dos documentos. Já o processo completo — incluindo inscrição municipal, estadual (se necessário) e liberação para emitir notas — pode levar alguns dias, dependendo da atividade e dos órgãos responsáveis.'
  },
  {
    question: 'Posso migrar minha contabilidade para a Ortech?',
    answer: 'Sim! Fazemos todo o processo de transição de forma segura e organizada, sem prejuízo para suas obrigações fiscais. Analisamos seu histórico contábil e assumimos a gestão com total transparência.'
  },
  {
    question: 'Qual a diferença entre MEI, ME e EPP?',
    answer: 'MEI é para faturamento até R$ 81 mil/ano com limitações de atividades. ME (Microempresa) fatura até R$ 360 mil/ano. EPP (Empresa de Pequeno Porte) fatura de R$ 360 mil até R$ 4,8 milhões/ano. Ajudamos você a escolher o enquadramento ideal.'
  },
  {
    question: 'Como funciona o atendimento e suporte?',
    answer: 'Oferecemos atendimento personalizado via WhatsApp, e-mail e telefone. Você tem profissionais dedicados que conhecem seu negócio e estão sempre disponível para esclarecer dúvidas e orientar nas melhores decisões.'
  }
]
</script>
