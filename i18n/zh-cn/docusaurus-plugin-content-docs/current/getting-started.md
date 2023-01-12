# 入门

欢迎来到 Modrinth 开发者文档！

这篇教程将会解释 Modrinth API 的基础知识。

:::info
**正在寻找 API 路由列表？[跳转到 API 规范。](/api-spec)**
:::

## 设置工作环境

本文档不提供测试 API 的方法。为了方便测试，我们推荐安装以下工具：

- [cURL](https://curl.se/)，一个易于使用的命令行工具
- [ReqBIN](https://reqbin.com/)，一个在线 API 测试工具
- [Postman](https://www.postman.com/downloads/), 我们 API 的主要参考工具 (不开源) 
- [Insomnia](https://insomnia.rest/)，另一个参考工具 (开源) 
- 你的浏览器，如果你不需要发送请求头或请求体

当设置好工作环境以后，你可以通过向下面的地址发送一个 “GET” 请求来测试是否有效。

```json title="GET https://api.modrinth.com/"
{
  "about": "Welcome traveler!",
  "documentation": "https://docs.modrinth.com",
  "name": "modrinth-labrinth",
  "version": "2.4.4"
}
```

如果你得到了类似于上面的响应，那你现在可以正常使用 Modrinth API 了！如果你遇到了问题，只需要在 [我们的 Discord 服务器](https://discord.gg/EUHuJHt) 中的 `#modrinth-support` 频道反馈。我们会很乐意协助的！

## 发送第一个有用的请求

让我们从获取一个 Minecraft Mod 的更多信息开始，举个例子，[Gravestones](https://modrinth.com/mod/gravestones) 模组。

你可以通过发送以下请求来获取这个 Mod 的更多信息：

```json title="GET https://api.modrinth.com/v2/project/gravestones"
{
  "id": "ssUbhMkL",
  "slug": "gravestones",
  "project_type": "mod",
  "team": "ggl32fu7",
  "title": "Gravestones",
  "description": "A gravestones mod for fabric with tons of config options, an API, and more!",
  "body": "# Gravestones\nA highly configurable, easy to use, and elegant Gravestones mod for Fabric MC. It even has an easy to use API for developers!\n## Screenshots\n\n![Screenshot 1](https://i.imgur.com/mOFGTal.png \"Configuration\")",
  "published": "2020-10-21T22:19:51.707450Z",
  "updated": "2021-03-08T21:02:22.062991Z",
  "status": "approved",
  ...
}
```

让我们来探讨一下这个请求是什么样的，以及为什么要发送这个请求：

### 方法

就像你可能已经知道了的，HTTP 规范已经指定了执行操作的关键词，我们把它称作方法，它能够让 Modrinth API 知道你想要做什么。我们始终需要告诉 Modrinth API 要进行什么操作。在上面的例子中，我们使用了 `GET` 方法，从而告诉 API 我们想要从 Modrinth *获取*信息。相似的，如果你需要编辑一个请求中的内容，你应该使用 `PATCH` 方法。更多关于 API 规范的信息可以在 [这里](/api-spec) 找到。

### 基础路径

你将使用到的基础路径永远会是这个样子的：

```
https://api.modrinth.com/{version}/
```

关于可用的域名以及 API 版本等更多信息可以在 [这里](details/domains.md) 找到。

## 结构

Modrinth 使用 “project” 术语来指代搜索结果内的项目。目前，这些项目包含了 Mod 以及整合包。

这些项目各自需要至少拥有一个独立于元数据的、可下载的 “version” 即版本。它倾向于只提供一个文件，但也可以有多个文件。

用户和团队是携手并进的。每一个项目都有一个附加生成的 “团队”。一个团队中包含一个所有者和一些成员。用户可以加入任何团队，也可以参与任何项目的开发。在将来，一个团队将可以拥有多个项目，但此时，一个团队只能拥有一个项目。

无论是项目、团队，还是用户、版本，都会有一个独特的、长度为 8 位的 base58 ID。这些 ID 将会是你需要在请求的 URL 中查询的。

项目可以使用 *slug* 被搜索到，也可以通过使用 unique ID 被搜索到。Slugs 是能够由 Mod 作者修改的独特标识符。举个例子，上面的 Gravestones 模组拥有一个等效于 unique ID `ssUbhMkL` 的 slug `gravestones`。用户也可以使用用户名被查询到。

:::caution
虽然 unique ID 不会改变，但是 **slugs 与用户名可以在任何时间修改**！

如果你想长时间存储一个东西，推荐使用 unique ID。
:::

在上述的 Gravestones 例子中，如果我们想能够*始终*访问到 Gravestones 模组 (即使作者修改了 slug) ，我们可以将请求 URL 换成：`GET https://api.modrinth.com/v2/project/ssUbhMkL`，获取到的内容将会是相同的。
