import fs from 'fs'
import path from 'path'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email } = body

  if (!email) {
    throw createError({
      statusCode: 400,
      message: 'Email é obrigatório'
    })
  }

  // Validar formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw createError({
      statusCode: 400,
      message: 'Email inválido'
    })
  }

  try {
    // Caminho para o arquivo de subscribers
    const filePath = path.join(process.cwd(), 'server', 'data', 'newsletter-subscribers.json')
    
    // Ler arquivo existente
    let subscribers = []
    try {
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      subscribers = JSON.parse(fileContent)
    } catch (error) {
      // Se o arquivo não existir, criar array vazio
      subscribers = []
    }

    // Verificar se email já está cadastrado
    const emailExists = subscribers.some((sub: any) => sub.email === email)
    if (emailExists) {
      return {
        success: false,
        message: 'Este email já está cadastrado!'
      }
    }

    // Adicionar novo subscriber
    const newSubscriber = {
      email: email,
      date: new Date().toISOString(),
      ip: getRequestIP(event)
    }
    
    subscribers.push(newSubscriber)

    // Salvar no arquivo
    fs.writeFileSync(filePath, JSON.stringify(subscribers, null, 2))

    console.log(`📧 Novo cadastro na newsletter: ${email}`)

    return {
      success: true,
      message: 'Email cadastrado com sucesso!',
      email: email
    }
  } catch (error) {
    console.error('Erro ao salvar email:', error)
    throw createError({
      statusCode: 500,
      message: 'Erro ao processar cadastro'
    })
  }
})
