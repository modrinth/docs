# Creating Modpacks

## What is a modpack?

A modpack is a list of mods bundled with additional files, such as configuration files. In general, it's a modded instance of a game ready to play, or with minor changes.

## What does the Modrinth format look like?

Modrinth uses its own storage layout for modpacks. This can be found on the [format definition](format_definition.md) page.

## How do I create one?

You can either use [ATLauncher](https://atlauncher.com) or [packwiz](https://github.com/packwiz/packwiz) to create modpacks. The Modrinth format is unique for our purposes, so you cannot use the CurseForge format or another format to upload to Modrinth.

You can also convert a CurseForge modpack to the Modrinth format via packwiz. Specifically, the commands [`packwiz cf import`](https://packwiz.infra.link/reference/commands/packwiz_curseforge_import/) and [`packwiz mr export`](https://packwiz.infra.link/reference/commands/packwiz_modrinth_export/) will make a compliant file which can be uploaded to Modrinth.
