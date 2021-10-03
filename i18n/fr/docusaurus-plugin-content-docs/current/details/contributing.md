---
title: Contributing to Modrinth
---

# Contributing to Modrinth

The vast majority of Modrinth, including everything from our [API/backend](https://github.com/modrinth/labrinth) and [frontend](https://github.com/modrinth/knossos) to the [Minotaur plugin](https://github.com/modrinth/minotaur) and [analytics service](https://github.com/modrinth/ariadne), is released under free and open source licenses on our [GitHub](https://github.com/modrinth). As such, we love contributions from community members! Before proceeding to do so, though, there are a number of things you'll want to keep in mind throughout the process, as well as some details specific to certain projects.

## Things to keep in mind

### Docker

Most Modrinth programs take advantage of the containerization platform [Docker](https://www.docker.com), which can help to set up a working production or development environment within seconds. Be wary, though: if you're planning to make a lot of pull requests/changes to a certain project, it may be better to use the native live development tools instead of using Docker. Project-specific details, including what Docker commands to use, can be found below.

### Consult people on Discord

There are a number of reasons to want to consult with people on our [Discord](https://discord.gg/gFRbNQ2) before making a pull request. For example, if you're not sure whether something is a good idea or not, if you're not sure how to implement something, or if you can't get something working, these would all be good opportunities to ask in a development channel. For all major programs made by Modrinth, there is a development channel near or at the bottom of the channel list, as well as a catch-all `#other` channel.

### Don't get discouraged

At times, pull requests may be rejected or left unmerged for a variation of reasons. Don't take it personally, and don't get discouraged! Sometimes a contribution just isn't the right fit for the time, or it might have just been lost in the mess of other things to do. Remember, the core Modrinth team are often busy, whether it be on a specific project/task or on external factors such as offline responsibilities. It all falls back to the same thing: don't get discouraged!

### Code isn't the only way to contribute

You don't need to know how to program to contribute to Modrinth. Quality assurance, supporting the community, coming up with feature ideas, and making sure your voice is heard in public decisions are all great ways to contribute to Modrinth. If you find bugs, reporting them on the appropriate issue tracker is your responsibility; however, remember that potential security breaches and exploits must instead be sent in an email to <admin@modrinth.com>.

Modrinth currently does not accept monetary donations.

## Project-specific details

If you wish to contribute code to a specific project, here's the place to start. Most of Modrinth is written in the [Rust language](https://www.rust-lang.org), but some things are written in other languages/frameworks like [Nuxt.js](https://nuxtjs.org) or Java.

### labrinth (backend and API)

[labrinth](https://github.com/modrinth/labrinth) is the Rust-based backend serving Modrinth's API with the help of the [Actix](https://actix.rs) framework. To get started with a labrinth instance, install docker, docker-compose, and cargo. The initial startup can be done simply with the command `docker-compose up`. That will deploy several things on several ports:

- Port 5432: PostgreSQL database
- Port 7700: MeiliSearch instance
- Port 8070: pgAdmin web UI 
  - The password when initially accessing pgAdmin is nothing, so just leave it blank when prompted.

Now, you'll have to install the sqlx CLI, which can be done with cargo:

```bash
cargo install --git https://github.com/launchbadge/sqlx sqlx-cli --no-default-features --features postgres
```

From there, you can create the database and perform all database migrations with these two commands:

```bash
sqlx database create
sqlx migrate run
```

The majority of configuration is done at runtime using [dotenv](https://github.com/dotenv-rs/dotenv) and the `.env` file. Each of the variables and what they do can be found in the dropdown below. Additionally, there are three command line options that can be used to specify to MeiliSearch what you want to do.

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

The two GitHub OAuth configuration options are also fairly self-explanatory.  
`GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`

`RATE_LIMIT_IGNORE_IPS`: An array of IPs that should have a lower rate limit factor. This can be useful for allowing the front-end to have a lower rate limit to prevent accidental timeouts.

#### Command line options

`--skip-first-index`: Skips indexing the local database on startup. This is useful to prevent doing unnecessary work when frequently restarting.  
`--reconfigure-indices`: Resets the MeiliSearch settings for the search indices and exits.  
`--reset-indices`: Resets the MeiliSearch indices and exits; this clears all previously indexed mods.

</details>

### knossos (frontend)

[knossos](https://github.com/modrinth/knossos) is the Nuxt.js frontend. While you're able to use Docker here, you may find it faster to just install [npm](https://www.npmjs.com) and run the standard commands from there:

```bash
npm install
npm run dev
```

Once that's done, you'll be serving knossos on `localhost:3000` with hot reloading. You can replace the `dev` in `npm run dev` with `build` to build for a production server and `start` to start the server. You can also use `npm run lint` to find any eslint problems, and `npm run fix` to try automatically fixing those problems.

### theseus (launcher), minos (authentication provider), and ariadne (analytics system)

These Rust programs are still in early development. Ask in the relevant Discord channel what you can help with before making a pull request.

### minotaur (Gradle plugin)

[Minotaur](https://github.com/modrinth/minotaur) is the Gradle plugin used to automatically publish artifacts to Modrinth. To run your copy of the plugin in a project, publish it to your local Maven with `./gradlew clean build publishToMavenLocal` and add `mavenLocal()` to your buildscript.

If you don't wish to use the local Maven, or you're having trouble doing so, you can use a direct jar. If you do so, please make sure to add all relevant dependencies (httpmime, httpclient, and gson) like such:

```groovy
buildscript {
    repositories {
        mavenCentral()
    }
    dependencies {
        classpath files { file('../../../../build/libs').listFiles()}
        classpath group: 'org.apache.httpcomponents', name: 'httpmime', version: '4.5.2'
        classpath group: 'org.apache.httpcomponents', name: 'httpclient', version: '4.5.2'
        classpath group: 'com.google.code.gson', name: 'gson', version: '2.6.2'
    }
}
```

### Blog

The [blog](https://blog.modrinth.com) is the central place to find news and articles about topics related to or involving Modrinth. To run the blog, it's similar to but simpler than knossos; run `npm install` first, then `npm run develop` for hot reloading or `npm run build` to build and serve.

Pull requests to the [blog repository](https://github.com/modrinth/blog) may not always be accepted. Before making a pull request to this repository, please contact a core Modrinth team member, and they will work with you and the rest of the blogging team on revisions, banner photos, and other details.

### Documentation

The [documentation](https://github.com/modrinth/docs) (which you are reading right now!) is the place to find any and all general information about Modrinth and its API. Instead of using npm to build and develop the documentation, you should instead use [yarn](https://yarnpkg.com). `yarn install` followed by `yarn start` will serve the docs on `localhost:3000` with hot reloading and open a browser window pointing there.

### modrinth-old-ui

Do not make a pull request to this repository or attempt to contribute to it. This repository is no longer used and has not been used for a long time.