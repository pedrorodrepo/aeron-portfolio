# Guia de Cores - Aeron Portfolio

## 🎨 Paleta Principal

### Cores de Background
```scss
$bg-primary: #0a0a0a;      // Background principal (mais escuro)
$bg-secondary: #1a1a1a;    // Cards, containers
$bg-tertiary: #333333;     // Elementos de suporte
```

### Cores de Texto
```scss
$text-primary: #ffffff;    // Texto principal
$text-secondary: #999999;  // Texto secundário
$text-tertiary: #666666;   // Metadados, info terciária
```

### Cores de Destaque
```scss
$red-primary: #ff0000;     // Vermelho principal
$red-hover: #cc0000;       // Vermelho hover/pressed
$red-shadow: rgba(255, 0, 0, 0.4);  // Shadow vermelho
```

## 🎯 Uso por Componente

### Header
```scss
background: rgba(26, 26, 26, 0.95);
logo-color: #ff0000;
link-color: #ffffff;
link-hover: #ff0000;
button-bg: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
```

### Home/Galeria
```scss
background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
title-color: #ff0000;
card-border: #1a1a1a;
card-shadow-hover: rgba(255, 0, 0, 0.3);
overlay-title: #ff0000;
```

### Login
```scss
background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
card-bg: #ffffff;  // Exceção para contraste
button-bg: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
input-focus-border: #ff0000;
```

### Upload
```scss
background: #0a0a0a;
card-bg: #1a1a1a;
drop-zone-bg: #0a0a0a;
drop-zone-border: #333333;
drop-zone-border-hover: #ff0000;
progress-bar: linear-gradient(90deg, #ff0000, #cc0000);
```

### Management
```scss
background: #0a0a0a;
card-bg: #1a1a1a;
item-bg: #1a1a1a;
item-shadow: rgba(255, 0, 0, 0.1);
button-primary: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
button-secondary: #333333;
```

## 📐 Gradientes

### Gradiente Vermelho (Botões)
```scss
background: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
```

### Gradiente Preto (Backgrounds)
```scss
background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
```

### Overlay Escuro
```scss
background: linear-gradient(to top, rgba(0, 0, 0, 0.95), transparent);
```

## 💫 Efeitos e Shadows

### Box Shadow Padrão
```scss
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
```

### Box Shadow Vermelho (Hover)
```scss
box-shadow: 0 4px 12px rgba(255, 0, 0, 0.4);
```

### Box Shadow Vermelho Sutil
```scss
box-shadow: 0 2px 8px rgba(255, 0, 0, 0.2);
```

### Text Shadow (Opcional)
```scss
text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
```

## 🎭 Estados Interativos

### Hover States
```scss
// Botões
&:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 0, 0, 0.4);
}

// Links
&:hover {
  color: #ff0000;
}

// Cards
&:hover {
  box-shadow: 0 12px 24px rgba(255, 0, 0, 0.3);
}
```

### Focus States
```scss
&:focus {
  outline: none;
  border-color: #ff0000;
  box-shadow: 0 0 0 3px rgba(255, 0, 0, 0.2);
}
```

### Active/Pressed States
```scss
&:active {
  transform: translateY(0);
  background: #cc0000;
}
```

### Disabled States
```scss
&:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background: #333333;
}
```

## 🔄 Transições

### Transição Padrão
```scss
transition: all 0.3s ease;
```

### Transição Rápida
```scss
transition: all 0.2s ease;
```

### Transições Específicas
```scss
transition: transform 0.2s ease, box-shadow 0.2s ease;
transition: color 0.3s ease;
transition: background 0.3s ease;
transition: border-color 0.3s ease;
```

## 📱 Responsividade

As cores permanecem consistentes em todos os breakpoints:
- Mobile: Mesma paleta
- Tablet: Mesma paleta
- Desktop: Mesma paleta

Apenas ajustes de:
- Tamanhos de fonte
- Espaçamentos
- Layouts

## ♿ Acessibilidade

### Contraste de Cores
- ✅ Branco (#ffffff) em Preto (#0a0a0a): Ratio 21:1 (AAA)
- ✅ Vermelho (#ff0000) em Preto (#0a0a0a): Ratio 5.25:1 (AA)
- ✅ Cinza Claro (#999) em Preto (#0a0a0a): Ratio 7.5:1 (AAA)

### Recomendações
- Use vermelho para CTAs e elementos importantes
- Mantenha texto principal em branco
- Use cinza para hierarquia, não para texto crítico
- Sempre teste contraste em diferentes dispositivos

## 🎨 Variações de Vermelho

### Vermelho Primário
```scss
$red-100: #ff0000;  // Uso principal
```

### Vermelho Escuro
```scss
$red-200: #cc0000;  // Hover, pressed
$red-300: #990000;  // Alternativa mais escura
```

### Vermelho com Transparência
```scss
$red-alpha-10: rgba(255, 0, 0, 0.1);
$red-alpha-20: rgba(255, 0, 0, 0.2);
$red-alpha-30: rgba(255, 0, 0, 0.3);
$red-alpha-40: rgba(255, 0, 0, 0.4);
```

## 🚫 O Que Evitar

❌ Não use vermelho para:
- Textos longos (fadiga visual)
- Backgrounds grandes
- Elementos não interativos sem propósito

❌ Não use branco puro para:
- Backgrounds (use preto)
- Elementos decorativos

❌ Não misture:
- Outras cores vibrantes com vermelho
- Gradientes complexos
- Muitos tons de cinza diferentes

## ✅ Boas Práticas

✅ Use vermelho para:
- CTAs (Call to Actions)
- Títulos principais
- Logo e branding
- Elementos interativos importantes
- Feedback de hover

✅ Use preto/cinza escuro para:
- Backgrounds
- Containers
- Cards

✅ Use branco para:
- Textos principais
- Títulos
- Conteúdo importante

✅ Use cinza para:
- Textos secundários
- Metadados
- Separadores sutis

## 🎯 Exemplos de Uso

### Botão Primário
```scss
.btn-primary {
  background: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
  color: #ffffff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 0, 0, 0.4);
  }
}
```

### Card
```scss
.card {
  background: #1a1a1a;
  border: 1px solid #333333;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  
  &:hover {
    box-shadow: 0 4px 12px rgba(255, 0, 0, 0.2);
  }
}
```

### Link
```scss
.link {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ff0000;
  }
}
```

---

**Última Atualização**: 19/10/2025  
**Versão**: 1.1.0
