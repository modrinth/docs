# Creating Modpacks

## What is a modpack?

A modpack is a list of mods bundled with additional files, such as configuration files. In general, it's a modded instance of a game ready to play, or with minor changes.

## What does the Modrinth format look like?

Modrinth uses its own storage layout for modpacks. This can be found on the [format definition](format.md) page.

## How do I create one?

Currently, the only way to create Modrinth modpacks are via [packwiz](https://github.com/packwiz/packwiz), a command line tool for managing modpacks. Specifically, this is done through the [`packwiz modrinth export`](https://packwiz.infra.link/reference/commands/packwiz_modrinth_export/) command. Using the [` packwiz curseforge import`](https://packwiz.infra.link/reference/commands/packwiz_curseforge_export/) command, CurseForge modpacks may be converted into Modrinth packs.