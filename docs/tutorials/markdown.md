# Formatting

Modrinth's text fields, including project bodies and version changelogs, use [GitHub Flavored Markdown](https://github.github.com/gfm).

As the full GFM spec is too large to read comfortably and [GitHub's formatting guide](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) contains features not included in GFM, this page serves as a quick reference for what types of formatting can be used on Modrinth.

## Basic formatting

| Markdown                    | Result                |
| --------------------------- | --------------------- |
| \*\*Bold\*\*                | **Bold**              |
| \*Italic\*                  | *Italic*              |
| \*\*\*Bold and Italic\*\*\* | ***Bold and italic*** |
| \~\~Strikethrough\~\~       | ~~Strikethrough~~     |

## Code Blocks

### Single-line Code Block

| Markdown      | Result      |
| ------------- | ----------- |
| \`Code here\` | `Code here` |

### Multi-line Code Block

:::note Markdown

\`\`\`  
Code here  
\`\`\`

```
Code here
```

:::

:::tip

You can add a language (e.g. `java`) after the first three backticks to add code highlighting to the code block.

:::

## Block Quotes

:::note Markdown

\> Some Quote
\> \> Nested Quote

> Some Quote
> > Nested Quote

:::

## Links

| Markdown                                | Result                                |
| --------------------------------------- | ------------------------------------- |
| \[Embedded Link\](https://modrinth.com) | [Embedded Link](https://modrinth.com) |

## Headings

:::note Markdown

\# H1 Header  
\#\# H2 Header  
\#\#\# H3 Header  
\#\#\#\# H4 Header  
\#\#\#\#\# H5 Header  
\#\#\#\#\#\# H6 Header

# H1 Header
## H2 Header
### H3 Header
#### H4 Header
<!-- Workaround for Docosaurus Uppercasing H5 headers -->
<h5 style={{textTransform: "unset"}}>H5 Header</h5>

###### H6 Header

:::

## Lists

### Unordered Lists

:::note Markdown

\- Entry 1  
\- Entry 2  
\- Entry 3

- Entry 1
- Entry 2
- Entry 3

:::

:::tip

Add 4 spaces before a - to indend it by one level.

:::

### Ordered Lists

:::note Markdown

1\. Entry 1  
2\. Entry 2  
3\. Entry 3

1. Entry 1
2. Entry 2
3. Entry 3

:::

:::tip

Add 4 spaces before a number to indend it by one level.

:::

## Tables

:::note Markdown

```markdown
| Title 1  | Title 2  | Title 3  |
| -------- | -------- | -------- |
| Cell 1:1 | Cell 1:2 | Cell 1:3 |
| Cell 2:1 | Cell 2:2 | Cell 2:3 |
| Cell 3:1 | Cell 3:2 | Cell 3:3 |
```

| Title 1  | Title 2  | Title 3  |
| -------- | -------- | -------- |
| Cell 1:1 | Cell 1:2 | Cell 1:3 |
| Cell 2:1 | Cell 2:2 | Cell 2:3 |
| Cell 3:1 | Cell 3:2 | Cell 3:3 |

:::
