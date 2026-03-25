# Design System Quick Reference

## 🎨 Colors Cheat Sheet

| Token | Hex | Use Case |
|-------|-----|----------|
| `--color-bg` | #0F0F0F | Page background |
| `--color-surface` | #1A1A1A | Cards, sections |
| `--color-elevated` | #202020 | Hover states |
| `--color-hover` | #242424 | Button hover |
| `--color-text` | #EAEAEA | Primary text |
| `--color-text-muted` | #A1A1A1 | Labels, secondary |
| `--color-text-subtle` | #6B6B6B | Timestamps |
| `--color-accent` | #3B82F6 | Primary actions |
| `--color-success` | #22C55E | Success states |
| `--color-warning` | #F59E0B | Warnings |
| `--color-error` | #EF4444 | Errors |

---

## 🧩 Component Classes

### Buttons
```html
<button class="btn">Default</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-ghost">Ghost</button>
```

### Cards
```html
<div class="card">Interactive</div>
<div class="card-flat">Static</div>
```

### Inputs
```html
<input class="input" />
```

### Status
```html
<div class="status status-success">Live</div>
<div class="status status-warning">Alert</div>
<div class="status status-error">Error</div>
```

### Dividers
```html
<hr class="divider" />
<div class="divider-vertical"></div>
```

---

## ✍️ Typography

| Weight | Value | Use |
|--------|-------|-----|
| Regular | 400 | Body |
| Medium | 500 | UI labels |
| Semibold | 600 | Headings |

---

## 🎭 Motion

```css
/* Standard */
transition: all 0.2s ease;

/* Lift (cards) */
transform: translateY(-2px);

/* Lift (buttons) */
transform: translateY(-1px);
```

---

## 💡 Common Patterns

### Form
```tsx
<form className="card">
  <input className="input" />
  <button className="btn btn-primary">Submit</button>
</form>
```

### Status Badge
```tsx
<div className="status status-success">
  <span className="w-2 h-2 rounded-full bg-success" />
  Available
</div>
```

### Section Divider
```tsx
<hr className="divider" />
```
