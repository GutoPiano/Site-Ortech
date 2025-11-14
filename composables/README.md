# Composables - Ortech

## useNews.js

Composable para gerenciar notícias RSS com sistema de cache inteligente.

### Recursos

- ✅ **Cache em memória** - Dados compartilhados entre componentes
- ✅ **Cache no localStorage** - Persiste entre recarregamentos da página
- ✅ **Duração de 30 minutos** - Cache automático por 30 minutos
- ✅ **Fallback inteligente** - Notícias estáticas se a API falhar
- ✅ **Atualização automática** - Busca novas notícias quando o cache expira
- ✅ **Refresh manual** - Botão para forçar atualização

### Uso

```javascript
import { useNews } from '~/composables/useNews'

const { 
  newsItems,           // Array de notícias
  loading,             // Estado de carregamento
  error,               // Estado de erro
  fetchNews,           // Buscar notícias (respeita cache)
  refreshNews,         // Forçar atualização
  clearCache,          // Limpar cache
  isCacheValid,        // Verifica se cache é válido
  getCacheTimeRemaining // Tempo restante do cache em minutos
} = useNews()

// Buscar notícias (usa cache se disponível)
await fetchNews()

// Forçar atualização
await refreshNews()

// Limpar cache
clearCache()
```

### Fluxo de Cache

1. **Primeira verificação**: Cache em memória (mais rápido)
2. **Segunda verificação**: Cache no localStorage
3. **Terceira opção**: Busca da API
4. **Fallback**: Notícias estáticas

### Estrutura do Cache

```javascript
{
  news: [...],        // Array de notícias
  timestamp: 1234567  // Timestamp da última busca
}
```

### Tempo de Cache

- **Duração**: 30 minutos
- **Atualização automática**: A cada 30 minutos
- **Refresh manual**: Disponível a qualquer momento

### Tratamento de Erros

- Se a API falhar, usa cache expirado (se disponível)
- Se não houver cache, usa notícias estáticas de fallback
- Sempre garante que o usuário veja conteúdo
