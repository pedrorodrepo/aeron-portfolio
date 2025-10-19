# Quick Start - Aeron Portfolio

## 🚀 Início Rápido

### 1. Instalar Dependências
```bash
npm install
```

### 2. Iniciar Servidor de Desenvolvimento
```bash
npm start
# ou
ng serve --open
```

### 3. Acessar a Aplicação
```
http://localhost:4200
```

## 🎨 Novo Design

### Cores Principais
- **Preto**: `#0a0a0a` (Background)
- **Cinza Escuro**: `#1a1a1a` (Cards)
- **Vermelho**: `#ff0000` (Destaques)
- **Branco**: `#ffffff` (Texto)

### Identidade
- **Nome**: Aeron Portfolio
- **Tema**: Dark com destaques vermelhos
- **Estilo**: Moderno e elegante

## 🔐 Credenciais de Admin

```
Username: admin
Password: dev123
```

## 📍 Rotas Principais

| Rota | Descrição | Proteção |
|------|-----------|----------|
| `/` | Galeria pública | Pública |
| `/admin/login` | Login administrativo | Pública |
| `/admin/upload` | Upload de imagens | Protegida |
| `/admin/management` | Gerenciar imagens | Protegida |

## 🎯 Funcionalidades

### Área Pública
- ✅ Galeria responsiva com dark theme
- ✅ Modal de visualização
- ✅ Hover effects vermelhos

### Área Admin
- ✅ Login seguro
- ✅ Upload com drag & drop
- ✅ Reordenar imagens (drag & drop)
- ✅ Ocultar/mostrar imagens
- ✅ Deletar com confirmação

## 📦 Estrutura Rápida

```
src/app/
├── core/           # Serviços e guards
├── shared/         # Componentes compartilhados
├── features/
│   ├── public/     # Galeria
│   └── admin/      # Login, Upload, Management
└── environments/   # Configurações
```

## 🎨 Componentes Principais

### Header
- Logo "Aeron" em vermelho
- Menu responsivo
- Logout button

### Home
- Galeria em grid
- Cards com hover vermelho
- Modal de visualização

### Login
- Formulário reativo
- Validação
- Feedback visual

### Upload
- Drag & drop
- Preview de imagens
- Progress bar vermelho

### Management
- Lista de imagens
- Drag & drop para reordenar
- Toggle visibilidade
- Delete com confirmação

## 🛠️ Comandos Úteis

### Desenvolvimento
```bash
ng serve              # Iniciar dev server
ng serve --open       # Iniciar e abrir browser
ng serve --port 4300  # Usar porta diferente
```

### Build
```bash
ng build                          # Build produção
ng build --configuration development  # Build dev
```

### Testes
```bash
ng test   # Unit tests
ng e2e    # E2E tests
```

### Gerar Componentes
```bash
ng generate component nome-componente
ng generate service nome-servico
ng generate guard nome-guard
```

## 📝 Fluxo de Uso

### 1. Visualizar Galeria
1. Acesse `http://localhost:4200`
2. Veja as obras na galeria
3. Clique em uma imagem para ampliar

### 2. Fazer Login
1. Clique em "Admin" no header
2. Use: `admin` / `dev123`
3. Será redirecionado para Management

### 3. Upload de Imagens
1. Clique em "Upload" no header
2. Arraste imagens ou clique para selecionar
3. Veja preview
4. Clique em "Upload"
5. Aguarde confirmação

### 4. Gerenciar Imagens
1. Acesse "Manage" no header
2. Arraste para reordenar
3. Clique no olho para ocultar/mostrar
4. Clique na lixeira para deletar
5. Confirme a deleção

## 🎨 Customização Rápida

### Mudar Cores
Edite os arquivos `.scss` dos componentes:
- Vermelho: `#ff0000` → Sua cor
- Preto: `#0a0a0a` → Sua cor

### Mudar Logo
Edite `src/app/shared/components/header/header.component.html`:
```html
<a routerLink="/" class="logo">Seu Nome</a>
```

### Mudar Título
Edite `src/app/features/public/home/home.component.html`:
```html
<h1>Seu Título</h1>
```

### Mudar Credenciais
Edite `src/environments/environment.ts`:
```typescript
adminCredentials: {
  username: 'seu-usuario',
  password: 'sua-senha'
}
```

## 🐛 Troubleshooting

### Porta já em uso
```bash
ng serve --port 4300
```

### Erro de dependências
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro de compilação
```bash
ng build --configuration development
```

### Cache issues
```bash
ng cache clean
```

## 📚 Documentação Adicional

- `README.md` - Documentação completa
- `CHANGELOG.md` - Histórico de mudanças
- `COLOR_GUIDE.md` - Guia de cores
- `REBRANDING_SUMMARY.md` - Resumo do rebranding

## 🚀 Deploy

### Build para Produção
```bash
ng build --configuration production
```

Arquivos gerados em: `dist/aeron-portfolio/`

### Deploy Sugerido
- **Vercel**: `vercel deploy`
- **Netlify**: Arraste pasta `dist/`
- **Firebase**: `firebase deploy`
- **AWS S3**: Upload para bucket

## 💡 Dicas

1. **Performance**: Use lazy loading (já implementado)
2. **SEO**: Adicione meta tags no `index.html`
3. **PWA**: Adicione service worker
4. **Analytics**: Integre Google Analytics
5. **Monitoring**: Use Sentry para erros

## 🎯 Próximos Passos

1. Testar todas as funcionalidades
2. Adicionar suas próprias imagens
3. Customizar textos e branding
4. Configurar AWS S3 real (opcional)
5. Deploy para produção

---

**Versão**: 1.1.0  
**Status**: ✅ Pronto para uso  
**Suporte**: Documentação completa disponível
