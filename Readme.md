# 🐍 Udeh Chibuike Marvelous (Marveltech) — Portfolio

> Personal developer portfolio for **Udeh Chibuike Marvelous**, a Python & backend developer based in Nigeria.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-00ff87?style=for-the-badge&logo=googlechrome&logoColor=black)
![Built With](https://img.shields.io/badge/Built%20With-HTML%20%7C%20CSS%20%7C%20JS-00d4ff?style=for-the-badge)
![Theme](https://img.shields.io/badge/Theme-Dark%20%2F%20Light-ffb347?style=for-the-badge)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Sections](#sections)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [File Structure](#file-structure)
- [License](#license)

---

## Overview

A dark terminal-style personal portfolio website showcasing my skills, projects, and experience as a Python developer. Built entirely with **pure HTML, CSS, and vanilla JavaScript** — no frameworks, no dependencies, no build tools required.

The design draws inspiration from hacker/terminal aesthetics featuring scanline overlays, a glowing grid background, JetBrains Mono typography, and a live Python REPL widget in the hero section.

---

## Features

- **Dark / Light theme toggle** — smooth 0.45s fade transition between themes, preference saved to `localStorage`
- **Custom animated cursor** — glowing dot with a lagging ring tracker
- **Typing animation** — cycles through developer roles in the hero section
- **Scroll reveal animations** — sections fade up as they enter the viewport via `IntersectionObserver`
- **Terminal hero widget** — simulated Python REPL displaying developer info
- **Fully responsive** — adapts cleanly to mobile, tablet, and desktop
- **Scanline + grid overlay** — authentic terminal aesthetic
- **Zero dependencies** — single `.html` file, works offline

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Name, animated subtitle, bio, CTA buttons, and Python terminal widget |
| **Skills** | 6 cards covering Python, Backend/APIs, Databases, Web Dev, DevOps, and Automation |
| **Projects** | 6 project cards with tags, descriptions, and links |
| **About** | Bio text, stats grid, and a syntax-highlighted Python class |
| **Contact** | Email link + GitHub, LinkedIn, Twitter buttons |

---

## Tech Stack

**Languages**
- HTML5
- CSS3 (custom properties, grid, flexbox, animations)
- Vanilla JavaScript (ES6+)

**Fonts**
- [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) — monospace body font
- [Syne](https://fonts.google.com/specimen/Syne) — display headings

**APIs / Browser Features**
- `IntersectionObserver` — scroll reveal
- `localStorage` — theme persistence
- `requestAnimationFrame` — smooth cursor animation

---

## Getting Started

No installation or build step required. Just open the file:

```bash
# Clone or download the repo
git clone https://github.com/marveltech/portfolio.git

# Open directly in your browser
open portfolio.html
```

Or simply double-click `portfolio.html` in your file explorer.

---

## Customization

All personal details are in the HTML file. Search and replace the following:

| Placeholder | What to update |
|---|---|
| `marvelous@example.com` | Your real email address |
| `href="#"` on GitHub link | Your GitHub profile URL |
| `href="#"` on LinkedIn link | Your LinkedIn profile URL |
| `href="#"` on Twitter link | Your Twitter/X profile URL |
| Project card `href="#"` links | Live demo and GitHub repo URLs |
| Hero bio paragraph | Your personal description |
| Stats numbers | Update to reflect your real numbers |

### Changing theme colors

Dark mode colors live in `:root` inside the `<style>` tag:

```css
:root {
  --bg: #0a0c0f;        /* page background */
  --green: #00ff87;     /* accent color */
  --cyan: #00d4ff;      /* secondary accent */
  --amber: #ffb347;     /* tertiary accent */
}
```

Light mode colors live in `html.light { ... }` right below.

---

## File Structure

```
portfolio/
└── portfolio.html     # Everything — HTML, CSS, and JS in one file
└── README.md          # This file
```

The entire portfolio is a **single self-contained HTML file**. No external CSS files, no JavaScript modules, no package.json.

---

## License

MIT License — free to use, modify, and distribute.

---

<div align="center">

Built with 🐍 Python mindset & pure HTML by **Udeh Chibuike Marvelous (Marveltech)**

</div>
