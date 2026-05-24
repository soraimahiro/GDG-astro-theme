---
title: 'Setup Guide'
pubDate: 2026-05-24
description: 'Learn how to install, set up, and configure the Astro Lion theme on your local machine and deploy it to Netlify.'
author: 'Lion'
image:
    url: './setup.jpg'
    alt: 'Astro Lion Theme Setup Guide'
tags: ["Astro", "Setup"]
---

This article walks you through the step-by-step setup process.

---

## Local Installation

Before you begin, ensure you have Node.js (version 24 or later) and pnpm installed on your machine.

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/soraimahiro/Astro-Theme-Lion.git
   cd Astro-Theme-Lion
   ```

2. **Install Package Dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the Development Server:**
   ```bash
   pnpm dev
   ```
   Open your browser and navigate to `http://localhost:4321` to view your site in development mode.

4. **Build for Production:**
   To compile and optimize your project for production deployment:
   ```bash
   pnpm build
   ```

---

## Theme Configuration

You can customize the personal profile information and footer links by modifying the configuration file.

Open the configuration file `src/config.ts`:

- **Author Info (`authorConfig`):** Update your name, avatar path, bio description, and social media media links (e.g. GitHub, email) using Mingcute icon names.
- **Footer Links (`footerConfig`):** Edit your copyright name and configure customized link lists.

Modifying these configurations automatically updates the profile cards and footers across all pages.
