# 从 API v1 迁移至 API v2

这些要点涵盖了 v2 API 中的大部分更改，但请注意，在大多数上下文中包含 `mod` 的字段已转移到 `project`。 例如，在搜索路径中，字段 `mod_id` 被重命名为 `project_id`。

- 搜索路径已从 `/api/v1/mod` 迁移至 `/v2/search`
- 新的项目字段：`project_type` (可为 `mod` 或 `modpack`) 、`moderation_message` (包含 `message` 和 `body`) 、`gallery`
- 新的搜索方法: `project_type`
- 删除了字母排序 (由于 MeiliSearch 的限制，它不起作用) 
- 新的搜索字段: `project_type`, `gallery`
  - 这里的 gallery 字段是项目的一组图片链接
- “画廊” 是一个新的特性，允许用户将项目的展示图片上传到 CDN 并将其展示在项目页面上
- 内部更改：任何上传到 Modrinth 的项目文件现在会被验证来保证其是一个有效的 Minecraft 模组、整合包等。
  - 举个例子，一个不包含 mods.toml 文件的 Forge 1.17 模组是不被允许上传到 Modrinth 的
- 在创建项目时，项目可能不会上传可供审核的模组，但是它们可以保存为草稿
  - 同样，对于版本创建，在没有任何文件的情况下，可能无法上传版本
- 捐赠链接现在已启用
- 新的项目状态：`archived`。处于此状态的项目将不会显示在搜索结果中
- 标签 (比如 “类别”、“加载器”) 现在附加了图标 (SVGs) 和特定的项目类型
- 依赖项已被删除并替换为新系统
- 通知现在有一个 `type` 字段，例如 `project_update`

与此同时，项目子路径 (例如 `/v2/project/{id}/version`) 现在允许将 slug 用作 ID。 用户路由也是如此。

## Minotaur v1 to v2

Minotaur 2.x 对构建脚本的格式进行了一些破坏性变更。

首先，Minotaur 现在不再注册您自己的 `publishModrinth` 任务，而是自动创建一个 `modrinth` 任务。因此，您可以将 `task publishModrinth(type: TaskModrinthUpload) {` 行替换为 `modrinth {`。

要声明受支持的 Minecraft 版本和模组加载器，现在必须使用 `gameVersions` 和 `loaders` 参数。 这些参数的语法是不言自明的。

您现在必须使用 `versionType` 而不是使用 `releaseType`。 这实际上在 v1.2.0 中发生了变化，但是很少有构建脚本从 v1.1.0 开始。

依赖项已更改为特殊的 DSL。 在 `modrinth` 块中创建一个 `dependencies` 块，然后使用 `scope.type("project/version")` 。 例如，`required.project("fabric-api")` 添加了对 Fabric API 的必需项目依赖。

您现在可以在以前需要项目 ID 的任何地方使用 slug。
