# Modrinth Maven

All projects uploaded to Modrinth are automatically placed on a Maven repository. This can be used for a variation of reasons with a JVM build automation tool such as [Gradle]. This tool will not be of any use to an everyday user, but can be very useful for mod or plugin developers.

Gradle is the most common build automation tool used for [Fabric][Fabric Loom], [Forge][ForgeGradle], and [Quilt][Quilt Loom] mods, as such this guide will focus on Gradle. This guide can be adapted for use with Apache Maven (e.g. some Bukkit plugins) or any other build automation tool that supports Maven repositories.

:::caution
Whenever possible, you should elect to use the Maven repository provided by the developer, if they have one. Most library mods will have their own Maven, especially if they make use of [transitive dependencies](#appendix-transitive-dependencies) or submodules.

This Maven is meant mostly to help with mod compatibility efforts, but can be used for some smaller libraries.
:::

## TL;DR

If you just want a quick rundown of how to add a dependency from the Maven, here's a `build.gradle` snippet:

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

To learn what each part of this is and how to use it more extensively, read on!

## Adding the repository

### Conventional repository declaration

The Maven is located at `https://api.modrinth.com/maven`. To add it to a development environment, it must be added to your `build.gradle(.kts)` in the `repositories` block. For example, this is how it might look with the standard Groovy DSL and with the conventional [repository declaration]:

```groovy
repositories {
    // ...
    maven {
        url = "https://api.modrinth.com/maven"
    }
}
```

Optionally, you may also add a repository name by adding `name = "Modrinth"` before the `url`. This may help debug logs be easier to read.

### Advanced repository declaration (recommended)

Instead of the conventional repository declaration, it is recommended instead to make use of the relatively obscure Gradle feature that allows you to [declare content exclusively found in one repository]. The Maven group that Modrinth uses, `maven.modrinth`, won't be used anywhere else, so specifying that this group should only be resolved to our Maven will allow Gradle to resolve artifacts faster.

All in all, here's what an optimal `repositories` block with the Modrinth Maven repository might look like:

```groovy
// Note: this is NOT the `repositories` block in `pluginManagement`! This is its own block.
repositories {
    // Other repositories can go above or below Modrinth's. We don't need priority :)
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

## Resolving dependencies

Once added to the repositories block, resolving dependencies from the Maven is fairly simple. It is made up of three parts, just like every Maven artifact:

- **Maven group:** The Maven group for all artifacts on the Maven will always be `maven.modrinth`.
- [**Module:**][Module] The archive name will be the slug or project ID of the project in question.
  - For example, with [Sodium], you can use either `sodium` or `AANobbMI`.
- [**Module version:**][Module version] The version will be the version number or ID. This can be found on the version page itself.
  - For example, with [Sodium 0.4.4], you can use either `mc1.19.2-0.4.4` or `rAfhHfow`.
- **Classifier *(optional):*** Refer to [Appendix: using classifiers](#appendix-using-classifiers-sources-javadoc).

:::caution
Do not rely on version URLs to obtain the version you want. The version number in the URL for a version is not always the same as the actual version number. In case the two are different, use the version ID, or else you may get unexpected results.
:::

Once you put these together and separate them with colons, you will get something like `maven.modrinth:sodium:mc1.19.2-0.4.4`. These are the coordinates. You can put the coordinates into the `dependencies` block in your `build.gradle(.kts)`, prefaced with a configuration.

## Dependency configuration

The [configurations] available to you will depend upon which Gradle plugin you are using.

### Loom (Fabric, Quilt, Architectury)

With Loom, the available configurations will mostly be the same as those provided by the [Java][Java plugin] and [Java library][Java library plugin] plugins, just prefaced with `mod` so that it can be remapped. For example, `modImplementation` will be the most common, though you can also use `modApi`, `modCompileOnly`, `modRuntimeOnly`, `modLocalRuntime`, and so on.

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

Refer to [Fabric Loom's documentation][Fabric Loom] for more information. Note that Fabric's documentation is also mostly applicable to Quilt and Architectury Loom.

### ForgeGradle

With [ForgeGradle], you can use the standard configurations provided by the [Java][Java plugin] and [Java library][Java library plugin] plugins. You will also have to add the `fg.deobf` scope to have it remapped.

```groovy
dependencies {
    // Adding and remapping a mod at compile and runtime
    implementation fg.deobf("maven.modrinth:ferrite-core:5.0.1")
}
```

## Appendix: transitive dependencies

Modrinth's Maven does not have any [transitive dependencies]. This can sometimes cause compilation problems and will often cause the development environment to have runtime problems.

For example, newer versions of [Sodium] depend on a library called JOML, but Modrinth has no way of knowing this, and as such the Maven does not have this dependency. One way to get around this is to locate the buildscript and copy over the dependency; for example, Sodium's dependency on JOML can be found [here][Sodium JOML], and that line would also go in your buildscript.

## Appendix: using classifiers (sources, Javadoc)

Sources, Javadoc, and other special classifiers will also be downloadable via the Maven assuming they are uploaded with the correct suffixes. For everything to work, the non-suffixed jar should be the primary file.

For example, if `mymod-1.0.0+1.17.jar` is the primary file, a source file named `mymod-1.0.0+1.17-sources.jar` and a Javadoc file named `mymod-1.0.0+1.17-javadoc.jar` can be automatically downloaded by an IDE if present. If a project has other files with similar classifiers, such as what [lib39] has, you can add a fourth component to your dependency notation to get the individual file, such as `maven.modrinth:lib39:1.3.1:gesundheit`.

[Gradle]: https://gradle.org
[repository declaration]: https://docs.gradle.org/current/userguide/declaring_repositories.html#sec:declaring_custom_repository
[declare content exclusively found in one repository]: https://docs.gradle.org/current/userguide/declaring_repositories.html#declaring_content_exclusively_found_in_one_repository
[Module]: https://docs.gradle.org/current/userguide/dependency_management_terminology.html#sub:terminology_module
[Module version]: https://docs.gradle.org/current/userguide/dependency_management_terminology.html#sub:terminology_module_version
[configurations]: https://docs.gradle.org/current/userguide/declaring_dependencies.html#sec:what-are-dependency-configurations
[Java plugin]: https://docs.gradle.org/current/userguide/java_plugin.html#tab:configurations
[Java library plugin]: https://docs.gradle.org/current/userguide/java_library_plugin.html#sec:java_library_configurations_graph
[transitive dependencies]: https://docs.gradle.org/current/userguide/dependency_management_terminology.html#sub:terminology_transitive_dependency

[Fabric Loom]: https://fabricmc.net/wiki/documentation:fabric_loom
[ForgeGradle]: https://github.com/MinecraftForge/ForgeGradle
[Quilt Loom]: https://github.com/QuiltMC/quilt-loom

[Sodium]: https://modrinth.com/mod/sodium
[Sodium 0.4.4]: https://modrinth.com/mod/sodium/version/mc1.19.2-0.4.4
[Sodium JOML]: https://github.com/CaffeineMC/sodium-fabric/blob/73473e8bc0517df69caa2c457e74dd577d505f3d/build.gradle#L31
[lib39]: https://modrinth.com/mod/lib39/version/1.3.1
