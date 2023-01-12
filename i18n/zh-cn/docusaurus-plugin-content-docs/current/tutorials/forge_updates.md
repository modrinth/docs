# Forge 更新

如果您是 Forge 模组开发人员，您的 Modrinth 模组会使用 [Forge 更新检查器](https://docs.minecraftforge.net/en/latest/misc/updatechecker/) 自动生成 `updates.json`。

唯一的设置是将 URL 插入 `mods.toml` 文件的 `[[mods]]` 部分，如下所示:

```toml
[[mods]]
# the other stuff here - ID, version, display name, etc. 
updateJSONURL = "https://api.modrinth.com/updates/{slug|ID}/forge_updates.json"
```

将 `{slug|id}` 替换为您的项目的 slug 或 ID。

Modrinth 会处理剩下的事情！ 当您更新模组时，Forge 会通知您的用户他们的模组文件已过期。

`recommended` 版本将仅显示没有 `alpha` 或 `beta` 版本类型的 Modrinth 版本，但 `latest` 将显示这些不稳定版本。

:::caution
确保您用于 Modrinth 版本的版本格式与您在 `mods.toml` 中使用的版本格式相同。 如果您在 Modrinth 版本中使用诸如 `1.2.3-forge` 或 `1.2.3+1.19` 之类的格式，但您的 `mods.toml` 只有 `1.2.3`，则更新检查器可能无法正常运行。
:::