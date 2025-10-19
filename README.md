# Aeron Portfolio

Uma Single Page Application (SPA) desenvolvida em Angular para servir como portfólio digital com design moderno em tons de preto e vermelho.

## Design

- **Paleta de Cores**: Tons de preto (#0a0a0a, #1a1a1a) com destaques em vermelho (#ff0000, #cc0000)
- **Estilo**: Dark theme moderno e elegante
- **Destaques**: Vermelho vibrante para CTAs e elementos interativos
- **Tipografia**: System fonts para performance otimizada

## Funcionalidades

### Área Pública
- ✅ Galeria de fotos responsiva com dark theme
- ✅ Visualização ampliada de imagens (modal)
- ✅ Design moderno e atrativo
- ✅ Hover effects com destaque vermelho

### Área Administrativa
- ✅ Sistema de login com credenciais fixas
- ✅ Upload de imagens com drag & drop
- ✅ Gerenciamento de imagens (reordenar, ocultar, deletar)
- ✅ Interface intuitiva para administração
- ✅ Feedback visual em vermelho

## Tecnologias

- Angular 18
- TypeScript
- SCSS
- Angular CDK (Drag & Drop)
- LocalStorage (simulando S3)

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm start
# ou
ng serve --open
```

Acesse: `http://localhost:4200`

## Credenciais de Admin

**Ambiente Development:**
- Username: `admin`
- Password: `dev123`

## Estrutura do Projeto

```
src/
├── app/
│   ├── core/
│   │   ├── guards/          # Auth guard
│   │   └── services/        # Serviços principais
│   ├── shared/
│   │   ├── components/      # Componentes compartilhados
│   │   └── models/          # Interfaces e modelos
│   ├── features/
│   │   ├── public/          # Componentes públicos
│   │   │   └── home/        # Galeria principal
│   │   └── admin/           # Componentes administrativos
│   │       ├── login/       # Login
│   │       ├── upload/      # Upload de imagens
│   │       └── management/  # Gerenciamento
│   └── environments/        # Configurações de ambiente
```

## Rotas

- `/` - Galeria pública
- `/admin/login` - Login administrativo
- `/admin/upload` - Upload de imagens (protegido)
- `/admin/management` - Gerenciamento de imagens (protegido)

## Paleta de Cores

### Cores Principais
- **Background Principal**: `#0a0a0a`
- **Background Secundário**: `#1a1a1a`
- **Texto Principal**: `#ffffff`
- **Texto Secundário**: `#999999`

### Cores de Destaque
- **Vermelho Principal**: `#ff0000`
- **Vermelho Hover**: `#cc0000`
- **Sombras Vermelhas**: `rgba(255, 0, 0, 0.2-0.4)`

### Cores de Suporte
- **Cinza Escuro**: `#333333`
- **Cinza Médio**: `#666666`
- **Cinza Claro**: `#999999`

## Build

```bash
# Development
ng build --configuration development

# Production
ng build --configuration production
```

## Testes

```bash
# Unit tests
ng test

# E2E tests
ng e2e
```

## Características do Design

### Dark Theme
- Background escuro para reduzir fadiga visual
- Alto contraste para melhor legibilidade
- Elementos em vermelho para guiar a atenção

### Interatividade
- Hover effects com transições suaves
- Box shadows vermelhos em elementos interativos
- Animações sutis para feedback visual

### Responsividade
- Mobile-first approach
- Grid adaptativo para diferentes tamanhos de tela
- Menu mobile com toggle

## Próximos Passos

- [ ] Integração real com AWS S3
- [ ] Implementar testes unitários
- [ ] Adicionar testes E2E
- [ ] Configurar CI/CD
- [ ] Implementar Service Worker para cache offline
- [ ] Adicionar mais filtros e ordenação na galeria
- [ ] Implementar categorias/tags

## Notas

Esta é uma implementação funcional que usa LocalStorage para simular o S3. Para produção, você precisará:

1. Configurar credenciais AWS no arquivo `environment.ts`
2. Implementar a integração real com S3 no `S3Service`
3. Configurar CORS no bucket S3
4. Implementar autenticação mais robusta (JWT, OAuth, etc.)

## Licença

MIT
