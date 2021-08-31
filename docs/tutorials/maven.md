---
title: Using Modrinth's Maven repository
---

# Using Modrinth's Maven repository

All projects uploaded to Modrinth are automatically placed on a Maven repository (henceforth "the Maven"). This can be used for a variation of reasons, in tandem with a JVM build automation tool such as [Gradle](https://gradle.org/). This tool will not be of any use to an everyday user, but can be very useful for mod or plugin developers.

Gradle is the most common build automation tool used for [Fabric](https://github.com/FabricMC/fabric-loom) and [Forge](https://github.com/MinecraftForge/ForgeGradle) mods, and thus, this guide will focus mostly on Gradle; however, this guide can be adapted to be used with Apache Maven (e.g. some Bukkit plugins) or any other build automation tool that supports Maven repositories.

## TL;DR

If you just want a quick rundown of how to add a dependency from the Maven, here's a `build.gradle` snippet:

```groovy
repositories {
    maven {
        name = "Modrinth"
        url = "https://api.modrinth.com/maven"
        content {
            includeGroup "maven.modrinth"
        }
    }
}

dependencies {
    modImplementation "maven.modrinth:sodium:mc1.17.1-0.3.2"
}
```

To learn what each part of this is and how to use it more extensively, read on!

## Adding the repository

The Maven is located at `https://api.modrinth.com/maven`. To add it to a development environment, it must be added to your `build.gradle(.kts)` in the `repositories` block. For example, this is how it might look with the standard Groovy DSL:

```groovy
repositories {
    // ...
    maven {
        url = "https://api.modrinth.com/maven"
    }
}
```

Optionally, you may also add a repository name by adding `name = "Modrinth"` before the `url`. This may help debug logs be easier to read.

Additionally, if you're using Gradle 5 or above, it is recommended that you add a `content includeGroup` field. The Maven group that Modrinth uses in the repository is unique (`maven.modrinth`) and won't be used anywhere else, so specifying that this group should only be resolved to our Maven will allow it to resolve artifacts faster.

All in all, here's what an optimal `repositories` block with the Modrinth Maven repository might look like:

```groovy
repositories {
    // ...
    maven {
        name = "Modrinth"
        url = "https://api.modrinth.com/maven"
        content {
            includeGroup "maven.modrinth"
        }
    }
}
```

## Resolving dependencies

Once added to the repositories block, resolving dependencies from the Maven is fairly simple. Syntactically, it is made up of three parts, just like every Maven artifact:

- **Maven group:** The Maven group for all artifacts on the Maven will always be `maven.modrinth`.
- **Archive name:** The archive name will be the slug/vanity URL or project ID of the project in question.
  - For example, for the mod Sodium, this can be either `sodium` or `AANobbMI`; either will work.
- **Version:** The version will be the version number specifically. This can be found on the version page itself, or it can be found in the `maven-metadata.xml` if you know how to navigate there.
  - For example, for the version of Sodium released on 2021-08-29, this is `mc1.17.1-0.3.2`. NOTE: the version ID will **not** work here, unlike with the archive name.

Once you put these together and separate them with colons, you will get something similar to `maven.modrinth:sodium:mc1.17.1-0.3.2`. This is the full classpath of the dependency. You can put this classpath into the `dependencies` block in your `build.gradle(.kts)`, prefaced with a scope.

## Dependency scope

In terms of what actions are available to you, this will depend upon which Gradle plugin you are using. With [Fabric Loom](https://github.com/FabricMC/fabric-loom), to add a mod to the development environment itself, you'll want to use `modImplementation`. If you want to simply have the classes available in your IDE, you can use `modApi`. If you want to jar-in-jar the other mod within your mod, use `include` (note: this should only be used for smaller libraries).

With [ForgeGradle](https://github.com/MinecraftForge/ForgeGradle), you can use the standard `implementation` and `api` to add it to a development environment and to load the classes, respectively. To have it decompiled by ForgeGradle, add the `fg.deobf` scope as well.

## End result

In the end, your `build.gradle(.kts)` file might look a little something like this:

```groovy
repositories {
    // Other Maven repositories can go above (or below) Modrinth's. We don't need priority :)
    // Do remember, though, this is the `repositories` block below where plugins are declared, not in `pluginManagement`!
    maven {
        name = "Modrinth"
        url = "https://api.modrinth.com/maven"
        content {
            includeGroup "maven.modrinth"
        }
    }
}

dependencies {
    // Adding a mod as an API to a Fabric development environment
    modApi "maven.modrinth:sodium:mc1.17.1-0.3.2"
    
    // Adding a mod to a Forge development environment and decompiling it using FG
    implementation fg.deobf("maven.modrinth:terra:forge-5.3.3-BETA+ec3b0e5d")
    
    // Adding a mod to a Fabric development environment and JiJing it within yours
    modImplementation include("maven.modrinth:trinkets:3.0.3")
}
```

That's it. Have fun!

## Appendix: uploading sources & Javadoc

As long as they are named with the correct suffixes when uploaded, sources and Javadoc (and similar other special jars) will also be detected and be downloadable by Gradle/IDEs. However, they **must not** be the primary file; for everything to work well (not just Maven-wise), the non-suffixed jar should be the primary file.

For example, if all of your mod jars start with `mymod-1.0.0+1.17`, if `mymod-1.0.0+1.17.jar` is the primary file, `mymod-1.0.0+1.17-sources.jar`, `mymod-1.0.0+1.17-javadoc.jar`, and other similar jars will be recognized and downloadable through the Maven.
