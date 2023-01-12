# 整合包格式

Modrinth 整合包格式是一个简单的格式，允许你存储整合包。

## 字段

### `formatVersion`
格式版本，以数字存储。目前的值为 `1`。

### `game`
整合包中的游戏，作为字符串存储。唯一可用的类型是 `minecraft`。 

---

### `versionId`
整合包特定版本的唯一标识符。

### `name`
整合包的人类可读名称。

### `summary` (可选)
关于整合包的简短介绍。

---

### `files`
files 字段包含了所有整合包需要下载的文件。该字段下的所有项目都包含如下内容：

#### `path`
该文件的路径，相对于 Minecraft 实例目录。举个例子，`mods/MyMod.jar` 会被解析成 `.minecraft/mods/MyMod.jar`。

:::warning
如果你实现了一个 “导入 ZIP” 功能或者相似的内容，出于安全原因，确保该字段不离开 Minecraft 实例目录。要解决这个问题，确保它不包含 `..` 或者以盘符开头 (比如 `[A-Z]:/`，`[A-Z]:\`，和 `/`)。
:::

#### `hashes`
指定文件的哈希值。这必须包含 SHA1 哈希和 SHA512 哈希。其他哈希值是可选的，但通常会被忽略。它的格式如下：
```json
"hashes": {
    "sha1": "cc297357ff0031f805a744ca3a1378a112c2ddf4",
    "sha512": "d0760a2df6f123fb3546080a85f3a44608e1f8ad9f9f7c57b5380cf72235ad380a5bbd494263639032d63bb0f0c9e0847a62426a6028a73a4b4c8e7734b4e8f5"
}
```
#### `env` (可选)
对于只存在于特定环境中的文件，此字段允许指定。它是一个包含 `client` 和 `server` 值的对象。这使用了 Modrinth 客户端 / 服务端类型规范。例如：
```json
"env": {
    "client": "required",
    "server": "unsupported"
}
```
在上面的例子中，这是一个客户端文件。不能安装在服务器端。两侧类型只能为以下值：`required`，`optional`，`unsupported`。

:::tip
对于可选的模组，我们建议向用户显示一个对话框，允许他们选择他们想要安装的可选文件。
:::

`server` 指的是*专用*的服务器。即使客户端技术上有一个逻辑服务器，如果某些东西被标记为仅服务器，则它不应该安装在客户端上。

#### `downloads`
包含可以下载此文件的 HTTPS url 的数组。根据 RFC 3986, URI 不能包含未编码的空格或任何其他非法字符。

当文件被上传到 Modrinth 时，它会被验证，以便于只允许以下域名的 URI。
- `cdn.modrinth.com`
- `github.com`
- `raw.githubusercontent.com`
- `gitlab.com`

实现该规范的其他平台**应该**有一组已定义的白名单域。

:::note
HTTP 3xx 重定向必须遵循一个合理的重定向数量 (我们建议至少三个)。
:::

#### `fileSize`
包含文件大小 (以字节为单位) 的整数。这主要是作为一个工具提供给启动器，以允许使用进度条。

---

### `dependencies`
该字段包含启动器将使用的 ID 和版本号列表，以便知道要安装什么。

可用的依赖 ID 如下所示：
- `minecraft` - Minecraft 游戏
- `forge` - Forge 加载器
- `fabric-loader` - Fabric 加载器
- `quilt-loader` - Quilt 加载器

一个 `dependencies` 的例子：
```json
"dependencies": {
    "minecraft": "1.18.2",
    "forge": "40.1.0"
}
```

---

## 存储
当整合包存储在磁盘上时，必须是 ZIP 格式 (MIME type `application/x-modrinth-modpack+zip`)，使用 `.mrpack` 扩展名。整合包的主要元数据必须以 UTF-8 编码存储在整合包根目录下的 `modrinth.index.json` 文件中。

### 覆盖
zip 文件还可以包含一个名为 `overrides` 的目录。这个目录中的文件将在启动器安装整合包时被复制到 Minecraft 实例目录的根目录。例如：
```
my_modpack.mrpack/
    modrinth.index.json
    overrides/
        config/
            mymod.cfg
        options.txt
```
安装时， `overrides` 目录中的内容将被复制到 Minecraft 实例目录中，结果如下所示：
```
.minecraft/
    config/
        mymod.cfg
    options.txt
```

### 服务器覆盖
除了传统的覆盖文件夹，Modrinth 还有一个服务器覆盖文件夹，以消除对服务器包的需求。
服务器覆盖以基于层的方式工作。这意味着服务器覆盖文件夹 (目录名为 `server-overrides`) 将应用于 `overrides` 文件夹之后并覆盖其内容。

这是一个示例：
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
当安装时，`overrides` 文件夹的内容将被复制到 Minecraft 实例目录。然后 `server-overrides` 的内容将被复制，并最终类似于这样:
```
.minecraft/
    config/
        mymod.cfg
        servermod.cfg
    options.txt
```

### 客户端覆盖
Modrinth 还有一个客户端覆盖文件夹！文件夹的名称为 `client-overrides`。它在功能上等同于服务器覆盖文件夹（除了只应用于客户端），并且与基于层的方法工作相同。

服务器和客户端覆盖文件夹都是可选的。
