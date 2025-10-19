# 🚀 Instruções de Deploy - Aeron Portfolio

## ✅ Status Atual

- ✅ Repositório Git inicializado
- ✅ Commit inicial criado
- ✅ Pronto para push ao GitHub

## 📋 Passo a Passo Completo

### Passo 1: Criar Repositório no GitHub

1. Acesse: **https://github.com/new**

2. Preencha os dados:
   ```
   Repository name: aeron-portfolio
   Description: Modern dark-themed portfolio SPA with Angular 18
   Visibility: ○ Public  ○ Private (sua escolha)
   
   ☐ Add a README file (NÃO marque)
   ☐ Add .gitignore (NÃO marque)
   ☐ Choose a license (NÃO marque)
   ```

3. Clique em **"Create repository"**

### Passo 2: Conectar e Fazer Push

Após criar o repositório, o GitHub mostrará comandos. Use estes:

```bash
# No terminal, dentro da pasta aeron-portfolio:

# 1. Adicionar remote (SUBSTITUA SEU_USUARIO)
git remote add origin https://github.com/SEU_USUARIO/aeron-portfolio.git

# 2. Renomear branch para main
git branch -M main

# 3. Fazer push
git push -u origin main
```

### Passo 3: Verificar

Acesse seu repositório no GitHub e verifique se todos os arquivos foram enviados.

## 🌐 Opções de Deploy/Hospedagem

### Opção 1: Vercel (Recomendado - Mais Fácil)

**Vantagens**: Deploy automático, HTTPS grátis, CDN global

1. Acesse: https://vercel.com
2. Faça login com GitHub
3. Clique em "New Project"
4. Selecione o repositório `aeron-portfolio`
5. Configure:
   ```
   Framework Preset: Angular
   Build Command: npm run build
   Output Directory: dist/aeron-portfolio/browser
   ```
6. Clique em "Deploy"

**URL**: Você receberá uma URL tipo `aeron-portfolio.vercel.app`

### Opção 2: Netlify

**Vantagens**: Interface simples, deploy automático

1. Acesse: https://netlify.com
2. Faça login com GitHub
3. Clique em "Add new site" → "Import an existing project"
4. Selecione o repositório
5. Configure:
   ```
   Build command: npm run build
   Publish directory: dist/aeron-portfolio/browser
   ```
6. Clique em "Deploy site"

### Opção 3: GitHub Pages

**Vantagens**: Grátis, integrado ao GitHub

1. Build o projeto:
   ```bash
   ng build --configuration production --base-href /aeron-portfolio/
   ```

2. Instale gh-pages:
   ```bash
   npm install -g angular-cli-ghpages
   ```

3. Deploy:
   ```bash
   npx angular-cli-ghpages --dir=dist/aeron-portfolio/browser
   ```

4. Configure no GitHub:
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`

**URL**: `https://SEU_USUARIO.github.io/aeron-portfolio/`

### Opção 4: Firebase Hosting

**Vantagens**: Integração com Firebase, CDN global

1. Instale Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login:
   ```bash
   firebase login
   ```

3. Inicialize:
   ```bash
   firebase init hosting
   ```

4. Configure:
   ```
   Public directory: dist/aeron-portfolio/browser
   Single-page app: Yes
   ```

5. Deploy:
   ```bash
   ng build --configuration production
   firebase deploy
   ```

## 🔧 Configurações Importantes

### Para Deploy em Subpasta

Se o app não estiver na raiz do domínio, atualize `angular.json`:

```json
"baseHref": "/aeron-portfolio/"
```

Ou use ao fazer build:
```bash
ng build --base-href /aeron-portfolio/
```

### Variáveis de Ambiente

Para produção, crie `environment.prod.ts`:

```typescript
export const environment = {
  production: true,
  s3Config: {
    bucketName: 'aeron-portfolio-prod',
    region: 'us-east-1',
    accessKeyId: '', // Use variáveis de ambiente
    secretAccessKey: '',
    baseUrl: 'https://aeron-portfolio-prod.s3.amazonaws.com'
  },
  adminCredentials: {
    username: 'admin',
    password: 'SENHA_SEGURA_AQUI' // Mude para produção!
  }
};
```

## 🔐 Segurança para Produção

### 1. Mudar Credenciais de Admin

Edite `src/environments/environment.prod.ts`:
```typescript
adminCredentials: {
  username: 'seu_usuario_seguro',
  password: 'SenhaForte123!@#'
}
```

### 2. Configurar AWS S3 Real

1. Crie bucket no AWS S3
2. Configure CORS:
   ```json
   [
     {
       "AllowedHeaders": ["*"],
       "AllowedMethods": ["GET", "PUT", "POST", "DELETE"],
       "AllowedOrigins": ["https://seu-dominio.com"],
       "ExposeHeaders": []
     }
   ]
   ```

3. Atualize `environment.prod.ts` com credenciais reais

### 3. Usar Variáveis de Ambiente

No Vercel/Netlify, adicione:
```
AWS_ACCESS_KEY_ID=sua_chave
AWS_SECRET_ACCESS_KEY=sua_chave_secreta
ADMIN_USERNAME=seu_usuario
ADMIN_PASSWORD=sua_senha
```

## 📊 Monitoramento

### Google Analytics

Adicione no `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎯 Checklist de Deploy

Antes de fazer deploy para produção:

- [ ] Mudar credenciais de admin
- [ ] Configurar AWS S3 real (ou manter localStorage)
- [ ] Testar build de produção localmente
- [ ] Configurar domínio customizado (opcional)
- [ ] Adicionar Google Analytics (opcional)
- [ ] Testar em diferentes dispositivos
- [ ] Verificar performance (Lighthouse)
- [ ] Configurar SSL/HTTPS
- [ ] Adicionar meta tags para SEO
- [ ] Testar todas as funcionalidades

## 🔄 Workflow de Desenvolvimento

```bash
# Desenvolvimento local
npm start

# Build de teste
ng build --configuration development

# Build de produção
ng build --configuration production

# Testar build localmente
cd dist/aeron-portfolio/browser
npx http-server

# Commit e push
git add .
git commit -m "Descrição"
git push origin main

# Deploy automático (Vercel/Netlify)
# Acontece automaticamente após push
```

## 📝 Comandos Rápidos

```bash
# Ver remote configurado
git remote -v

# Fazer push
git push origin main

# Build produção
npm run build

# Servir build localmente
npx http-server dist/aeron-portfolio/browser
```

## 🆘 Troubleshooting

### Erro: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/SEU_USUARIO/aeron-portfolio.git
```

### Erro de autenticação no push
Use Personal Access Token:
1. https://github.com/settings/tokens
2. Generate new token (classic)
3. Selecione: repo, workflow
4. Use o token como senha

### Build falha
```bash
# Limpar cache
rm -rf node_modules package-lock.json
npm install
ng build
```

## 🎉 Pronto!

Após seguir estes passos, seu portfolio estará online e acessível para o mundo!

---

**Status**: ✅ Pronto para deploy  
**Próximo Passo**: Escolha uma plataforma e faça deploy  
**Recomendação**: Vercel (mais fácil e rápido)
