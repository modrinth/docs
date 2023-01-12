# API: 搜索

搜索项目是 Modrinth API 中一个常用的 API，但是它可能很难理解，但当您读完了这篇教程后, 您应该会对如何使用该 API 搜索项目有一个较深的理解！

## API 链接

当您准备使用搜索 API 时，您应当访问 (或请求) 此链接: [`{API_BASE}`](../details/domains.md)`/search`

## 使用例 1: 寻找一个 Fabric Mod

在这个例子中，我们将会寻找一个 1.16.5 的墓碑 (gravestones) Fabric Mod

### 查询
查询参数: `query`

`query` 应当被替换为一段您想查询的字符串，在这个例子中，`query` 可能是 `墓碑`，您可以在[这里](https://api.modrinth.com/v2/search?query=grave)看到 API 返回结果

*PS: 在英文，墓碑 "gravestones" 是一个复合单词，而在原文中，该复合单词被拆为了 "grave" + "stones"，这明显不符合中文常规思路，因此上文中是完整的 "墓碑" 这个词*

### 排序
查询参数: `index`

参数 `index` 会改变 API 返回结果的排序方式，Modrinth 支持以下几种排序方式:
- `relevance` => 此排序是在我们的 Mod 列表中与您提供的 `query` 参数匹配度最高的 (至少是在基于我们的查询)
- `downloads` => 此排序是将所有匹配的 Mod 按照下载量排序
- `follows` => 与 `downloads` 相同的原理，但按此 Mod 的关注者数量排序。
- `newest` => 按创建的最新模组排序。 这是基于最初创建 Mod 的时间。
- `updated` => 按更新的最新模组排序。 这是基于 Mod 的最新更新 (创建新版本) 的时间。

### 限制结果数量
查询参数: `limit`

将在响应中返回的最大结果数。 最大限制为 100。

### 处理分页
查询参数: `offset`

偏移字段允许从结果中跳过项目。 当与 limit 参数结合使用时，offset 字段可用于创建强大的分页。

### Facets
Facet 是理解如何过滤结果的基本概念。

#### Facet 类型
一个 facet 可以有多种类型:
- `categories` => 要从中过滤结果的加载程序或类别
- `versions` => 过滤结果的 Minecraft 版本
- `license` => 要从中过滤结果的许可证 ID
- `project_type` => 要从中过滤结果的项目类型

现在您已经有了所有 Facet 类型，要获得表示类型和内容的字符串，必须使用以下格式:
```
{type}:{value}
```
其中 type 是上面定义的 facet 类型之一。

#### 运算符

在搜索中，主要的运算符是 `AND` 和 `OR` 。 其他的暂不支持。

所有方面搜索都必须包含在 JavaScript 数组中。

##### OR
单个数组中的所有元素**在第一个**之后被视为在单个 OR 块中。
例如，搜索 `[["versions:1.16.5", "versions:1.17.1"]]` 会被转换为 `支持 1.16.5 或 1.17.1 的项目`

##### AND
顶级数组中的所有数组都被视为单个 AND 块。
例如，搜索 `[["versions:1.16.5"], ["project_type:modpack"]]` 将被转换为 `支持 1.16.5 并且是整合包的项目`


如果您想了解有关方面的更多信息，可以在 [此处](https://docs.meilisearch.com/reference/features/faceted_search.html#using-facets) 获取有关它们的文档

#### 查询示例
如果您对如何使用 facets 感到困惑，这里有一个查询示例:

https://api.modrinth.com/v2/search?limit=20&index=relevance&facets=[["categories:adventure"],["categories:fabric"],["versions:1.17.1"]]

此请求搜索最多 20 个按相关性排序的项目，这些项目属于 `adventure` 和 `fabric` 类别，并且支持 1.17.1。

### 过滤器
过滤器是 facets 过滤结果的另一种方式。 过滤器比 facets 慢。

可以在[此处](https://docs.meilisearch.com/reference/features/filtering_and_faceted_search.html#using-filters)找到过滤器的语法。
