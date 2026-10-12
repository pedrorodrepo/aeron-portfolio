# NotFoundComponent

Componente de página 404 personalizada para o Aeron Portfolio.

## 📋 Funcionalidades

- **Design Consistente**: Segue o tema dark com destaques em vermelho (#ff0000)
- **Responsivo**: Adaptado para mobile, tablet e desktop
- **Acessível**: Implementa ARIA labels, suporte a contraste alto e movimento reduzido
- **Navegação**: Links para voltar ao início e acessar login admin
- **Animações**: Transições suaves com fadeIn e slideUp
- **Lazy Loading**: Carregado apenas quando necessário

## 🎨 Design

### Cores
- Background: `#0a0a0a` com gradiente para `#1a1a1a`
- Texto principal: `#ffffff`
- Texto secundário: `#999999`
- Texto de ajuda: `#666666`
- Destaque: `#ff0000` / `#cc0000`

### Elementos Visuais
- Ícone SVG 404 com animação de pulse
- Botão primário com gradiente vermelho
- Botão secundário com borda transparente
- Animações suaves de entrada

## 🔧 Implementação

### Estrutura de Arquivos
```
src/app/shared/components/not-found/
├── not-found.component.ts      # Componente principal
├── not-found.component.html    # Template
├── not-found.component.scss    # Estilos
├── not-found.component.spec.ts # Testes
└── README.md                   # Documentação
```

### Roteamento
O componente é carregado automaticamente para rotas não encontradas:
```typescript
{
  path: '**',
  loadComponent: () => import('./shared/components/not-found/not-found.component').then(m => m.NotFoundComponent)
}
```

## ♿ Acessibilidade

- **ARIA**: Labels apropriados para elementos decorativos
- **Contraste**: Suporte a modo de alto contraste
- **Movimento**: Respeita preferência de movimento reduzido
- **Navegação**: Links com role="button" para clareza
- **Foco**: Indicadores visuais de foco

## 📱 Responsividade

### Breakpoints
- **Mobile**: < 480px
- **Tablet**: < 768px
- **Desktop**: > 768px

### Adaptações
- Redimensionamento do ícone 404
- Ajuste de tipografia
- Layout de botões em coluna no mobile
- Espaçamentos otimizados

## 🧪 Testes

O componente inclui testes unitários que verificam:
- Renderização correta
- Navegação funcional
- Atributos de acessibilidade
- Estrutura HTML
- Classes CSS

## 🚀 Como Testar

1. Execute o servidor de desenvolvimento:
   ```bash
   ng serve
   ```

2. Acesse uma rota inexistente:
   ```
   http://localhost:4200/rota-que-nao-existe
   ```

3. Verifique se a página 404 é exibida corretamente

## 📝 Critérios de Aceitação Atendidos

- ✅ Página 404 é exibida para rotas inexistentes
- ✅ Design consistente com identidade visual
- ✅ Links de navegação funcionam corretamente
- ✅ Responsiva em mobile, tablet e desktop
- ✅ Acessível (WCAG 2.1 AA)
- ✅ Carregamento rápido com lazy loading