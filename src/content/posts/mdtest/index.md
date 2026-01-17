---
title: 'Test Page'
pubDate: 2025-01-15
description: 'A comprehensive test page with all Markdown styles to verify theme rendering.'
author: 'Test Author'
image:
    url: 'https://picsum.photos/800/600'
    alt: 'Markdown test page'
category: "example"
tags: ["markdown", "test", "styling", "demo"]
---

# Heading Level 1 (H1)

This is a regular paragraph of text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Testing mixed content with 中文字符 for bilingual support.

## Heading Level 2 (H2)

### Heading Level 3 (H3)

#### Heading Level 4 (H4)

##### Heading Level 5 (H5)

###### Heading Level 6 (H6)

## Text Formatting

This is **bold text** and __bold text__ examples.

This is *italic text* and _italic text_ examples.

This is ***bold italic text*** example.

This is ~~strikethrough text~~ example.

This is `inline code` example.

## Lists

### Unordered Lists

- First item
- Second item
- Third item
  - Nested item 1
  - Nested item 2
    - Deep nested item
- Fourth item

* Using asterisks
* Another item

### Ordered Lists

1. First step
2. Second step
3. Third step
   1. Sub-step A
   2. Sub-step B
4. Fourth step

### Task Lists

- [x] Completed task
- [ ] Incomplete task
- [ ] Another incomplete task

## Links and Images

This is a [link text](https://astro.build) example.

This is a [link with title](https://astro.build "Astro Official Site") example.

This is a reference link [link text][reference-link] example.

[reference-link]: https://astro.build

![Alt text](https://docs.astro.build/assets/rose.webp "Image title")

## Blockquotes

> This is a blockquote.
> It can contain multiple lines of text.
>
> > This is a nested blockquote.
> > Supports multiple levels of nesting.

> **Tip**: Blockquotes can also contain other Markdown elements.
>
> - List item
> - Another item

## Code Blocks

### JavaScript

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
  return `Welcome to Astro!`;
}

greet('World');
```

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Test Page</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>
```

### CSS

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.button {
  background-color: #007bff;
  color: white;
  border-radius: 4px;
}
```

## Tables

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

### Aligned Tables

| Left Align | Center Align | Right Align |
|:-----------|:------------:|------------:|
| Left       | Center       | Right       |
| Text       | 文字         | Content     |

## Horizontal Rules

---

***

___

## Escape Characters

\*This is not italic\*

\[This is not a link\]

## HTML Tags

<div style="background-color: #f0f0f0; padding: 1rem; border-radius: 4px;">
  This is an HTML div element. Markdown also supports embedded HTML.
</div>

<details>
<summary>Click to expand</summary>

This is collapsible content that can contain any Markdown elements.

- List item
- Another item

</details>

## Footnotes

This is text with a footnote[^1].

This is another footnote[^note].

[^1]: This is the footnote content.
[^note]: This is a named footnote with content that supports multiple lines.
    Can include indented paragraphs.

## Definition Lists

Term 1
: Definition 1

Term 2
: Definition 2a
: Definition 2b

## Math Formulas (if supported)

Inline formula: $E = mc^2$

Block formula:

$$
\int_{a}^{b} f(x) dx = F(b) - F(a)
$$

## Emoji

😀 😍 🚀 🎉

### 中文段落測試

這是一個完整的中文段落，用於測試中文排版效果。包含**粗體**、*斜體*和`程式碼`等格式。
