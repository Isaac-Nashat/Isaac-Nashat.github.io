# Design System Documentation

## 🎨 Color Tokens

### Backgrounds
```css
--color-bg: #0F0F0F           /* Main background - soft black */
--color-surface: #1A1A1A      /* Cards, sections */
--color-elevated: #202020     /* Hover states, lifted elements */
--color-hover: #242424        /* Interactive hover background */
```

**Usage:**
- `bg`: Page backgrounds
- `surface`: Card containers, sections
- `elevated`: Hover states on cards
- `hover`: Button/link hover states

---

### Text Hierarchy
```css
--color-text: #EAEAEA         /* Primary content */
--color-text-muted: #A1A1A1   /* Secondary text, labels */
--color-text-subtle: #6B6B6B  /* Metadata, timestamps */
```

**Usage Guide:**
- **Primary** (`text`): Main content, headings, body text
- **Muted** (`text-muted`): Subheadings, labels, secondary info
- **Subtle** (`text-subtle`): Timestamps, metadata, tertiary info

---

### Borders & Dividers
```css
--color-border: #2A2A2A           /* Standard borders */
--color-border-soft: #1F1F1F      /* Subtle borders */
--color-divider: rgba(255,255,255,0.06)  /* Section dividers */
```

---

### Semantic Colors
```css
--color-accent: #3B82F6       /* Primary actions, focus states */
--color-success: #22C55E      /* Success states, positive feedback */
--color-warning: #F59E0B      /* Warnings, alerts */
--color-error: #EF4444        /* Errors, destructive actions */
```

---

## ✍️ Typography

### Font Families
```css
--font-serif: var(--font-serif)   /* Headings, emphasis */
--font-sans: var(--font-sans)     /* Body, UI */
```

### Font Weights
```css
--font-weight-regular: 400    /* Body text */
--font-weight-medium: 500     /* UI labels, buttons */
--font-weight-semibold: 600   /* Headings, emphasis */
```

**Usage:**
- Body text → 400
- UI labels, buttons → 500
- Headings → 600

---

## 🧩 Component Primitives

### Buttons

#### Base Button
```html
<button class="btn">Default Button</button>
```

#### Primary Button
```html
<button class="btn btn-primary">Primary Action</button>
```

#### Ghost Button
```html
<button class="btn btn-ghost">Subtle Action</button>
```

**States:**
- Default → `surface` background
- Hover → `hover` background + `-1px` translateY
- Active → `0px` translateY

---

### Cards

#### Interactive Card
```html
<div class="card">
  <!-- Content -->
</div>
```
**Behavior:** Lifts on hover (`-2px` translateY)

#### Flat Card
```html
<div class="card-flat">
  <!-- Content -->
</div>
```
**Behavior:** No hover effect

---

### Inputs

```html
<input type="text" class="input" placeholder="Enter text..." />
```

**States:**
- Default → `surface` background, `border` border
- Hover → Enhanced border
- Focus → `accent` border, `elevated` background

---

### Status Indicators

```html
<div class="status status-success">
  <span class="w-2 h-2 rounded-full bg-success"></span>
  Available
</div>
```

**Variants:**
- `.status-success` → Green
- `.status-warning` → Orange
- `.status-error` → Red

---

### Dividers

```html
<!-- Horizontal -->
<hr class="divider" />

<!-- Vertical -->
<div class="divider-vertical"></div>
```

---

## 🎭 Motion & Interaction

### Standard Transitions
```css
transition: all 0.2s ease;
```

### Elevation Behavior
Cards and buttons lift on hover:
```css
transform: translateY(-2px);  /* Cards */
transform: translateY(-1px);  /* Buttons */
```

### Active States
Elements compress on click:
```css
transform: translateY(0);
```

---

## 🔧 Usage in Components

### React/Next.js Example

```tsx
// Using primitives
export function ContactForm() {
  return (
    <form className="card">
      <input 
        type="email" 
        className="input" 
        placeholder="your@email.com"
      />
      <button className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
```

### Using CSS Variables

```tsx
<div style={{ 
  background: 'var(--color-surface)',
  color: 'var(--color-text-muted)' 
}}>
  Custom component
</div>
```

---

## 📐 Best Practices

### DO ✅
- Use semantic tokens (`--color-text`, not hex values)
- Apply primitives (`.btn`, `.card`) for consistency
- Follow text hierarchy (text → muted → subtle)
- Use elevation for interactive elements

### DON'T ❌
- Hardcode colors (`#fff`, `#000`)
- Create one-off button styles
- Skip hover states
- Mix different spacing systems

---

## 🚀 Migration Path

### Phase 1: Replace Hardcoded Colors
```tsx
// Before
<div className="bg-[#000] text-white">

// After
<div className="bg-bg text-text">
```

### Phase 2: Adopt Primitives
```tsx
// Before
<button className="px-6 py-3 bg-surface hover:bg-elevated...">

// After
<button className="btn">
```

### Phase 3: Remove Legacy Aliases
Once migration is complete, remove these from `globals.css`:
- `--color-black`
- `--color-off-black`
- `--color-white`
- `--color-gray`
- `--color-dark-gray`
- `--color-mid-gray`
- `--color-muted`

---

## 💡 Design Philosophy

This system is built on:

1. **Restraint** - Limited palette = consistent feel
2. **Hierarchy** - Clear visual levels (text, muted, subtle)
3. **Elevation** - Depth through subtle backgrounds
4. **Consistency** - Reusable primitives, not one-offs
5. **Polish** - Microinteractions on every element

---

## 🎯 Current Status

**Level:** Top-tier SaaS polish (Stripe/Linear/Vercel quality)

**Next Steps:**
- Convert more components to use primitives
- Remove legacy color aliases
- Add animation tokens
- Create component library docs
