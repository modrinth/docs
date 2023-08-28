import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Markdown Formatting

Modrinth's text fields, including project bodies and version changelogs, use [GitHub Flavored Markdown](https://github.github.com/gfm).

As the full GFM spec is too large to read comfortably and [GitHub's formatting guide](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) contains features not included in GFM, this page serves as a quick reference for what types of formatting can be used on Modrinth.

:::info Important
The displayed features may not reflect the actual style used on Modrinth.
:::

## Basic formatting

<Tabs>
<TabItem value="source" label="Source">

```markdown
**Bold**
*Italic*
***Bold and Italic***
~~Strikethrough~~
```

</TabItem>
<TabItem value="preview" label="Preview">

**Bold**  
*Italic*  
***Bold and Italic***  
~~Strikethrough~~

</TabItem>
</Tabs>

## Code blocks

<Tabs>
<TabItem value="source" label="Source">

````markdown
`single-line code block`

```
multi
line
code
block
```
````

</TabItem>
<TabItem value="preview" label="Preview">

`single-line code block`

```
multi
line
code
block
```

</TabItem>
</Tabs>

:::tip
You can add a language (e.g. `java`) after the first three backticks to add code highlighting to the code block.
:::

## Block quotes

<Tabs>
<TabItem value="source" label="Source">

```markdown
> Some Quote
> > Nested Quote
```

</TabItem>
<TabItem value="preview" label="Preview">

> Some Quote
> > Nested Quote

</TabItem>
</Tabs>

## Links

<Tabs>
<TabItem value="source" label="Source">

```markdown
https://modrinth.com
[Embedded link](https://modrinth.com)
[Embedded link with title](https://modrinth.com 'Title')
[Reusable link]

<!-- (end of document) -->
[Reusable link]: https://modrinth.com
```

</TabItem>
<TabItem value="preview" label="Preview">

https://modrinth.com  
[Embedded link](https://modrinth.com)  
[Embedded link with title](https://modrinth.com 'Title')  
[Reusable link]

[Reusable link]: https://modrinth.com

</TabItem>
</Tabs>

## Images

<Tabs>
<TabItem value="source" label="Source">

```markdown
![Alt text](https://cdn.modrinth.com/modrinth-new.png)
![Alt text](https://cdn.modrinth.com/landing-new/landing.webp 'Optional title')
<!-- Use the Gallery tab on your project for image hosting! -->
```

</TabItem>
<TabItem value="preview" label="Preview">

![Alt text](https://cdn.modrinth.com/modrinth-new.png)
![Alt text](https://cdn.modrinth.com/landing-new/landing.webp 'Optional title')

</TabItem>
</Tabs>

:::caution
[Alt text](https://accessibility.huit.harvard.edu/describe-content-images) is very important to use. Your project may be rejected if you don't add alt text! Refer to section 2.1 of [Modrinth's content rules](https://modrinth.com/legal/rules#general-expectations).
:::

## Headings

<Tabs>
<TabItem value="source" label="Source">

```markdown
# H1 Header
## H2 Header
### H3 Header
#### H4 Header
##### H5 Header
###### H6 Header
```

</TabItem>
<TabItem value="preview" label="Preview">
<strong>
<div style={{fontSize: 48}}>H1 Header</div>
<div style={{fontSize: 24}}>H2 Header</div>
<div style={{fontSize: 20}}>H3 Header</div>
<div style={{fontSize: 16}}>H4 Header</div>
<div style={{fontSize: 14}}>H5 Header</div>
<div style={{fontSize: 13.6}}>H6 Header</div>
</strong>
</TabItem>
</Tabs>

## Lists

### Unordered Lists

<Tabs>
<TabItem value="source" label="Source">

```markdown
- Entry 1
- Entry 2
    - Entry 2.1
    - Entry 2.2
- Entry 3
```

</TabItem>
<TabItem value="preview" label="Preview">

- Entry 1
- Entry 2
    - Entry 2.1
    - Entry 2.2
- Entry 3

</TabItem>
</Tabs>

### Ordered Lists

<Tabs>
<TabItem value="source" label="Source">

```markdown
1. Entry 1
2. Entry 2
    1. Entry 2.1
    2. Entry 2.2
3. Entry 3
```

</TabItem>
<TabItem value="preview" label="Preview">

1. Entry 1
2. Entry 2
    1. Entry 2.1
    2. Entry 2.2
3. Entry 3

</TabItem>
</Tabs>

## Tables

<Tabs>
<TabItem value="source" label="Source">

```markdown
| Title 1             | Title 2               | Title 3              |
|---------------------|:---------------------:|---------------------:|
| Cell 1:1            | Cell 1:2              | Cell 1:3             |
| Cell 2:1            | Cell 2:2              | Cell 2:3             |
| Cell 3:1            | Cell 3:2              | Cell 3:3             |
| Left-aligned column | Center-aligned column | Right-aligned column |
```

</TabItem>
<TabItem value="preview" label="Preview">

| Title 1             | Title 2               | Title 3              |
|---------------------|:---------------------:|---------------------:|
| Cell 1:1            | Cell 1:2              | Cell 1:3             |
| Cell 2:1            | Cell 2:2              | Cell 2:3             |
| Cell 3:1            | Cell 3:2              | Cell 3:3             |
| Left-aligned column | Center-aligned column | Right-aligned column |

</TabItem>
</Tabs>

:::note
Note the colons used in the second line of the table to change the column alignment.
:::

## Details (spoilers)

<Tabs>
<TabItem value="source" label="Source">

```html
<details>
<summary>Click me!</summary>

You clicked me!

</details>
```

</TabItem>
<TabItem value="preview" label="Preview">
<details>
<summary>Click me!</summary>
You clicked me!
</details>
</TabItem>
</Tabs>

:::caution
Markdown only works properly in details tags if there is at least one empty line between HTML and Markdown content.
:::

## Newlines

<Tabs>
<TabItem value="source" label="Source">

```markdown
This sentence will have an empty line

between its two segments.

---

This sentence will all
go on one line.

---

This sentence will be\
split into two lines

---

This sentence will also be  <!-- there are two spaces after this line -->
split into two lines
```

</TabItem>
<TabItem value="preview" label="Preview">

This sentence will have an empty line

between its two segments.

---

This sentence will all
go on one line.

---

<!-- This is not the same as above because Redocusaurus linebreaks are different
     from the linebreaks made by markdown-it, the MD plugin knossos uses -->
This sentence will be  
split into two lines

---

This sentence will also be  
split into two lines

</TabItem>
</Tabs>
