# Gilmário Vemba - Website Oficial

Site oficial do comediante Gilmário Vemba.

## 🚀 Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Express
- Framer Motion

## 📦 Instalação

```bash
# Instalar dependências
pnpm install

# Executar em desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Executar em produção
pnpm start
```

## 🌐 Deploy

### Vercel / Netlify / Render

Para evitar erros de lockfile durante o deploy, o projeto já está configurado com `.npmrc` que permite atualizações automáticas do lockfile.

**Configurações recomendadas:**

- **Build Command:** `pnpm install && pnpm build`
- **Start Command:** `pnpm start`
- **Node Version:** 18.x ou superior
- **Package Manager:** pnpm

### Variáveis de Ambiente

Nenhuma variável de ambiente é necessária para o funcionamento básico.

## 📝 Estrutura do Projeto

```
├── client/          # Frontend React
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── ...
├── server/          # Backend Express
├── shared/          # Código compartilhado
└── dist/            # Build de produção
```

## 🔧 Solução de Problemas

### Erro: ERR_PNPM_LOCKFILE_CONFIG_MISMATCH

Este erro foi resolvido com a adição do arquivo `.npmrc`. Se ainda ocorrer:

```bash
# Regenerar o lockfile
pnpm install --no-frozen-lockfile

# Commit as mudanças
git add pnpm-lock.yaml
git commit -m "Update lockfile"
git push
```

## 📄 Licença

MIT
