# Getting Started

Welcome to Modrinth developer docs!

This tutorial will explain the basics of the Modrinth API.

## Getting a working testing environment

This documentation doesn't provide a way to test our API. In order to facilitate testing, we recommend the following tools:

- [cURL](https://curl.se/), an easy-to-use command line tool
- [ReqBIN](https://reqbin.com/), an online REST API testing tool
- [Postman](https://www.postman.com/downloads/), the main reference for our API (not open source)
- [Insomnia](https://insomnia.rest/), another reference (open source)
- Your web browser, if you don't need to send headers or a request body

Once you have a working client, you can test that it works by making a `GET` request to the following address:

```json title="GET https://api.modrinth.com/"
{
  "name": "modrinth-labrinth",
  "version": "0.2.0",
  "documentation": "https://docs.modrinth.com",
  "about": "Welcome traveler!"
}
```

If you got a response similar to the one above, you can use the Modrinth API! If you are having issues, feel free to reach out in the `#modrinth-support` channel of [our Discord](https://discord.gg/EUHuJHt). We'll be happy to assist!

## Your first useful request

Let's start by getting more information about a Minecraft mod; for example, the [Gravestones](https://modrinth.com/mod/gravestones) mod.

You can get information of that mod by doing the following request:

```json title="GET https://api.modrinth.com/v2/project/gravestones"
{
  "id": "ssUbhMkL",
  "slug": "gravestones",
  "project_type": "mod",
  "team": "ggl32fu7",
  "title": "Gravestones",
  "description": "A gravestones mod for fabric with tons of config options, an API, and more!",
  "body": "# Gravestones\nA highly configurable, easy to use, and elegant Gravestones mod for Fabric MC. It even has an easy to use API for developers!\n## Screenshots\n\n![Screenshot 1](https://i.imgur.com/mOFGTal.png \"Configuration\")",
  "published": "2020-10-21T22:19:51.707450Z",
  "updated": "2021-03-08T21:02:22.062991Z",
  "status": "approved",
  ...
}
```

Let's talk about the how and why of this request:

### Method

As you probably already know, the HTTP specification has specific action words, called methods, that tell the Modrinth API what you want to do with our data. We will always want to tell the Modrinth API what action to use. In the above example, we used the `GET` method, which tells the API we want to *get* information from Modrinth. Similarly, if you need to modify the contents of a response, `PATCH` is the method you should use. More information about the API routes can be found [here](/api-spec).

### Base URL

The base URL that you use will almost always be:

```
https://api.modrinth.org/{version}/
```

More information about all available domains and versions can be found [here](api-information/domains.md).

## Structure

Modrinth uses the term "project" to refer to the base item available in search. Currently, this includes mods and modpacks.

Projects are required to have at least one "version", which is a downloadable version of a project alongside its metadata. These tend to only have one file attached, but may have multiple.

Users and teams go hand-in-hand. Projects all have a generated "team" attached. The team consists of one or more members of the project with one user listed as the owner. Users may be on as many teams as they like, and may have as many projects as they like. In the future, teams will be able to be applied to multiple projects, but at this time, a team will only ever have one project.

Projects, teams, users, and versions all have a unique eight-digit base58 ID. These IDs are what you need to query in the URL of a request.

Projects may be searched by a *slug* instead of its ID. Slugs are a unique identifier that the mod authors can change. For example, the Gravestones mod from above has the `gravestones` slug as well as its `ssUbhMkL` ID. Users may also be queried by their username.

:::caution
While unique IDs are constant, **slugs and usernames can change at any moment**!

If you want to store something in the long term, it is recommended to use the unique ID.
:::

In the Gravestones example above, if we want to make sure that we *always* access the Gravestones mod (even if the author wants to change the slug), we can change our request to: `GET https://api.modrinth.com/v2/project/ssUbhMkL`, and the response will be identical.
