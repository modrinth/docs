# 格式

Modrinth 的文本字段，包括项目主体和版本变更日志，使用 [GitHub 风格的 Markdown](https://github.github.com/gfm)。

由于完整的 GFM 规范太大而难以阅读且 [GitHub 的格式化指南](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) 包含 GFM 中未包含的功能，此页面可作为可在 Modrinth 上使用的格式类型的快速参考。

:::info 重要

显示的功能可能无法反映 Modrinth 上使用的实际风格。

:::

## 基本格式

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

## 代码块

### 单行代码块

:::note Markdown

```markdown
`Code here`
```

`Code here`

:::

### 多行代码块

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

您可以在前三个反引号之后添加一种语言 (例如 `java`) 以将代码突出显示添加到代码块。

:::

## 引用块

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

## 标题

:::note Markdown

```
# H1 标题
## H2 标题
### H3 标题
#### H4 标题
##### H5 标题
###### H6 标题
```

# H1 标题  
## H2 标题  
### H3 标题  
#### H4 标题  
##### H5 标题  
###### H6 标题

:::

## 列表

### 无序列表

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

### 有序列表

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

## 表格

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

## 详细信息

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
