# Modpack Format

The Modrinth modpack format is a simple format that lets you store modpacks.

## Fields

### `formatVersion`
The version of the format, stored as a number. The current value at the time of writing is `1`.

### `game`
The game of the modpack, stored as a string. The current available types are: 'minecraft' 

---

### `versionId`
A unique identifier for this specific version of the modpack.

### `name`
Human-readable name of the modpack.

---

### `summary` (optional)
A short description of this modpack.

---

### `files`
The files array contains a list of files for the modpack that needs to be downloaded. Each item in this array contains the following:

#### `path`
The destination path of this file, relative to the Minecraft Instance directory. For example, `mods/MyMod.jar` resolves to `.minecraft/mods/MyMod.jar`.

#### `hashes`
The hashes of the file specified. Modrinth always provides the SHA1 hash of a file, however an upgrade to SHA256 is in the works. This will be formatted as such:
```json
"hashes": {
    "sha1": "cc297357ff0031f805a744ca3a1378a112c2ddf4",
}
```
#### `env` (optional)
For files that only exist on a specific environment, this field allows that to be specified. It's an object which contains a `client` and `server` value. This uses the Modrinth client/server type specifications. For example:
```json
"env": {
    "client": "required",
    "server": "unsupported",
}
```
In the above example, this is a client-only file. It cannot be installed server side.
Both side types can only be the following values: `required`, `optional`, `unsupported`

`server` refers to the *dedicated* server. Even though clients technically have a logical server, if something is marked server only, it should not be installed on the client.

#### `downloads`
An array containing URLs where this file may be downloaded.

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
    "minecraft": "1.16.4",
    "fabric-loader": "0.10.8"
}
```

---

## Storage
When stored on disk, the modpack MUST be in ZIP format, using the `.mrpack` extension. The main metadata of the modpack MUST be stored at `modrinth.index.json` in the root of the zip.

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
