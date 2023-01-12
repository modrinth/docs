# 版本控制

Modrinth 为 API 遵循简单的版本控制模式。如果 API 发生了破坏性变更，而且 API 版本已经更新，那么迁移步骤将会在[迁移页面](../migrations/information.md)显示。

当一个 API 不再是最新版本，它将会被考虑立即废弃。Modrinth 不会为旧版本 API 提供任何形式的支持。旧版本 API 会被保留一段时间，但这个时间不是一定的。

:::warning
Modrinth 可能在任何时候移除任何旧版 API。请不要请求任何有关旧版本 API 的支持！
:::

旧的 API 路由可能会以 Modrinth 认为合适的方式进行更改。 例如，可以将名为 "_comment" 的字段添加到每个 JSON 请求中，告诉开发人员更新他们的应用程序。 另一个例子可能是定期提供 "410 GONE" 错误或 "404 NOT FOUND" 错误的路由。 在任何情况下，您[必须 (但我们知道您不会)](https://datatracker.ietf.org/doc/html/rfc6919#section-1) 处理这些错误并更新您的应用程序。

Modrinth 必须为了依赖它的应用保持稳定运行，但是维护旧版 API 将会花费大量金钱，还很难维护。保留旧版本 API 也是开发新特性和更改的一道屏障。因此，为了保证创新与稳定的平衡，我们使用这种方法对待旧版 API。