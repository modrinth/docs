# 为 Modrinth 做贡献

Modrinth的绝大部分，包括从我们的 [API / 后端](https://github.com/modrinth/labrinth)和[前端](https://github.com/modrinth/knossos)到 [Minotaur 插件](https://github.com/modrinth/minotaur)和[分析服务](https://github.com/modrinth/ariadne)的一切，都是在我们的 [GitHub](https://github.com/modrinth) 上以免费和开源许可发布的。因此，我们喜欢社区成员的贡献!但是，在继续这样做之前，在整个过程中有一些事情需要记住，以及一些特定于某些内容的细节。

## 要记住的事情

### 在 Discord 上咨询人们

在提出拉取请求之前，有很多原因需要在我们的 [Discord](https://discord.gg/EUHuJHt) 上咨询人们。 例如，如果您不确定某事是否是个好主意，如果您不确定如何实施某事，或者如果您无法使某件事发挥作用，这些都是在 `#development` 论坛频道创建帖子的好机会 。

如果您打算开发新功能、进行重大代码库更改或进行 UI/设计更改，请先打开讨论帖子以确保您的工作得到最佳利用。

### 不要气馁

有时，出于各种原因，拉取请求可能会被拒绝或未合并。 不要往心里去，也不要气馁！ 有时只是贡献不适合，或者它可能只是在其他事情的混乱中丢失了。 请记住，Modrinth 核心团队通常很忙，无论是在特定项目/任务上还是在外部因素 (例如线下职责) 上。 这一切都归结为同一件事：不要气馁！

### 代码不是贡献的唯一方式

你不需要知道如何编程来为 Modrinth 做贡献。 保证质量、支持社区、提出功能创意以及确保您的声音在公共决策中被听到，这些都是为 Modrinth 做出贡献的好方法。 如果您发现错误，请在适当的问题跟踪器上报告它们是您的责任； 但是，请记住，必须根据我们的[安全政策](https://modrinth.com/legal/security)报告潜在的安全漏洞和漏洞利用。

Modrinth 目前不接受金钱捐赠。

## 项目具体细节

如果您想为特定项目贡献代码，请从这里开始。Modrinth 的大部分项目是用 [Rust 语言](https://www.rust-lang.org)编写的，但有些东西是用其他语言 / 框架编写的，例如 [Nuxt.js](https://nuxtjs.org) 或 Java。

### labrinth (后端与 API)

[labrinth](https://github.com/modrinth/labrinth) 是基于 Rust 的后端，在 [Actix](https://actix.rs) 框架的帮助下为 Modrinth 的 API 提供服务。 要开始使用 labrinth 实例，请安装 docker、docker-compose 和 cargo。 初始启动可以简单地使用命令 `docker-compose up` 完成。 这将在端口 5432 上部署一个 PostgreSQL 数据库，在端口 7700 上部署一个 MeiliSearch 实例。

现在，您必须安装 sqlx CLI，这可以通过 cargo 来完成:

```bash
cargo install --git https://github.com/launchbadge/sqlx sqlx-cli --no-default-features --features postgres,rustls
```

从那里，您可以创建数据库并使用一个简单的命令执行所有数据库迁移:

```bash
sqlx database setup
```

大多数配置是在运行时使用 [dotenvy](https://crates.io/crates/dotenvy) 和 `.env` 文件完成的。 每个变量及其作用都可以在下面的下拉列表中找到。 此外，还有三个命令行选项可用于向 MeiliSearch 指定您要执行的操作。

<details><summary>.env 变量和命令行选项</summary>

#### 基本配置

`DEBUG`: 是否应启用调试工具
`RUST_LOG`: 指定要记录的信息，来自 rust 的 [`env-logger`](https://github.com/env-logger-rs/env_logger)； 一个合理的默认值是 `info,sqlx::query=warn`
`SITE_URL`: 用于 CORS 的主要 URL  
`CDN_URL`: 上传到 CDN 的文件的可公开访问的基本 URL
`MODERATION_DISCORD_WEBHOOK`: Discord webhook 的 URL，待批准的项目将发送到该 URL
`CLOUDFLARE_INTEGRATION`: labrinth 是否应该与 Cloudflare 的垃圾邮件防护集成
`DATABASE_URL`: PostgreSQL 数据库的 URL
`DATABASE_MIN_CONNECTIONS`: 数据库同时允许的最小并发连接数
`DATABASE_MAX_CONNECTIONS`: 数据库同时允许的最大并发连接数
`MEILISEARCH_ADDR`: 用于搜索的 MeiliSearch 实例的 URL
`MEILISEARCH_KEY`: MeiliSearch 给出的名称
`BIND_ADDR`: 服务器的绑定地址。 同时支持 IPv4 和 IPv6 
`MOCK_FILE_PATH`: 用于存储上传文件的路径； 这没有默认值，如果未指定将引起报错

#### CDN options

`STORAGE_BACKEND`: 控制使用什么存储后端。 这可以是 `local`、`backblaze` 或 `s3`，但默认为 `local`

Backblaze 和 S3 配置选项在名称上是不言自明的，所以这里只是它们的名称:  
`BACKBLAZE_KEY_ID`, `BACKBLAZE_KEY`, `BACKBLAZE_BUCKET_ID`  
`S3_ACCESS_TOKEN`, `S3_SECRET`, `S3_URL`, `S3_REGION`, `S3_BUCKET_NAME`

#### 搜索、OAuth 和其他选项

`LOCAL_INDEX_INTERVAL`: 为搜索重建本地数据库索引的时间间隔 (以秒为单位) 。 默认为 `3600` 秒 (1 小时)。
`VERSION_INDEX_INTERVAL`: 为搜索重新索引版本的时间间隔 (以秒为单位) 。 默认为 1800 秒 (30 分钟) 。

这两个 GitHub OAuth 配置选项也很容易理解。
`GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`

`RATE_LIMIT_IGNORE_IPS`: 应具有较低速率限制的 IP 列表。 这对于允许前端具有较低的速率限制以防止意外超时很有用。

#### 命令行选项

`--skip-first-index`: 在启动时跳过索引本地数据库。 这有助于防止在频繁重启时做不必要的工作。
`--reconfigure-indices`: 重置搜索索引的 MeiliSearch 设置并退出。
`--reset-indices`: 重置 MeiliSearch 索引并退出； 这将清除所有以前索引的模组。

</details>

### knossos (前端)

[knossos](https://github.com/modrinth/knossos) 是 Nuxt.js 前端。 虽然您可以在此处使用 Docker，但您可能会发现仅安装 [npm](https://www.npmjs.com) 并从那里运行标准命令会更快:

```bash
npm install
npm run dev
```

完成后，您将通过热重载在 `localhost:3000` 上为 knossos 提供服务。 您可以将 `npm run dev` 中的 `dev` 替换为 `build` 以构建生产服务器，并使用 `start` 启动服务器。 您还可以使用 `npm run lint` 查找任何 eslint 问题，并使用 `npm run fix` 尝试自动修复这些问题。

### theseus (启动器) 、daedalus (元数据主机) 、minos (身份验证提供程序) 和 ariadne (分析系统)

这些 Rust 程序仍处于早期开发阶段。 在尝试贡献之前，请先在 Discord 中询问信息。

### minotaur (Gradle 插件)

[Minotaur](https://github.com/modrinth/minotaur) 是用于自动将工件发布到 Modrinth 的 Gradle 插件。 要在项目中运行插件副本，请使用 `./gradlew publishToMavenLocal` 将其发布到本地 Maven，并将 `mavenLocal()` 添加到构建脚本中。

Minotaur 包含两个测试环境——一个使用 ForgeGradle，另一个使用 Fabric Loom。 您可以调整这些环境来测试您可能尝试的任何东西； 只需确保每个任务中的 `modrinth` 任务仍然正常运行即可。 如果您发出拉取请求，GitHub Actions 将对此进行验证，因此您可能希望使用 [`act pull_request`](https://github.com/nektos/act) 在本地测试它们。

### 文档

[文档](https://github.com/modrinth/docs) (您正在阅读！) 是查找有关 Modrinth 及其 API 的所有一般信息的地方。 这些指令与 [knossos](#knossos-frontend) 基本相同，除了 lint 命令。
