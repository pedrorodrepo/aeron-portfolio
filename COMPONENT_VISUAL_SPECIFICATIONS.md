# Component Visual Specifications - Pastel Washed Palette

**Purpose**: Detailed visual specifications for each component with new pastel washed colors  
**Requirements**: 9.1, 9.2, 9.3

---

## Table of Contents

1. [Gallery Component (Public)](#gallery-component)
2. [Login Component (Admin)](#login-component)
3. [Upload Component (Admin)](#upload-component)
4. [Management Component (Admin)](#management-component)
5. [Header Component (Shared)](#header-component)
6. [Color Reference Table](#color-reference-table)

---

## Gallery Component

**File**: `src/app/features/public/home/home.component.scss`  
**Test**: `src/app/features/public/home/home.component.visual.spec.ts`

### Overall Container

```
Element: .home-container
├── Background: Linear gradient 135deg
│   ├── Start: #f0ebe4 (light pastel beige)
│   └── End: #e8e2d9 (medium pastel beige)
├── Min-height: 100vh
├── Display: flex-based layout
└── Visual Effect: Subtle depth with light, elegant aesthetic
```

### Hero Section

```
Element: .hero
├── Text-align: center
├── Padding: 4rem 2rem
├── Color: white (#ffffff)
└── h1 (Hero Title)
    ├── Font-size: 3rem (2rem on mobile)
    ├── Color: #d4a5a5 (pastel rose - ACCENT_PRIMARY)
    ├── Font-weight: 700
    ├── Margin: 0 0 1rem 0
    └── Visual Effect: Prominent, elegant, welcoming

Responsive: 
├── Desktop (>1024px): 3rem font size
├── Mobile (<768px): 2rem font size
└── Color: Consistent across all sizes
```

### Loading Spinner

```
Element: .spinner
├── Width: 50px
├── Height: 50px
├── Border: 4px solid rgba(255, 255, 255, 0.3)
├── Border-top-color: #d4a5a5 (ACCENT_PRIMARY)
├── Border-radius: 50%
├── Animation: spin 1s linear infinite
└── Visual Effect: Soft, elegant loading indicator

Color Changes:
├── Before: #ff0000 (vibrant red)
├── After: #d4a5a5 (pastel rose)
└── Impact: Softer, more refined loading state
```

### Gallery Grid

```
Element: .gallery
├── Display: grid
├── Grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
├── Gap: 2rem
├── Padding: 2rem
├── Max-width: 1400px
├── Margin: 0 auto
└── Responsive: Adjusts columns based on viewport width

Responsive:
├── Desktop: Full grid with 300px+ items
├── Tablet (768px): Adjusted grid with 250px items
├── Mobile: Larger items relative to screen
└── Colors: Consistent across all breakpoints
```

### Gallery Items

```
Element: .gallery-item
├── Position: relative
├── Border-radius: 12px
├── Overflow: hidden
├── Cursor: pointer
├── Transition: transform 0.3s ease, box-shadow 0.3s ease
├── Box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5)
├── Border: 1px solid #f0ebe4 (SECONDARY_BG)
├── Background: #f0ebe4 (SECONDARY_BG)
└── Visual Effect: Subtle, elegant card appearance

Color Changes:
├── Background: #1a1a1a → #f0ebe4
├── Border: #1a1a1a → #f0ebe4
└── Impact: Much lighter, more refined

Hover State:
├── Transform: translateY(-8px)
├── Box-shadow: 0 12px 24px rgba(212, 165, 165, 0.2)
├── Shadow Before: rgba(255, 0, 0, 0.3)
└── Shadow After: SHADOW_ACCENT_MEDIUM

Image Info Section:
├── Padding: 1rem
├── Background: #f0ebe4 (SECONDARY_BG)
└── h3 (Title)
    ├── Color: #d4a5a5 (ACCENT_PRIMARY)
    ├── Font-weight: 600
    ├── Font-size: 1.1rem
    └── Color Change: #ff0000 → #d4a5a5
```

### Modal Dialog

```
Element: .modal
├── Position: fixed
├── Top: 0, Left: 0, Right: 0, Bottom: 0
├── Background: rgba(0, 0, 0, 0.95)
├── Display: flex
├── Z-index: 1000
└── Padding: 2rem

Modal Content:
├── Background: #f0ebe4 (SECONDARY_BG)
├── Border-radius: 12px
├── Overflow: hidden
├── Border: 2px solid #d4a5a5 (ACCENT_PRIMARY)
├── Display: flex flex-direction: column
└── Color Change: Border #ff0000 → #d4a5a5

Image Container:
├── Background: #e8e2d9 (PRIMARY_BG)
├── Display: flex, align-items: center
└── justify-content: center

Navigation Buttons (.nav-btn):
├── Position: absolute
├── Background: rgba(212, 165, 165, 0.8) (ACCENT_PRIMARY with transparency)
├── Color: white
├── Width: 50px, Height: 50px
├── Border-radius: 50%
├── Cursor: pointer
├── Transition: background 0.3s ease, transform 0.2s ease
├── Hover: 
│   ├── Background: #d4a5a5 (full opacity ACCENT_PRIMARY)
│   └── Transform: scale(1.1)
└── Color Changes:
    ├── Before: rgba(255, 0, 0, 0.8) → #ff0000 hover
    └── After: rgba(212, 165, 165, 0.8) → #d4a5a5 hover

Modal Info Section:
├── Padding: 1.5rem
└── h2 (Title)
    ├── Color: #d4a5a5 (ACCENT_PRIMARY)
    ├── Font-size: 1.75rem
    └── Color Change: #ff0000 → #d4a5a5

Image Counter:
├── Color: #d4a5a5 (ACCENT_PRIMARY)
├── Font-weight: 600
└── Color Change: #ff0000 → #d4a5a5

Thumbnails Section:
├── Display: flex
├── Gap: 0.5rem
├── Padding: 1rem 1.5rem
├── Overflow-x: auto
├── Background: #e8e2d9 (PRIMARY_BG)
└── Border-top: 1px solid #333

Thumbnail Item:
├── Width: 80px, Height: 60px
├── Border-radius: 6px
├── Cursor: pointer
├── Border: 2px solid transparent
├── Transition: border-color 0.3s ease, transform 0.2s ease
├── Hover:
│   ├── Transform: scale(1.05)
│   └── Border-color: #d4a5a5 (ACCENT_PRIMARY)
├── Active:
│   ├── Border-color: #d4a5a5 (ACCENT_PRIMARY)
│   └── Box-shadow: 0 0 10px rgba(212, 165, 165, 0.2)
└── Color Changes:
    ├── Hover: #ff0000 → #d4a5a5
    └── Active: #ff0000 → #d4a5a5

Close Button:
├── Position: absolute (top: 1rem, right: 1rem)
├── Background: rgba(212, 165, 165, 0.8)
├── Color: white
├── Width: 40px, Height: 40px
├── Border-radius: 50%
├── Cursor: pointer
├── Transition: background 0.3s ease, transform 0.2s ease
├── Hover:
│   ├── Background: #d4a5a5 (full opacity)
│   └── Transform: scale(1.1)
└── Color Changes:
    ├── Before: rgba(255, 0, 0, 0.8) → #ff0000 hover
    └── After: rgba(212, 165, 165, 0.8) → #d4a5a5 hover
```

---

## Login Component

**File**: `src/app/features/admin/login/login.component.scss`  
**Test**: `src/app/features/admin/login/login.component.visual.spec.ts`

### Container

```
Element: .login-container
├── Min-height: 100vh
├── Display: flex
├── Align-items: center
├── Justify-content: center
├── Background: Linear gradient 135deg
│   ├── Start: #f0ebe4 (SECONDARY_BG)
│   └── End: #e8e2d9 (PRIMARY_BG)
├── Padding: 2rem
└── Visual Effect: Elegant, centered backdrop

Color Changes:
├── Before: Dark gradient (#1a1a1a → #0a0a0a)
└── After: Light gradient (#f0ebe4 → #e8e2d9)
```

### Login Card

```
Element: .login-card
├── Background: #ffffff (white - UNCHANGED)
├── Padding: 3rem
├── Border-radius: 12px
├── Box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2)
├── Width: 100%
├── Max-width: 400px
└── Visual Effect: Clean, high-contrast form area

Design Note: White background maintained for maximum contrast
and readability against light pastel background.
```

### Form Structure

```
Element: .form-group
├── Margin-bottom: 1.5rem
├── Label
│   ├── Display: block
│   ├── Margin-bottom: 0.5rem
│   ├── Color: #555555
│   └── Font-weight: 500
└── Input Field
    ├── Width: 100%
    ├── Padding: 0.75rem
    ├── Border: 2px solid #e0e0e0 (default)
    ├── Border-radius: 8px
    ├── Font-size: 1rem
    ├── Transition: border-color 0.3s ease
    └── Focus State:
        ├── Outline: none
        ├── Border-color: #d4a5a5 (ACCENT_PRIMARY)
        └── Color Change: #ff0000 → #d4a5a5
```

### Error Message

```
Element: .error-message
├── Background: #fee (light red background)
├── Color: #c33 (dark red text)
├── Padding: 0.75rem
├── Border-radius: 8px
├── Margin-bottom: 1rem
├── Text-align: center
└── Visual Effect: Clear error indication
```

### Login Button

```
Element: button
├── Width: 100%
├── Padding: 1rem
├── Background: Linear gradient 135deg
│   ├── Start: #d4a5a5 (ACCENT_PRIMARY)
│   ├── End: #c89898 (ACCENT_HOVER)
│   └── Color Change: #ff0000 → #cc0000 to #d4a5a5 → #c89898
├── Color: #ffffff (white)
├── Border: none
├── Border-radius: 8px
├── Font-size: 1rem
├── Font-weight: 600
├── Cursor: pointer
├── Transition: transform 0.2s ease, box-shadow 0.2s ease
├── Hover (not disabled):
│   ├── Transform: translateY(-2px)
│   └── Box-shadow: 0 4px 12px rgba(212, 165, 165, 0.2)
├── Disabled:
│   ├── Opacity: 0.6
│   └── Cursor: not-allowed
└── Visual Effect: Subtle lift and glow on hover
```

---

## Upload Component

**File**: `src/app/features/admin/upload/upload.component.scss`  
**Test**: `src/app/features/admin/upload/upload.component.visual.spec.ts`

### Container

```
Element: .upload-container
├── Min-height: 100vh
├── Background: #e8e2d9 (PRIMARY_BG)
├── Padding: 2rem
└── Visual Effect: Light, elegant background
```

### Upload Card

```
Element: .upload-card
├── Max-width: 800px
├── Margin: 0 auto
├── Background: #f0ebe4 (SECONDARY_BG)
├── Padding: 2rem
├── Border-radius: 12px
├── Box-shadow: 0 2px 8px rgba(212, 165, 165, 0.1)
└── Visual Effect: Subtle shadow with pastel accent tint
```

### Drop Zone

```
Element: .drop-zone
├── Border: 3px dashed #8b8b8b (GRAY_DARK)
├── Border-radius: 12px
├── Padding: 3rem
├── Text-align: center
├── Transition: border-color 0.3s ease
├── Cursor: pointer
├── Background: #e8e2d9 (PRIMARY_BG)
└── Hover:
    ├── Border-color: #d4a5a5 (ACCENT_PRIMARY)
    └── Color Change: #8b8b8b → #d4a5a5
```

### Drop Zone Label

```
Element: .drop-label
├── Cursor: pointer
├── Icon (.icon)
│   ├── Font-size: 4rem
│   └── Margin-bottom: 1rem
├── Paragraph (p)
│   ├── Color: #999999
│   ├── Font-size: 1.1rem
│   └── Margin-bottom: 0.5rem
└── Small Text
    └── Additional instructions
```

### File Group

```
Element: .group-item
├── Background: #e8e2d9 (PRIMARY_BG)
├── Border: 1px solid #8b8b8b (GRAY_DARK)
├── Border-radius: 8px
├── Padding: 1rem
├── Margin-bottom: 1rem
└── Visual Effect: Organized grouping

Group Header (.group-header h3):
├── Color: #d4a5a5 (ACCENT_PRIMARY)
├── Font-size: 1.1rem
├── Font-weight: 600
└── Color Change: #ff0000 → #d4a5a5
```

### Progress Indicator

```
Element: .progress-bar
├── Background: subtle background
├── Height: appropriate for visibility
└── .progress-fill
    ├── Background: Linear gradient
    │   ├── Start: #d4a5a5 (ACCENT_PRIMARY)
    │   ├── End: #c89898 (ACCENT_HOVER)
    │   └── Color Change: #ff0000 → #cc0000 to #d4a5a5 → #c89898
    ├── Transition: width animation
    └── Visual Effect: Smooth progress indication
```

### Buttons

```
Primary Button (.btn-primary):
├── Background: Linear gradient
│   ├── Start: #d4a5a5 (ACCENT_PRIMARY)
│   ├── End: #c89898 (ACCENT_HOVER)
│   └── Color Change: #ff0000 → #cc0000 to #d4a5a5 → #c89898
├── Color: #ffffff (white)
├── Padding: 1rem
├── Border-radius: 8px
├── Cursor: pointer
├── Transition: transform 0.2s ease, box-shadow 0.2s ease
└── Hover:
    ├── Transform: translateY(-2px)
    └── Box-shadow: 0 4px 12px rgba(212, 165, 165, 0.2)

Remove Button (.remove-btn):
├── Background: #d4a5a5 (ACCENT_PRIMARY)
├── Hover: #c89898 (ACCENT_HOVER)
├── Color: #ffffff (white)
└── Color Changes:
    ├── Before: #ff0000 → #cc0000
    └── After: #d4a5a5 → #c89898
```

---

## Management Component

**File**: `src/app/features/admin/management/management.component.scss`  
**Test**: `src/app/features/admin/management/management.component.visual.spec.ts`

### Container

```
Element: .management-container
├── Min-height: 100vh
├── Background: #e8e2d9 (PRIMARY_BG)
└── Visual Effect: Light, elegant background
```

### Image Items

```
Element: .image-item
├── Background: #f0ebe4 (SECONDARY_BG)
├── Box-shadow: 0 2px 8px rgba(212, 165, 165, 0.1)
├── Border-radius: 12px
├── Padding: 1rem
├── Margin-bottom: 1rem
└── Visual Effect: Subtle, elegant item styling

Color Changes:
├── Shadow: rgba(255, 0, 0, 0.1) → rgba(212, 165, 165, 0.1)
└── Background: #1a1a1a → #f0ebe4
```

### Image Count Badge

```
Element: .image-count
├── Background: rgba(0, 0, 0, 0.85)
├── Color: #ffffff (white)
├── Padding: 0.4rem 0.7rem
├── Border-radius: 20px
├── Border: 1px solid rgba(212, 165, 165, 0.5)
└── Color Change: rgba(255, 0, 0, 0.5) → rgba(212, 165, 165, 0.5)

Count Number:
├── Color: #d4a5a5 (ACCENT_PRIMARY)
└── Color Change: #ff0000 → #d4a5a5
```

### Upload Button

```
Element: .btn-upload
├── Background: Linear gradient
│   ├── Start: #d4a5a5 (ACCENT_PRIMARY)
│   ├── End: #c89898 (ACCENT_HOVER)
│   └── Color Change: #ff0000 → #cc0000 to #d4a5a5 → #c89898
├── Color: #ffffff (white)
├── Padding: 1rem
├── Border-radius: 8px
├── Cursor: pointer
├── Transition: transform 0.2s ease, box-shadow 0.2s ease
└── Hover:
    ├── Transform: translateY(-2px)
    └── Box-shadow: 0 4px 12px rgba(212, 165, 165, 0.2)
```

### Delete Confirmation Dialog

```
Element: .delete-confirm
├── Background: semi-transparent dark overlay
├── Box-shadow: rgba(212, 165, 165, 0.2)
├── Border: 2px solid #d4a5a5 (ACCENT_PRIMARY)
└── Color Change: red accents → pastel rose accents

Confirm Button (.btn-yes):
├── Background: #d4a5a5 (ACCENT_PRIMARY)
├── Hover: #c89898 (ACCENT_HOVER)
├── Color: #ffffff (white)
└── Color Changes:
    ├── Before: #ff0000 → #cc0000
    └── After: #d4a5a5 → #c89898
```

### Loading Spinner

```
Element: .spinner
├── Width: 50px
├── Height: 50px
├── Border: 4px solid rgba(255, 255, 255, 0.3)
├── Border-top-color: #d4a5a5 (ACCENT_PRIMARY)
├── Border-radius: 50%
├── Animation: rotate 1s linear infinite
└── Color Change: #ff0000 → #d4a5a5
```

### Empty State

```
Element: .empty-state
├── Background: #f0ebe4 (SECONDARY_BG)
├── Padding: 3rem
├── Border-radius: 12px
├── Text-align: center
└── Color: #cccccc (light gray text)

Empty State Button:
├── Uses same .btn-upload styling
└── Gradient: #d4a5a5 → #c89898
```

---

## Header Component

**File**: `src/app/shared/components/header/header.component.scss`  
**Test**: `src/app/shared/components/header/header.component.visual.spec.ts`

### Header Structure

```
Element: header
├── Display: flex
├── Justify-content: space-between
├── Align-items: center
├── Padding: appropriate spacing
└── Background: Consistent with page theme
```

### Logo/Branding

```
Element: .logo
├── Color: #d4a5a5 (ACCENT_PRIMARY)
├── Font-weight: 600
├── Font-size: appropriate for header
└── Color Change: #ff0000 → #d4a5a5
```

### Navigation Links

```
Element: a (navigation links)
├── Color: #ffffff (white)
├── Text-decoration: none
├── Transition: color 0.3s ease
└── Default: white text

Hover State:
├── Color: #d4a5a5 (ACCENT_PRIMARY) or
├── Opacity: increased
└── Transition effect: smooth

Active State:
├── Color: #d4a5a5 (ACCENT_PRIMARY)
├── Border-bottom: 2px solid #d4a5a5 (or underline)
└── Color Change: #ff0000 → #d4a5a5
```

---

## Color Reference Table

### Complete Color Mapping

| Name | Old Value | New Value | Usage |
|------|-----------|-----------|-------|
| Primary Background | #0a0a0a | #e8e2d9 | Main container backgrounds |
| Secondary Background | #1a1a1a | #f0ebe4 | Cards, secondary areas |
| Accent Primary | #ff0000 | #d4a5a5 | Buttons, titles, highlights |
| Accent Hover | #cc0000 | #c89898 | Hover states, darker variant |
| Text Primary | #ffffff | #ffffff | Main text (unchanged) |
| Gray Dark | #333333 | #8b8b8b | Borders, secondary elements |
| Gray Medium | #666666 | #a8a8a8 | Secondary text |
| Gray Light | #999999 | #c9c9c9 | Tertiary text |
| Shadow Light | rgba(255,0,0,0.1) | rgba(212,165,165,0.1) | Subtle shadows |
| Shadow Medium | rgba(255,0,0,0.2) | rgba(212,165,165,0.2) | Standard shadows |
| Shadow Strong | rgba(255,0,0,0.4) | rgba(212,165,165,0.4) | Prominent shadows |

### Color Variable Names (SCSS)

```scss
$color-bg-primary: #e8e2d9;
$color-bg-secondary: #f0ebe4;
$color-accent-primary: #d4a5a5;
$color-accent-hover: #c89898;
$color-text-primary: #ffffff;
$color-gray-dark: #8b8b8b;
$color-gray-medium: #a8a8a8;
$color-gray-light: #c9c9c9;
$color-shadow-accent-light: rgba(212, 165, 165, 0.1);
$color-shadow-accent-medium: rgba(212, 165, 165, 0.2);
$color-shadow-accent-strong: rgba(212, 165, 165, 0.4);
```

---

## Summary of Changes

### Gallery Component
- **6 background color changes**: Dark → light pastel
- **7 accent color changes**: Vibrant red → pastel rose
- **4 shadow color changes**: Red tint → pastel tint
- **Net result**: Elegant, light, sophisticated gallery

### Login Component
- **3 background color changes**: Dark gradient → light gradient
- **2 focus/button color changes**: Red → pastel rose
- **Shadow changes**: Bright glow → soft pastel shadow
- **Net result**: Clean, elegant login experience

### Upload Component
- **4 background color changes**: Dark → light
- **3 interactive color changes**: Red → pastel rose
- **Shadow changes**: Subtle pastel tints
- **Net result**: Light, approachable upload interface

### Management Component
- **5 background color changes**: Dark → light
- **5 accent color changes**: Red → pastel rose
- **Shadow changes**: Red tint → pastel tint
- **Net result**: Elegant, organized management interface

### Header Component
- **Navigation accent changes**: Red → pastel rose
- **Hover effect changes**: Red glow → pastel shadow
- **Logo emphasis**: Maintained with pastel color
- **Net result**: Cohesive, elegant navigation

---

**Total Color Changes Across All Components**: 40+ color value updates  
**Result**: Cohesive, sophisticated, elegant user interface with pastel washed aesthetic

---

**Last Updated**: 2024-01-01  
**Status**: ✅ Complete Visual Specification
