# Changelog - Aeron Portfolio

## [1.2.0] - Melhorias de Upload e Exibição

### Novas Funcionalidades
- ✅ **Campo de Descrição no Upload**: Cada imagem pode ter título e descrição personalizados
- ✅ **Exibição de Descrição nas Miniaturas**: Cards da galeria mostram título, descrição (2 linhas) e data
- ✅ **Exibição de Descrição no Modal**: Modal de detalhes mostra descrição completa e data
- ✅ **Formato de Data Padronizado**: MM/DD/YYYY em toda aplicação

### Upload Component
- Adicionados campos de título e descrição para cada imagem
- Interface melhorada com inputs individuais
- Preview cards expandidos (250px)
- Título auto-preenchido com nome do arquivo
- Validação visual com border vermelho

### Gallery Component
- Informações sempre visíveis (não apenas no hover)
- Descrição truncada em 2 linhas
- Data formatada em MM/DD/YYYY
- Hierarquia visual clara

### Modal Component
- Descrição completa sem truncamento
- Tipografia otimizada para leitura
- Espaçamento melhorado

### Arquivos Modificados
- `upload.component.ts` - Adicionada interface FileWithMetadata
- `upload.component.html` - Inputs de título e descrição
- `upload.component.scss` - Estilo para metadata inputs
- `s3.service.ts` - Método uploadImage aceita título e descrição
- `home.component.html` - Exibição de descrição e data
- `home.component.scss` - Novos estilos para image-info

## [1.1.0] - Rebranding e Redesign

### Mudanças de Nome
- ✅ Projeto renomeado de "Artist Portfolio SPA" para "Aeron Portfolio"
- ✅ Atualizado em todos os arquivos de configuração
- ✅ Bucket S3 renomeado para `aeron-portfolio-dev`
- ✅ Título da aplicação atualizado
- ✅ Logo e branding atualizados

### Redesign - Dark Theme com Vermelho

#### Cores Principais Alteradas
**Antes (Roxo/Azul):**
- Gradiente: `#667eea` → `#764ba2`
- Background: Branco/Cinza claro
- Tema: Light

**Depois (Preto/Vermelho):**
- Gradiente: `#ff0000` → `#cc0000`
- Background: `#0a0a0a` / `#1a1a1a`
- Tema: Dark

#### Componentes Atualizados

##### Header
- Background: `#1a1a1a` com transparência
- Logo: Vermelho `#ff0000`
- Links: Branco com hover vermelho
- Botão Logout: Gradiente vermelho com shadow effect

##### Home/Galeria
- Background: Gradiente preto `#1a1a1a` → `#0a0a0a`
- Título: Vermelho `#ff0000`
- Cards: Border preto com shadow vermelho no hover
- Modal: Background `#1a1a1a` com border vermelho
- Overlay: Títulos em vermelho

##### Login
- Background: Gradiente preto
- Card: Fundo branco mantido para contraste
- Botão: Gradiente vermelho com shadow effect
- Input focus: Border vermelho

##### Upload
- Background: `#0a0a0a`
- Card: `#1a1a1a` com shadow vermelho
- Drop zone: Background `#0a0a0a` com border vermelho no hover
- Progress bar: Gradiente vermelho
- Botões: Primário vermelho, secundário cinza escuro

##### Management
- Background: `#0a0a0a`
- Cards: `#1a1a1a` com shadow vermelho
- Textos: Branco/Cinza
- Botão Upload: Gradiente vermelho
- Confirmação de delete: Background preto com border

#### Efeitos Visuais Adicionados
- ✅ Box shadows vermelhos em hover
- ✅ Transições suaves em todos os elementos
- ✅ Glow effect vermelho em botões
- ✅ Borders sutis para definição de elementos
- ✅ Contraste otimizado para legibilidade

#### Acessibilidade
- ✅ Alto contraste mantido (branco em preto)
- ✅ Vermelho usado estrategicamente para CTAs
- ✅ Textos secundários em cinza para hierarquia
- ✅ Tamanhos de fonte mantidos para legibilidade

### Arquivos Modificados

#### Configuração
- `angular.json` - Nome do projeto
- `package.json` - Nome e scripts
- `src/app/app.component.ts` - Título

#### Environments
- `src/environments/environment.ts` - Bucket S3
- `src/environments/environment.development.ts` - Bucket S3

#### Componentes
- `src/app/shared/components/header/` - Cores e branding
- `src/app/features/public/home/` - Dark theme
- `src/app/features/admin/login/` - Cores vermelhas
- `src/app/features/admin/upload/` - Dark theme
- `src/app/features/admin/management/` - Dark theme

#### Estilos
- `src/styles.scss` - Background global preto

### Melhorias de UX
- ✅ Feedback visual mais forte com vermelho
- ✅ Contraste melhorado para dark theme
- ✅ Hover states mais evidentes
- ✅ Animações mais suaves
- ✅ Shadows para profundidade

### Performance
- ✅ Sem impacto negativo
- ✅ Mesma estrutura de componentes
- ✅ CSS otimizado

## [1.0.0] - Versão Inicial

### Funcionalidades Implementadas
- ✅ Galeria pública responsiva
- ✅ Sistema de autenticação
- ✅ Upload de imagens
- ✅ Gerenciamento de imagens
- ✅ Drag & drop para reordenação
- ✅ Modal de visualização
- ✅ Lazy loading de rotas
- ✅ Guards de autenticação

### Tecnologias
- Angular 18
- TypeScript
- SCSS
- Angular CDK
- LocalStorage

---

**Nota**: Esta aplicação está em desenvolvimento ativo. Futuras versões incluirão integração real com AWS S3 e autenticação JWT.
