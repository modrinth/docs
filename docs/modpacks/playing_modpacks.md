# Playing Modpacks

A modpack is a list of mods bundled with additional files, such as configuration files. In general, it's a modded instance of a game ready to play.

:::info
**[The Modrinth App](https://modrinth.com/app)** is the official solution for playing Modrinth modpacks. You can install a Modrinth modpack using the app by clicking the "Browse" button on the left side of the launcher. Then, simply click "Install" on the modpacks you want to play.

![Modrinth App](../../static/img/tutorial/modrinthAppSearch.png)
:::

## How do I create a modpack?

Please see the guide for [creating modpacks](creating_modpacks.md).

## How do I play a modpack?

Currently, the easiest ways to play a Modrinth modpack are via [MultiMC](https://multimc.org), [Prism Launcher](https://prismlauncher.org), [ATLauncher](https://atlauncher.com), [BakaXL](https://www.bakaxl.com/), or [HMCL](https://hmcl.huangyuhui.net/).

To install a modpack on the server-side, try [mrpack-install](https://github.com/nothub/mrpack-install) or [the `itzg/minecraft-server` image](https://github.com/itzg/docker-minecraft-server) if using Docker.

### MultiMC and Prism Launcher

MultiMC and Prism are both launchers focused on efficiently managing multiple separate instances. The installation instructions for each are identical.

Modrinth packs can be installed using the "Add instance" button and clicking "Modrinth" on the left. It's as easy as selecting the one you want, and pressing "OK".

![MultiMC](../../static/img/tutorial/multimc.png)

If you want to insert a URL directly, you can do so by selecting "Import from zip" instead of "Modrinth".

### ATLauncher

ATLauncher is a launcher focused on easy integration of modpacks with various different platforms.

Modrinth packs can be installed using ATLauncher in as few as three clicks. Go to the "Packs" tab, select Modrinth on the left, and search for the pack you want. Then, play!

![ATLauncher search](../../static/img/tutorial/atlauncherSearch.png)

If you just want to insert an ID, slug, or URL directly, you can also do so using the "Add Manually" button by the top-right of the search

If you have a direct link to a Modrinth pack, you also have the option of importing it using the "Import" button in the "Instances" tab.

![ATLauncher import](../../static/img/tutorial/atlauncherImport.png)

### BakaXL (primarily for Chinese speakers)

BakaXL is a Windows-only launcher primarily targeting Chinese speakers.

#### Install through BakaPlaza

The easiest way to play modpacks using BakaXL is download it from BakaPlaza.

Click "BakaPlaza" in the Start Menu and search for the name of the modpack you want to install.

![BakaPlaza search](../../static/img/tutorial/BakaPlazaSearchModpacks.png)

Select the modpack you want and click the "Get" button, then choose a version to download.

![BakaPlaza modpack info](../../static/img/tutorial/BakaPlazaModpackInfo.png)

#### Install manually

This requires you to have a modpack file already downloaded.

Click the "Add a new Minecraft Core or Mod Pack" tile in the Start Menu, then click "Import Mod Pack".

![Add a new Minecraft Core or Mod Pack Tile](../../static/img/tutorial/BakaXLAddCoreTile.png)

Click "Continue" and drag the modpack file into BakaXL.

### HMCL

HMCL is a cross-platform Minecraft launcher.

#### Install through HMCL

Installing Modrinth Modpack using HMCL is very simple. Go to the "Download" tab, select the Modpack, set the download source to "Modrinth," and then search for the Modpack you want. You can install and play it directly.

![Hmcl search](../../static/img/tutorial/HmclSearch.png)

#### Install manually

This requires you to have a modpack file already downloaded.

Go to the "All Instances" tab, click the "Install a Modpack", Click on "Import from local file" and then select your Modpack file.

If you have the direct link to the Modrinth Modpack, you can also choose "Download from the Internet" to import the instance.

Alternatively, you can simply drag the Modpack file into the HMCL launcher interface.

![Hmcl Install a modpack](../../static/img/tutorial/HmclInstallAModpack.png)
