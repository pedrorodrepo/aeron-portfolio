# 🚀 Setup GitHub - Aeron Portfolio

## Passos para Subir ao GitHub

### 1. ✅ Repositório Local Inicializado
```bash
git init
git add .
git commit -m "Initial commit: Aeron Portfolio v1.2.0"
```

### 2. 📝 Criar Repositório no GitHub

Acesse: https://github.com/new

**Configurações Sugeridas:**
- **Nome do Repositório**: `aeron-portfolio`
- **Descrição**: `Modern dark-themed portfolio SPA built with Angular 18, featuring red accents and image management`
- **Visibilidade**: Public ou Private (sua escolha)
- **NÃO** inicialize com README, .gitignore ou license (já temos)

### 3. 🔗 Conectar ao Repositório Remoto

Após criar o repositório no GitHub, execute:

```bash
# Substitua SEU_USUARIO pelo seu username do GitHub
git remote add origin https://github.com/SEU_USUARIO/aeron-portfolio.git

# Ou use SSH (se configurado)
git remote add origin git@github.com:SEU_USUARIO/aeron-portfolio.git
```

### 4. 📤 Fazer Push

```bash
# Renomear branch para main (se necessário)
git branch -M main

# Fazer push
git push -u origin main
```

## 🔐 Autenticação

### Opção 1: HTTPS com Token
1. Vá em: https://github.com/settings/tokens
2. Gere um Personal Access Token
3. Use o token como senha ao fazer push

### Opção 2: SSH
1. Gere uma chave SSH: `ssh-keygen -t ed25519 -C "seu-email@example.com"`
2. Adicione ao GitHub: https://github.com/settings/keys
3. Use a URL SSH ao adicionar o remote

## 📋 Comandos Completos

```bash
# 1. Já feito - Inicializar repositório
git init
git add .
git commit -m "Initial commit: Aeron Portfolio v1.2.0"

# 2. Adicionar remote (SUBSTITUA SEU_USUARIO)
git remote add origin https://github.com/SEU_USUARIO/aeron-portfolio.git

# 3. Renomear branch para main
git branch -M main

# 4. Fazer push
git push -u origin main
```

## 🎯 Próximos Passos Após o Push

### 1. Configurar GitHub Pages (Opcional)
Para hospedar gratuitamente:

1. Vá em: Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` → `/docs` ou `/root`
4. Build o projeto: `ng build --configuration production`
5. Commit e push da pasta `dist/`

### 2. Adicionar Badges ao README

```markdown
![Angular](https://img.shields.io/badge/Angular-18-red)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
```

### 3. Configurar GitHub Actions (CI/CD)

Criar `.github/workflows/build.yml`:

```yaml
name: Build and Test

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '20'
    - name: Install dependencies
      run: npm ci
    - name: Build
      run: npm run build
    - name: Test
      run: npm test -- --watch=false --browsers=ChromeHeadless
```

## 📝 Descrição Sugerida para o Repositório

```
Aeron Portfolio - Modern Dark Theme SPA

A sleek, modern portfolio Single Page Application built with Angular 18, 
featuring a dark theme with striking red accents. Perfect for showcasing 
artwork and creative projects.

Features:
✨ Dark theme with red highlights
🖼️ Image gallery with descriptions
📤 Admin panel with drag & drop upload
🔐 Secure authentication
📱 Fully responsive design
🎨 Modern UI/UX

Tech Stack: Angular 18, TypeScript, SCSS, Angular CDK
```

## 🏷️ Topics Sugeridos

Adicione estes topics ao repositório:
- `angular`
- `typescript`
- `portfolio`
- `spa`
- `dark-theme`
- `image-gallery`
- `angular-18`
- `scss`
- `responsive-design`
- `admin-panel`

## 📄 License

O projeto já inclui uma licença MIT. Se quiser mudar:

1. Vá em: Add file → Create new file
2. Nome: `LICENSE`
3. Escolha a licença desejada

## 🔄 Comandos Git Úteis

```bash
# Ver status
git status

# Ver histórico
git log --oneline

# Criar nova branch
git checkout -b feature/nova-funcionalidade

# Fazer commit
git add .
git commit -m "Descrição da mudança"

# Fazer push
git push origin main

# Atualizar do remoto
git pull origin main
```

## 🎉 Pronto!

Após seguir estes passos, seu projeto estará no GitHub e você poderá:
- Compartilhar o link
- Colaborar com outros
- Usar GitHub Pages para hospedar
- Configurar CI/CD
- Receber contribuições

---

**Repositório Local**: ✅ Inicializado  
**Commit Inicial**: ✅ Feito  
**Próximo Passo**: Criar repositório no GitHub e fazer push
