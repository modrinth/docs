# 创建整合包

整合包是一系列与其他文件打包的模组，比如模组的配置文件。通常情况下，它是修改过的、做好充分准备的，或者拥有一些小更改的游戏实例。

## 如何游玩整合包？

请查看[游玩整合包](playing_modpacks.md)的教程。

## Modrinth 格式的整合包看起来像什么？

Modrinth 整合包使用其特有的存储布局。存储布局可以在[格式定义](format_definition.md)页面找到。Modrinth 格式对我们来说是独一无二的，所以你不能将 CurseForge 格式或其他格式的整合包上传到 Modrinth。

## 我要如何创建一个整合包？

你可以使用 [ATLauncher](https://atlauncher.com)，[packwiz](https://github.com/packwiz/packwiz)，或者 [Moddermore](https://moddermore.vercel.app) 来创建整合包。

### ATLauncher

ATLauncher 是一个专注于轻松集成不同平台整合包的启动器。

当你有了一个 Minecraft 实例，导出 Modrinth 格式整合包是非常简单的。你只需要选择实例，点击导出按钮，填写一些信息，然后点击导出。

![ATLauncher export](../../../../../static/img/tutorial/atlauncherExport.png)

:::caution
一定要确定你选择的导出格式是 Modrinth 格式！如果你不更改默认值 (CurseForge)，导出的整合包将无法上传到 Modrinth。
:::

:::tip
你也可以通过使用 ATLauncher 将 CurseForge 整合包转换为 Modrinth 整合包。如果你导入 CurseForge 整合包，然后将其导出为 Modrinth 格式，它将尽可能使用包中模组的 Modrinth 版本。

在以前，转换整合包格式的推荐方式是使用 packwiz，但是我们现在不建议在这个特定的用例中使用 packwiz。packwiz 不会尝试将 CurseForge 版本的模组转换为 Modrinth 版本，但 ATLauncher 会。
:::

### packwiz

packwiz 是一个命令行应用程序，允许以一种很简单的方式创建不同格式的整合包。packwiz 的 [快速上手](https://packwiz.infra.link/tutorials/creating/getting-started/) 教程在创建 packwiz 包时很有帮助。

当你拥有了一个有效的 packwiz 包后，你可以使用 [`packwiz mr export`] 命令来创建一个 Modrinth 整合包。

[`packwiz mr export`]: https://packwiz.infra.link/reference/commands/packwiz_modrinth_export/

### Moddermore

[Moddermore](https://moddermore.vercel.app) 是 Minecrafters 使用的一个用于分享模组列表的网站。

你可以在 [`Create` 页面](https://moddermore.vercel.app/new)创建一个新的实例，然后你会看到一系列关于如何创建列表的选项。

一旦你创建了列表，一个 `Modrinth pack` 按钮将会显示在页面上，你可以按下这个按钮来导出 Modrinth 格式整合包。

![Export from Moddermore](../../../../../static/img/tutorial/moddermore.png)
