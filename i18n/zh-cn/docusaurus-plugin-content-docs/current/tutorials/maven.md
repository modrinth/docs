# Modrinth Maven

上传到 Modrinth 的所有项目都会自动放置在 Maven 存储库中。 由于各种原因，这可以用于 JVM 构建自动化工具，例如 [Gradle]。 该工具对日常用户没有任何用处，但对 Mod 或插件开发人员非常有用。

Gradle 是用于 [Fabric][Fabric Loom]、[Forge][ForgeGradle] 和 [Quilt][Quilt Loom] 模组的最常见的构建自动化工具，因此本指南将重点介绍 Gradle。 本指南可以适用于 Apache Maven (例如一些 Bukkit 插件) 或任何其他支持 Maven 存储库的构建自动化工具。

:::caution
只要有可能，您应该选择使用开发人员提供的 Maven 存储库 (如果他们有的话) 。 大多数库 Mod 都有自己的 Maven，特别是如果它们使用[传递依赖](#附录-传递依赖)或子模块。

这个 Maven 主要用于帮助 Mod 兼容性工作，但也可用于一些较小的库。
:::

## 长话短说

如果你只是想快速了解如何从 Maven 添加依赖项，这里有一个 `build.gradle` 片段:

```groovy
repositories {
    exclusiveContent {
        forRepository {
            maven {
                name = "Modrinth"
                url = "https://api.modrinth.com/maven"
            }
        }
        filter {
            includeGroup "maven.modrinth"
        }
    }
}

dependencies {
    modImplementation "maven.modrinth:lithium:mc1.19.2-0.10.0"
}
```

要了解它的每个部分是什么以及如何更广泛地使用它，请继续阅读！

## 添加存储库

### 常规存储库声明

Maven 位于 `https://api.modrinth.com/maven` 。 要将其添加到开发环境中，必须将其添加到 `repositories` 块中的 `build.gradle(.kts)` 中。 例如，标准 Groovy DSL 和传统的 [存储库声明] 可能是这样的：

```groovy
repositories {
    // ...
    maven {
        url = "https://api.modrinth.com/maven"
    }
}
```

或者，您也可以通过在 `url` 之前添加 `name = "Modrinth"` 来添加存储库名称。 这可能有助于调试日志更易于阅读。

### 高级存储库声明 (推荐)

建议不要使用传统的存储库声明，而是使用相对晦涩的 Gradle 功能，该功能允许您 [声明仅在一个存储库中找到的内容]。 Modrinth 使用的 Maven 组，`maven.modrinth`，不会在其他任何地方使用，所以指定这个组应该只解析到我们的 Maven 将允许 Gradle 更快地解析工件。

总而言之，Modrinth Maven 存储库的最佳 `repositories` 块可能如下所示：

```groovy
repositories {
    // Other repositories can go above or below Modrinth's. We don't need priority :)
    // Note: this is NOT the `repositories` block in `pluginManagement`! This is its own block.
    exclusiveContent {
        forRepository {
            maven {
                name = "Modrinth"
                url = "https://api.modrinth.com/maven"
            }
        }
        filter {
            includeGroup "maven.modrinth"
        }
    }
}
```

## 解决依赖关系

一旦添加到存储库块，解决 Maven 的依赖关系就相当简单了。 它由三部分组成，就像每个 Maven 工件一样:

- **Maven group:** Maven 上所有工件的 Maven 组将始终为 `maven.modrinth`。
- [**Module:**][Module] 存档名称将是相关项目的 slug 或项目 ID。
  - 例如，对于 [Sodium]，您可以使用 `sodium` 或 `AANobbMI`。
- [**Module version:**][Module version] 版本将是版本号或 ID。 这可以在版本页面上找到。
  - 例如，对于 [Sodium 0.4.4]，您可以使用 `mc1.19.2-0.4.4` 或 `rAfhHfow`。
- **Classifier *(optional):*** 参考[附录: 使用分类器](#附录-使用分类器-源代码-Javadoc)。

:::caution
不要依赖版本 URL 来获取您想要的版本。 版本 URL 中的版本号并不总是与实际版本号相同。 如果两者不同，请使用版本 ID，否则您可能会得到意想不到的结果。
:::

将它们放在一起并用冒号分隔后，您将得到类似 `maven.modrinth:sodium:mc1.19.2-0.4.4` 的内容。 这些就是坐标。 您可以将坐标放入 `build.gradle(.kts)` 中的 `dependencies` 块中，并以配置作为开头。

## 依赖配置

您可用的 [配置] 取决于您使用的 Gradle 插件。

### Loom (Fabric, Quilt, Architectury)

使用 Loom，可用的配置将大部分与 [Java][Java 插件] 和 [Java 库][Java 库插件] 插件提供的配置相同，只是以 `mod` 开头，以便可以重新映射。 例如，`modImplementation` 将是最常见的，尽管您也可以使用 `modApi`、`modCompileOnly`、`modRuntimeOnly`、`modLocalRuntime` 等。

```groovy
dependencies {
    // Adding and remapping a mod only in local runtime
    modLocalRuntime "maven.modrinth:sodium:mc1.19.2-0.4.4"
}
```

To include smaller libraries into your jar so that users don't have to install them separately, use `include`. 

```groovy
dependencies {
    // Adding a mod to a Fabric development environment as an API and including it within yours
    modApi include("maven.modrinth:trinkets:3.4.0")
}
```

有关详细信息，请参阅 [Fabric Loom 的文档][Fabric Loom]。 请注意，Fabric 的文档也主要适用于 Quilt 和 Architectury Loom。

### ForgeGradle

通过[ForgeGradle]，您可以使用[Java][Java 插件]和[Java库][Java 库插件]插件提供的标准配置。 您还必须添加 `fg.deobf` 作用域才能重新映射。

```groovy
dependencies {
    // Adding and remapping a mod at compile and runtime
    implementation fg.deobf("maven.modrinth:ferrite-core:5.0.1")
}
```

## 附录: 传递依赖

Modrinth 的 Maven 没有任何[传递依赖]。 这有时会导致编译问题，并且通常会导致开发环境出现运行时问题。

例如，较新版本的 [Sodium] 依赖于一个名为 JOML 的库，但 Modrinth 无法知道这一点，因此 Maven 没有这种依赖性。 解决这个问题的一种方法是找到构建脚本并复制依赖项； 例如，可以在 [此处][Sodium JOML] 找到 Sodium 对 JOML 的依赖，并且该行也会出现在您的构建脚本中。

## 附录: 使用分类器 (源代码, Javadoc)

源代码、Javadoc 和其他特殊分类器也可以通过 Maven 下载，前提是它们使用正确的后缀上传。 为了一切正常，无后缀的 jar 应该是主文件。

For example, if `mymod-1.0.0+1.17.jar` is the primary file, a source file named `mymod-1.0.0+1.17-sources.jar` and a Javadoc file named `mymod-1.0.0+1.17-javadoc.jar` can be automatically downloaded by an IDE if present. If a project has other files with similar classifiers, such as what [lib39] has, you can add a fourth component to your dependency notation to get the individual file, such as `maven.modrinth:lib39:1.3.1:gesundheit`.

[Gradle]: https://gradle.org
[存储库声明]: https://docs.gradle.org/current/userguide/declaring_repositories.html#sec:declaring_custom_repository
[声明仅在一个存储库中找到的内容]: https://docs.gradle.org/current/userguide/declaring_repositories.html#declaring_content_exclusively_found_in_one_repository
[Module]: https://docs.gradle.org/current/userguide/dependency_management_terminology.html#sub:terminology_module
[Module version]: https://docs.gradle.org/current/userguide/dependency_management_terminology.html#sub:terminology_module_version
[配置]: https://docs.gradle.org/current/userguide/declaring_dependencies.html#sec:what-are-dependency-configurations
[Java 插件]: https://docs.gradle.org/current/userguide/java_plugin.html#tab:configurations
[Java 库插件]: https://docs.gradle.org/current/userguide/java_library_plugin.html#sec:java_library_configurations_graph
[传递依赖]: https://docs.gradle.org/current/userguide/dependency_management_terminology.html#sub:terminology_transitive_dependency

[Fabric Loom]: https://fabricmc.net/wiki/documentation:fabric_loom
[ForgeGradle]: https://github.com/MinecraftForge/ForgeGradle
[Quilt Loom]: https://github.com/QuiltMC/quilt-loom

[Sodium]: https://modrinth.com/mod/sodium
[Sodium 0.4.4]: https://modrinth.com/mod/sodium/version/mc1.19.2-0.4.4
[Sodium JOML]: https://github.com/CaffeineMC/sodium-fabric/blob/73473e8bc0517df69caa2c457e74dd577d505f3d/build.gradle#L31
[lib39]: https://modrinth.com/mod/lib39/version/1.3.1
