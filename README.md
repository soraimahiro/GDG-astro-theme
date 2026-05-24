# Astro Lion Theme

This theme is designed by GDGoC NTNU.

## Quick Start

This project requires Node.js (v24+) and the pnpm package manager.

Follow these steps to install and run this project locally:

1. Clone the Repository
```bash
git clone https://github.com/soraimahiro/Astro-Theme-Lion.git
cd Astro-Theme-Lion
```

2. Install Project Dependencies
Run the installation command in the project root:
```bash
pnpm install
```

3. Run the Development Server
```bash
pnpm dev
```
Open your browser and visit `http://localhost:4321` to preview the site.

4. Build for Production
To compile your project into static assets:
```bash
pnpm build
```
The optimized files will be outputted to the `dist/` directory.

---

## Configuration and Customization

### 1. Profile and Footer Configuration
Profile cards (on the homepage and post layouts) and the site footer are managed centrally.
Open and edit `src/config.ts`:

- **authorConfig:** Update your avatar path, name, bio, and social links (represented by Mingcute icon name strings, e.g., `mingcute:github-fill`).
- **footerConfig:** Configure your copyright name and link sections.

### 2. Creating New Posts
All posts are stored in `src/content/posts/`. It is recommended to organize posts into folders so you can reference local relative images.

Recommended folder layout:
```text
src/content/posts/
  └── my-new-post/
        ├── index.md         (Markdown content)
        └── cover.jpg        (Cover image)
```

In your markdown frontmatter, reference your local cover image using a relative path:
```markdown
---
title: "My New Post"
pubDate: 2026-05-24
description: "A tutorial on how to write markdown posts."
author: "Lion"
image:
  url: "./cover.jpg"
  alt: "Post Cover"
tags: ["Astro", "Tutorial"]
---
```
