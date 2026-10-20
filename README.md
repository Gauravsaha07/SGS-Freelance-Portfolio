# Gaurav Saha — Freelance Full Stack Developer Portfolio

A personal freelance developer portfolio website built using **pure HTML5, CSS3, and modern vanilla JavaScript**.
- **Zero frameworks**
- **Zero external libraries**
- **Zero build steps or npm packages**
- **Works instantly by opening `index.html` in any web browser**

---

## 📁 Project Structure

```text
SGS-Freelance-Portfolio/
├── index.html          # Main HTML document with all sections & semantic structure
├── css/
│   └── style.css       # Clean, modular CSS with design tokens & responsive breakpoints
├── js/
│   └── script.js       # Vanilla JS for typewriter effect, scroll animations, mobile menu & form
├── assets/
│   └── images/         # Place your images here (kept empty by default)
└── README.md           # Documentation and customization guide
```

---

## 🚀 How to Run

1. Simply double-click `index.html` or right-click and select **Open with... (Chrome / Edge / Firefox / Safari)**.
2. Alternatively, serve it locally with any lightweight static server:
   - Python: `python -m http.server 3000`
   - VS Code: Right-click `index.html` -> **Open with Live Server**

---

## 🖼️ How to Add Images

All image slots are pre-configured to look elegant even before you add images. They use soft blue gradients and placeholder icons with zero broken image icons.

### 1. Profile Photo (Hero Section)
- Save your portrait photo as:
  `assets/images/profile.jpg` (or `.png`)
- In `index.html`, locate:
  ```html
  <img 
    src="" 
    alt="Gaurav Saha - Freelance Full Stack Developer" 
    class="profile-img fallback-image"
    id="heroProfileImg"
    loading="eager"
  >
  <!-- ADD IMAGE PATH HERE: assets/images/profile.jpg -->
  ```
- Change `src=""` to:
  ```html
  <img src="assets/images/profile.jpg" ...>
  ```

### 2. Project 1: Personalized Birthday Surprise Website
- Save your screenshot as:
  `assets/images/project1.jpg`
- In `index.html`, locate:
  ```html
  <img 
    src="" 
    alt="Personalized Birthday Surprise Website preview" 
    class="project-img fallback-image"
    loading="lazy"
  >
  <!-- ADD IMAGE PATH HERE: assets/images/project1.jpg -->
  ```
- Change `src=""` to:
  ```html
  <img src="assets/images/project1.jpg" ...>
  ```

### 3. Project 2: SGS AI Powered Interview Practice Platform
- Save your screenshot as:
  `assets/images/project2.jpg`
- In `index.html`, locate:
  ```html
  <img 
    src="" 
    alt="SGS AI Powered Interview Practice Platform preview" 
    class="project-img fallback-image"
    loading="lazy"
  >
  <!-- ADD IMAGE PATH HERE: assets/images/project2.jpg -->
  ```
- Change `src=""` to:
  ```html
  <img src="assets/images/project2.jpg" ...>
  ```

---

## 🔗 How to Update Links & Contact Information

Every editable link and placeholder in `index.html` has a clear comment:

1. **Email Address**:
   - In `index.html`, search for `gauravsaha362@gmail.com` and replace it with your email.
   - In `js/script.js` (line ~197), update `mailto:gauravsaha362@gmail.com`.
2. **Phone & WhatsApp**:
   - In `index.html`, search for `<!-- EDIT YOUR PHONE HERE -->` and update the number.
   - In `index.html` and `js/script.js` (line ~224), update `https://wa.me/919876543210` with your actual WhatsApp phone number including country code (e.g., `91` for India).
3. **Social Profiles**:
   - **GitHub**: Search `<!-- EDIT YOUR GITHUB HERE -->` (Default: `https://github.com/Gauravsaha07/`).
   - **LinkedIn**: Search `<!-- EDIT YOUR LINKEDIN HERE -->` (Default: `https://www.linkedin.com/in/gaurav-saha-2b805a36b/`).
   - **Instagram**: Search `<!-- EDIT YOUR INSTAGRAM HERE -->` (Default: `https://instagram.com/sgs_gaurav_builds_`).
4. **Project Links**:
   - **Project 1 Live Demo**: Search `<!-- ADD DEMO LINK HERE -->` and replace `href="#"` with your live deployment URL.
   - **Project 1 Source Code**: Search `<!-- ADD SOURCE CODE LINK HERE -->`.
   - **Project 2 Source Code**: Search `<!-- ADD SOURCE CODE LINK HERE -->`.
   - *Note: Project 2's Live Demo is already connected to `https://sgs-ai-interview-self.vercel.app/`.*

---

## ⌨️ How to Change Typewriter Lines

Open `js/script.js` and modify the `typewriterLines` array near line 16:

```javascript
const typewriterLines = [
  "Hi, I am Gaurav Saha",
  "💻 Freelance Full Stack Developer",
  "🤖 Building AI-Powered Websites",
  "⚡ Turning Ideas Into Digital Products",
  "📩 DM for Paid Projects & Collaborations"
];
```

You can add, edit, or remove any number of phrases.

---

## 🎨 How to Change Theme Colors

All design tokens are centralized as CSS custom variables at the top of `css/style.css`:

```css
:root {
  /* Core Palette */
  --color-bg: #F8FAFC;                 /* Base background */
  --color-card: #FFFFFF;               /* Card background */
  --color-card-border: #E2E8F0;        /* Card border */
  
  /* Primary Accent (Sky Blue) */
  --color-primary: #1E9BE0;            /* Main brand color */
  --color-primary-hover: #0EA5E9;      /* Hover state */
  --color-primary-dark: #0284C7;       /* Darker shade */
  --color-primary-soft: #E0F2FE;       /* Soft tint */

  /* Secondary Tones */
  --color-slate-blue: #7B8BA5;         /* Role & subtle badges */
  --color-text-main: #0F172A;          /* Headings */
  --color-text-body: #334155;          /* Body copy */
}
```

Simply update these hex values to instantly refresh the appearance of the entire site.

---

## ✨ Features Included

- **Editorial Typography**: Pairing *Playfair Display* for classic, luxurious headings, *Barlow Condensed* for crisp uppercase navigation and tags, and *Poppins* for legible body copy.
- **Hero Design**: Matches the reference screenshot with soft pale-blue background blobs, display serif typography, inline SVG square contact icons, dynamic typewriter effect, and circular profile frame.
- **Services Showcase**: 4 dedicated cards with custom inline SVG icons, including the signature *Personalized Surprise Websites 💖*.
- **Pitch Banner**: Highlighted pitch card with the exact client-pitch copy and a "Message Me" call to action.
- **Featured Works**: 2 large, premium alternating project cards with live links, tech chips, and dual action buttons.
- **Client-Side Contact Form**: Works with zero backend dependencies, offering 1-click dispatch via Email (`mailto:`) or WhatsApp.
- **IntersectionObserver Animations**: Smooth reveal-on-scroll animations and active navigation link tracking.
- **Accessibility & Performance**: Respects `prefers-reduced-motion`, includes semantic HTML5 tags, full keyboard focus states, and zero layout shift.
