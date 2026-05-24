---
title: 'How to Create a New Post'
pubDate: 2026-05-24
description: 'A comprehensive guide on creating new blog posts, structuring frontmatter, and referencing folder-based relative images.'
author: 'Lion'
image:
    url: './pen.jpg'
    alt: 'How to Create a New Post'
tags: ["Astro", "Markdown", "Writing"]
---

This guide explains how to create new posts.

---

## Directory Structure

To keep your assets organized, it is recommended to create a dedicated directory for each post under the `src/content/posts/` folder.

For example:
```text
src/content/posts/
  └── my-awesome-post/
        ├── index.md         (Your markdown content)
        └── cover.jpg        (Local cover image)
```

---

## Setting up Markdown Frontmatter

Every markdown file needs frontmatter metadata at the top of the file enclosed in triple-dashed lines.

Here is an example:
```markdown
---
title: 'My First Blog Post'
pubDate: 2026-05-24
description: 'This is a short summary of my blog post.'
author: 'Lion'
image:
    url: './cover.jpg' # Reference local folder image
    alt: 'Post Cover Alt Text'
tags: ["Design", "Astro"]
---
```

Notice that the image url starts with `./`. This relative path points directly to `cover.jpg` inside the post directory.