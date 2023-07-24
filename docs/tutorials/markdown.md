# Formatting Reference

Modrinth's text fields, including project bodies and version changelogs, use [GitHub Flavored Markdown](https://github.github.com/gfm).

As the full GFM spec is too large to read comfortably and [GitHub's formatting guide](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) contains features not included in GFM, this page serves as a quick reference for what types of formatting can be used on Modrinth.

:::info Important

The displayed features may not reflect the actual style used on Modrinth.

:::

## Basic formatting

:::note Markdown

```markdown
**Bold**
*Italic*
***Bold and Italic***
~~Strikethrough~~
```

**Bold**  
*Italic*  
***Bold and Italic***  
~~Strikethrough~~

:::

## Code blocks

### Single-line code block

:::note Markdown

```markdown
`Code here`
```

`Code here`

:::

### Multi-line code block

:::note Markdown

````markdown
```
Code here
```
````

```
Code here
```

:::

:::tip

You can add a language (e.g. `java`) after the first three backticks to add code highlighting to the code block.

:::

## Block quotes

:::note Markdown

```markdown
> Some Quote
> > Nested Quote
```

> Some Quote  
> > Nested Quote

:::

## Links

:::note Markdown

```markdown
https://modrinth.com
[Embedded link](https://modrinth.com)
[Embedded link with title](https://modrinth.com 'Title')
```

https://modrinth.com  
[Embedded link](https://modrinth.com)  
[Embedded link with title](https://modrinth.com 'Title')

:::

## Headings

:::note Markdown

```
# H1 Header
## H2 Header
### H3 Header
#### H4 Header
##### H5 Header
###### H6 Header
```

# H1 Header  
## H2 Header  
### H3 Header  
#### H4 Header  
##### H5 Header  
###### H6 Header

:::

## Lists

### Unordered Lists

:::note Markdown

```markdown
- Entry 1
- Entry 2
    - Entry 2.1
    - Entry 2.2
- Entry 3
```

- Entry 1
- Entry 2
    - Entry 2.1
    - Entry 2.2
- Entry 3

:::

### Ordered Lists

:::note Markdown

```markdown
1. Entry 1
2. Entry 2
    1. Entry 2.1
    2. Entry 2.2
3. Entry 3
```

1. Entry 1
2. Entry 2
    1. Entry 2.1
    2. Entry 2.2
3. Entry 3

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

## Details

:::note Markdown

```markdown
<details>
<summary>Click me!</summary>

You clicked me!
</details>

```

<details>
<summary>Click me!</summary>

You clicked me!
</details>

:::
