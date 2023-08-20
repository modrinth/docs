# Contributing to Modrinth

Every public-facing aspect of Modrinth, including everything from our [API/backend][labrinth] and [frontend][knossos] to our [Gradle plugin][minotaur] and [launcher][theseus], is released under free and open source licenses on [GitHub]. As such, we love contributions from community members! Before proceeding to do so, though, there are a number of things you'll want to keep in mind throughout the process, as well as some details specific to certain projects.

## Things to keep in mind

### Consult people on Discord

There are a number of reasons to want to consult with people on our [Discord] before making a pull request. For example, if you're not sure whether something is a good idea or not, if you're not sure how to implement something, or if you can't get something working, these would all be good opportunities to create a thread in the `#development` forum channel.

If you intend to work on new features, to make significant codebase changes, or to make UI/design changes, please open a discussion thread first to ensure your work is put to its best use.

### Don't get discouraged

At times, pull requests may be rejected or left unmerged for a variation of reasons. Don't take it personally, and don't get discouraged! Sometimes a contribution just isn't the right fit for the time, or it might have just been lost in the mess of other things to do. Remember, the core Modrinth team are often busy, whether it be on a specific project/task or on external factors such as offline responsibilities. It all falls back to the same thing: don't get discouraged!

### Code isn't the only way to contribute

You don't need to know how to program to contribute to Modrinth. Quality assurance, supporting the community, coming up with feature ideas, and making sure your voice is heard in public decisions are all great ways to contribute to Modrinth. If you find bugs, reporting them on the appropriate issue tracker is your responsibility; however, remember that potential security breaches and exploits must instead be reported in accordance with our [security policy](https://modrinth.com/legal/security).

Modrinth currently does not accept monetary donations.

## Project-specific details

If you wish to contribute code to a specific project, here's the place to start. Most of Modrinth is written in the [Rust language](https://www.rust-lang.org), but some things are written in other languages/frameworks like [Nuxt.js](https://nuxtjs.org) or Java.

### labrinth (backend and API)

[labrinth] is the Rust-based backend serving Modrinth's API with the help of the [Actix](https://actix.rs) framework. To get started with a labrinth instance, install docker, docker-compose (which comes with Docker), and [Rust]. The initial startup can be done simply with the command `docker-compose up`, or with `docker compose up` (Compose V2 and later). That will deploy a PostgreSQL database on port 5432 and a MeiliSearch instance on port 7700.

Now, you'll have to install the sqlx CLI, which can be done with cargo:

```bash
cargo install --git https://github.com/launchbadge/sqlx sqlx-cli --no-default-features --features postgres,rustls
```

From there, you can create the database and perform all database migrations with one simple command:

```bash
sqlx database setup
```

Finally, if on Linux, you will need the OpenSSL library. On Debian-based systems, this involves the `pkg-config` and `libssl-dev` packages.

To enable labrinth to create a project, you need to add two things.
1. An entry in the `loaders` table.
2. An entry in the `loaders_project_types` table. 

