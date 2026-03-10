# 📁 Portfolio Website — Developer Guide

## Client: Creative Designer | Theme: Light & Clean

---

## FOLDER STRUCTURE

```
portfolio/
│
├── index.html              ← Main HTML file (single page)
│
├── css/
│   └── style.css           ← All styles, CSS variables, responsive
│
├── js/
│   └── main.js             ← All interactions & animations
│
└── assets/
    ├── images/           ← Project screenshots (project-1.jpg etc.)
    └── icons/              ← Favicon, social icons (optional)
```

---

## 🎨 DESIGN SYSTEM

### Fonts (Google Fonts — free)

| Font                 | Use                                       |
| -------------------- | ----------------------------------------- |
| `Cormorant Garamond` | Headings, hero title (elegant, editorial) |
| `DM Sans`            | Body text, nav, buttons (clean, modern)   |

### Color Palette

| Variable     | Hex       | Use                          |
| ------------ | --------- | ---------------------------- |
| `--bg`       | `#F9F7F4` | Page background (warm white) |
| `--bg-alt`   | `#F2EFE9` | Skills section background    |
| `--fg`       | `#1A1916` | Main text, buttons           |
| `--fg-muted` | `#6B6760` | Subtitles, captions          |
| `--accent`   | `#C9A96E` | Gold accent — labels, icons  |
| `--white`    | `#FFFFFF` | Cards                        |
| `--border`   | `#E4E0D8` | Card borders, input borders  |

---

## ✏️ HOW TO CUSTOMIZE

### 1. Change Client Name & Info

In `index.html`, search for `Sara Malik` and replace with real name.
Update the tagline, about text, email, and social links.

### 2. Add Real Photo

Find this block in `index.html`:

```html
<div class="hero__img-placeholder">
  <span>Your Photo Here</span>
</div>
```

Replace with:

```html
<img
  src="images/profile.jpg"
  alt="[Client Name]"
  style="object-fit:cover; width:100%; height:100%; border-radius:20px;"
/>
```

### 3. Add Real Project Images

In `css/style.css`, find `.work__img--1` through `.work__img--4`
Replace the gradient with:

```css
.work__img--1 {
  background: url("../images/projects/project-1.jpg") center/cover;
}
```

### 4. Hook Up Contact Form (Free Options)

**Option A — Formspree (easiest):**

1. Go to formspree.io → create free account
2. Create a form → get your endpoint URL
3. In `js/main.js`, replace the setTimeout block with:

```js
const res = await fetch("https://formspree.io/f/YOUR_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, email, message }),
});
```

**Option B — EmailJS (no backend needed):**
Add EmailJS SDK and replace the setTimeout with emailjs.send()

### 5. Update Projects

Each `.work__card` in index.html has:

- `.work__cat` → Category label
- `h3` → Project title
- `p` → Short description
- `href="#"` → Replace with real link or project page

---

## 🚀 HOW TO GO LIVE (Free Hosting)

### Netlify (Recommended — drag & drop)

1. Go to netlify.com → Sign up free
2. Drag the `portfolio/` folder onto the dashboard
3. Done! You get a live URL in 30 seconds
4. Can connect custom domain later

### GitHub Pages

1. Push folder to GitHub repo
2. Settings → Pages → Deploy from main branch

---

## 📱 RESPONSIVE BREAKPOINTS

| Screen           | Behavior                       |
| ---------------- | ------------------------------ |
| Desktop (>860px) | Full layout, side-by-side hero |
| Tablet (≤860px)  | Stack hero, hamburger menu     |
| Mobile (≤600px)  | Single column, compact spacing |

---

## 🔧 SECTIONS CHECKLIST

- [x] Navbar (sticky, mobile hamburger)
- [x] Hero (photo + text + CTA buttons)
- [x] Marquee strip (animated services)
- [x] Work/Projects (4 cards with hover overlay)
- [x] Skills (4 cards + tools pills)
- [x] Contact Form (with success message)
- [x] Footer
- [x] Scroll reveal animations
- [x] Smooth scroll nav

---

_Built with plain HTML, CSS, JS — no frameworks needed._
