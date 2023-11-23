---
sidebar_position: 0
---

# What is Modrinth?

**Modrinth** is a platform intended to make the world of [video game modding](https://en.wikipedia.org/wiki/Video_game_modding) better for everyone. Whether you're a player, an author, a developer, or some combination of those, Modrinth intends to be the place for all of your video game modding needs.

Modrinth mainly accomplishes this by providing a place to host user-created projects. Projects are a set of modifications to a game meant to accomplish some purpose. Every project contains **versions**, releases of a project containing at least one file to be downloaded by users.

:::info
Currently, Modrinth is focused exclusively on content for Minecraft: Java Edition—specifically, mods, plugins, data packs, shaders, resource packs, and modpacks, all of which are different **project types**. However, in the future, it is intended for Modrinth to host other types of modded content for other games.
:::

When someone talks about "Modrinth", they could be referring to several components of what make up the platform. There are three main components to think of when considering Modrinth as a whole:
* [**Modrinth.com**](https://modrinth.com) (also called "knossos" or "the frontend") is an easy-to-use web interface for browsing, uploading, and sharing Modrinth content.
* [The **Modrinth App**](https://modrinth.app) (also called "theseus" or "the launcher") is a desktop interface for browsing, installing, and playing Modrinth content, currently in public beta for Windows, macOS, and Linux.
* [The **Modrinth API**](./api/index.md) (also called "labrinth" or "the backend") is a developer interface ([REST API](https://www.ibm.com/topics/rest-apis)) to use and interact with Modrinth's database.

The Modrinth API is the foundation for everything Modrinth. It is used by the frontend, the launcher, and by any developer who wants to interface with Modrinth. The API is exemplary of our **open source** design, one of our founding principles, where we are focused on being open and transparent whenever possible. The main way this manifests itself is by making all of our code publicly available for anyone to use, audit, and contribute to, primarily under the [GNU Affero General Public License, version 3](https://opensource.org/license/agpl-v3/) (though some parts are under other licenses).