A minimal setup can be done from the command line with [psql](https://www.postgresql.org/docs/current/app-psql.html):
```bash
psql --host=localhost --port=5432 -U <username, default is labrinth> -W
```
The default password for the database is `labrinth`. Once you've connected, run
```sql
INSERT INTO loaders VALUES (0, 'placeholder_loader');
INSERT INTO loaders_project_types VALUES (0, 1); -- modloader id, supported type id
INSERT INTO categories VALUES (0, 'placeholder_category', 1); -- category id, category, project type id
```
This will initialize your database with a modloader called 'placeholder_loader', with id 0, and marked as supporting mods only. It will also create a category called 'placeholder_category' that is marked as supporting mods only
If you would like 'placeholder_loader' to be marked as supporting modpacks too, run
```sql
INSERT INTO loaders_project_types VALUES (0, 2); -- modloader id, supported type id
```
If you would like 'placeholder_category' to be marked as supporting modpacks too, run
```sql
INSERT INTO categories VALUES (0, 'placeholder_category', 2); -- modloader id, supported type id
```

The majority of configuration is done at runtime using [dotenvy](https://crates.io/crates/dotenvy) and the `.env` file. Each of the variables and what they do can be found in the dropdown below. Additionally, there are three command line options that can be used to specify to MeiliSearch what you want to do.

<details><summary>.env variables & command line options</summary>

#### Basic configuration

`DEBUG`: Whether debugging tools should be enabled  
`RUST_LOG`: Specifies what information to log, from rust's [`env-logger`](https://github.com/env-logger-rs/env_logger); a reasonable default is `info,sqlx::query=warn`  
`SITE_URL`: The main URL to be used for CORS  
`CDN_URL`: The publicly accessible base URL for files uploaded to the CDN  
`MODERATION_DISCORD_WEBHOOK`: The URL for a Discord webhook where projects pending approval will be sent  
`CLOUDFLARE_INTEGRATION`: Whether labrinth should integrate with Cloudflare's spam protection  
`DATABASE_URL`: The URL for the PostgreSQL database  
`DATABASE_MIN_CONNECTIONS`: The minimum number of concurrent connections allowed to the database at the same time  
`DATABASE_MAX_CONNECTIONS`: The maximum number of concurrent connections allowed to the database at the same time  
`MEILISEARCH_ADDR`: The URL for the MeiliSearch instance used for search  
`MEILISEARCH_KEY`: The name that MeiliSearch is given  
`BIND_ADDR`: The bind address for the server. Supports both IPv4 and IPv6  
`MOCK_FILE_PATH`: The path used to store uploaded files; this has no default value and will panic if unspecified

#### CDN options

`STORAGE_BACKEND`: Controls what storage backend is used. This can be either `local`, `backblaze`, or `s3`, but defaults to `local`

The Backblaze and S3 configuration options are fairly self-explanatory in name, so here's simply their names:  
`BACKBLAZE_KEY_ID`, `BACKBLAZE_KEY`, `BACKBLAZE_BUCKET_ID`  
`S3_ACCESS_TOKEN`, `S3_SECRET`, `S3_URL`, `S3_REGION`, `S3_BUCKET_NAME`

#### Search, OAuth, and miscellaneous options

`LOCAL_INDEX_INTERVAL`: The interval, in seconds, at which the local database is reindexed for searching. Defaults to `3600` seconds (1 hour).  
`VERSION_INDEX_INTERVAL`: The interval, in seconds, at which versions are reindexed for searching. Defaults to `1800` seconds (30 minutes).

The OAuth configuration options are fairly self-explanatory. For help setting up authentication, please contact us on [Discord].

`RATE_LIMIT_IGNORE_IPS`: An array of IPs that should have a lower rate limit factor. This can be useful for allowing the front-end to have a lower rate limit to prevent accidental timeouts.

#### Command line options

`--skip-first-index`: Skips indexing the local database on startup. This is useful to prevent doing unnecessary work when frequently restarting.  
`--reconfigure-indices`: Resets the MeiliSearch settings for the search indices and exits.  
`--reset-indices`: Resets the MeiliSearch indices and exits; this clears all previously indexed mods.

</details>

#### Ready to open a PR?

If you're prepared to contribute by submitting a pull request, ensure you have met the following criteria:

- `cargo check` has been run.
- `cargo sqlx prepare` has been run.

### knossos (frontend)

[knossos] is the Nuxt.js frontend. You will need to install [pnpm] and run the standard commands:

```bash
pnpm install
pnpm run dev
```

Once that's done, you'll be serving knossos on `localhost:3000` with hot reloading. You can replace the `dev` in `pnpm run dev` with `build` to build for a production server and `start` to start the server. You can also use `pnpm run lint` to find any eslint problems, and `pnpm run fix` to try automatically fixing those problems.

### theseus (launcher)

[theseus] is the Tauri-based launcher that lets users conveniently play any mod or modpack on Modrinth. It uses the Rust-based Tauri as the backend and Nuxt.js as the frontend. To get started, install [pnpm] and [Rust], then run the following commands:

```bash
cd theseus_gui
pnpm install
pnpm run tauri dev
```

Once the commands finish, you'll be viewing a Tauri window with Nuxt.js hot reloading.

You can use `pnpm run lint` to find any eslint problems, and `pnpm run fix` to try automatically fixing those problems.

#### Ready to open a PR?

If you're prepared to contribute by submitting a pull request, ensure you have met the following criteria:

- Run `pnpm run fix` to address any fixable issues automatically.
- Run `cargo check` to validate Rust-related code.

### minotaur (Gradle plugin)

[Minotaur][minotaur] is the Gradle plugin used to automatically publish artifacts to Modrinth. To run your copy of the plugin in a project, publish it to your local Maven with `./gradlew publishToMavenLocal` and add `mavenLocal()` to your buildscript.

Minotaur contains two test environments within it - one with ForgeGradle and one with Fabric Loom. You may tweak with these environments to test whatever you may be trying; just make sure that the `modrinth` task within each still functions properly. GitHub Actions will validate this if you're making a pull request, so you may want to use [`act pull_request`](https://github.com/nektos/act) to test them locally.

### Documentation

The [documentation](https://github.com/modrinth/docs) (which you are reading right now!) is the place to find any and all general information about Modrinth and its API. The instructions are largely the same as [knossos](#knossos-frontend), except that the docs have no lint.

[Discord]: https://discord.gg/modrinth
[GitHub]: https://github.com/modrinth
[knossos]: https://github.com/modrinth/knossos
[labrinth]: https://github.com/modrinth/labrinth
[theseus]: https://github.com/modrinth/theseus
[minotaur]: https://github.com/modrinth/minotaur
[Rust]: https://www.rust-lang.org/tools/install
[pnpm]: https://pnpm.io