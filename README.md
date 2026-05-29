# Luan Vo — Portfolio

Personal portfolio website built with ReactJS, Vite, and Tailwind CSS v4.

**Live:** [phanbaluanvo.github.io/portfolio-luanvo](https://phanbaluanvo.github.io/portfolio-luanvo) &nbsp;·&nbsp; **GitHub:** [phanbaluanvo/portfolio-luanvo](https://github.com/phanbaluanvo/portfolio-luanvo)

---

## Tech Stack

| | |
|---|---|
| **Framework** | React 19 + Vite 8 |
| **Styling** | Tailwind CSS v4 (Vite plugin, CSS-first config) |
| **Icons** | Font Awesome 6 |
| **Fonts** | Nunito, Audiowide (Google Fonts) |

## Features

- Typewriter effect cycling through roles
- Scroll-reveal animations via IntersectionObserver
- Animated hamburger menu for mobile
- Responsive layout across all screen sizes
- Sections: Hero · Stats · About · Experience · Education · Projects · Contact

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Project Structure

```
src/
├── assets/         # Images and static files
├── components/     # One folder per section (JSX only, no separate CSS)
├── hooks/          # useTypewriter, useScrollReveal
└── styles/
    └── base.css    # Tailwind directives + @theme config
```

## Contact

**Luan Vo** — [phanbaluanvo@gmail.com](mailto:phanbaluanvo@gmail.com) · [linkedin.com/in/phanbaluanvo](https://linkedin.com/in/phanbaluanvo)
