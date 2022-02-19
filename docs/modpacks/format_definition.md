# Modpack Format

The Modrinth modpack format is a simple format that lets you store modpacks.

## Fields

### `formatVersion`
The version of the format, stored as a number. The current value at the time of writing is `1`.

### `game`
The game of the modpack, stored as a string. The only available type is `minecraft`. 

---

### `versionId`
A unique identifier for this specific version of the modpack.

### `name`
Human-readable name of the modpack.

### `summary` (optional)
A short description of this modpack.

---

### `files`
The files array contains a list of files for the modpack that needs to be downloaded. Each item in this array contains the following:

#### `path`
The destination path of this file, relative to the Minecraft instance directory. For example, `mods/MyMod.jar` resolves to `.minecraft/mods/MyMod.jar`.

:::warning
If you implement an "import ZIP" feature or similar, make sure this field doesn't exit the Minecraft instance directory for security reasons. To do this, make sure it doesn't contain `..` or start with a drive name (i.e., `[A-Z]:/`, `[A-Z]:\`, and `/`).
:::

#### `hashes`
The hashes of the file specified. SHA1 is required, and other hashes are optional, but will usually be ignored. This is formatted as such:
```json
"hashes": {
    "sha1": "cc297357ff0031f805a744ca3a1378a112c2ddf4"
}
```
#### `env` (optional)
For files that only exist on a specific environment, this field allows that to be specified. It's an object which contains a `client` and `server` value. This uses the Modrinth client/server type specifications. For example:
```json
"env": {
    "client": "required",
    "server": "unsupported"
}
```
In the above example, this is a client-only file. It cannot be installed server side. Both side types can only be the following values: `required`, `optional`, `unsupported`.

:::tip
For optional mods, we recommend showing a dialog to the user that allows them to select which optional files they would like to install.
:::

`server` refers to the *dedicated* server. Even though clients technically have a logical server, if something is marked server only, it should not be installed on the client.

#### `downloads`
An array containing RFC 3986 compliant URIs where this file may be downloaded. URIs MUST NOT contain unencoded spaces or any other illegal characters according to RFC 3986. Only URIs from the following domains are allowed:
- `cdn.modrinth.com`
- `edge.forgecdn.net` (CurseForge)
- `github.com`
- `raw.githubusercontent.com`

---

### `dependencies`
This object contains a list of IDs and version numbers that launchers will use in order to know what to install.

Available dependency IDs are:
- `minecraft` - The Minecraft game
- `forge` - The Minecraft Forge mod loader
- `fabric-loader` - The Fabric loader

An example `dependencies` object:
```json
"dependencies": {
    "minecraft": "1.18.1",
    "fabric-loader": "0.13.1"
}
```

---

## Storage
When stored on disk, the modpack MUST be in ZIP format (MIME type `application/x-modrinth-modpack+zip`), using the `.mrpack` extension. The main metadata of the modpack MUST be stored at `modrinth.index.json` in the root of the zip.

### Overrides
The zip may also contain a directory named `overrides`. Files in this directory will be copied to the root of the Minecraft Instance directory upon installation by the launcher. For example:
```
my_modpack.mrpack/
    modrinth.index.json
    overrides/
        config/
            mymod.cfg
        options.txt
```
When installed, the contents of `overrides` will be copied to the Minecraft Instance directory and end up similar to this:
```
.minecraft/
    config/
        mymod.cfg
    options.txt
```

### Server Overrides
Along with the traditional overrides folder, Modrinth also has a server overrides folder to eliminate the need for server packs. 
Server overrides work in a layer based approach. This means server overrides folder (with the directory name `server-overrides`) will be applied after the `overrides` folder, overwriting its contents.

Here's an example:
```
my_modpack.mrpack/
    modrinth.index.json
    overrides/
        config/
            mymod.cfg
        options.txt
    server-overrides/
        config/
            mymod.cfg
            servermod.cfg
```
When installed, the contents of `overrides` will be copied to the Minecraft Instance directory. Then the contents of the `server-overrides` will be copied and end up similar to this:
```
.minecraft/
    config/
        mymod.cfg
        servermod.cfg
    options.txt
```
