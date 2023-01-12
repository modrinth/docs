# 域名

Modrinth API 的基础路径格式如下：`https://{branch-}?api.modrinth.com/{version}/`，其中 `branch` 是你使用的 Modrinth 的分支，`version` 是你使用的 API 版本 (最新版本为 v2) 。你可以在 [这里](versioning.md) 了解 Modrinth API 的版本控制如何工作。

:::note
Version 1 的 API 是上述格式的例外，它的路径格式是：`https://api.modrinth.com/api/v1/`

Version 1 已经废弃，任何使用它的软件都应该迁移到 version 2。可以在 [此处](../migrations/v1-to-v2.md) 查看迁移方法。
:::

上述的分支也可以为 `staging` 或者什么都没有 (生产环境) 。如果你在使用生产服务器，API 路径应该如下：`https://api.modrinth.com/...`。它们使用两个不同的数据库，使用 `staging` 主要是为了在其发布到生产环境前测试 API。生产环境使用 [labrinth](https://github.com/modrinth/labrinth) 仓库的最新 tag 版本，而 `staging` 使用最新的提交。
