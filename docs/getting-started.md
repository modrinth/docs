---
sidebar_position: 1
id: getting-started
---

# Getting Started

Welcome to Modrinth developer docs!

This tutorial will explain the basics of the Modrinth API.

## Getting a working testing environment

This documentation doesn't provide a way to easily test our api (yet).
In order to facilitate testing we recommend the following API testing tools:

- [ReqBIN](https://reqbin.com/), an online REST API testing tool.
- [Postman](https://www.postman.com/downloads/), the main reference for our API, but it is not open source, and now asks you for your login too frequently.
- [Insomnia](https://insomnia.rest/), another reference, this time opensource, and doesn't ask for your credentials.

Once you have have a working client, you can test that it works by making a **GET** request to the following address:

```json title="GET https://api.modrinth.com/"
{
  "name": "modrinth-labrinth",
  "version": "0.1.0",
  "documentation": "https://modrinth.com/documentation",
  "about": "Welcome traveler!"
}
```

If you did get nearly the same thing than what's appearing above, then it's that you can access modrinth !

## Your first useful request

Let's start by getting more information about a minecraft mod, like if we want to know more about the [Gravestones](https://modrinth.com/mod/gravestones) mod.

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
As many of you may already know, the HTTP specification has specific action words, called methods, that tell the Modrinth API what you want to do with our data.
In applications, we will always tell the Modrinth api what action to use.
In the above example, we used the `GET` method, which tells the Api we want to *get* information from Modrinth.

You can learn more about the different HTTP methods [here](details/methods.md)

### Base URL
The base URL that you use will almost always be:
```
https://api.modrinth.org/{version}/
```
:::note

Version 1 of the API is the only exception to this rule, as it was the following: `https://api.modrinth.com/api/v1/`

Note the part between the version and the domain :P

:::
If you are feeling particularly adventurous, you can use the staging api, which is in active development (and has all the shiny new features), but only includes test mods. The base URL for the staging api is:
```
https://staging-api.modrinth.com/{version}/
```
### Projects

In modrinth, projects are any type of item that modrinth provides for users to download (currently only includes modpacks and mods).

Projects have a unique id, usually gibberish, like `tsi4hUoN`, as well as another characteristic, called a *slug*.

Slugs are a unique id that the mod authors can change

For example, the gravestones mod has the slug `gravestones`, and the id of `ssUbhMkL`.

:::caution

While unique IDs are constant, **slugs can change at any moment**!

If you want to store something in the long term, it is recommended to use the unique ID.

:::

Adding on to the gravestones example above, if we want to make sure that we *always* access the gravestones mod, even if the author wants to change the slug, wen can change our request to:
```json title="GET https://api.modrinth.com/v2/project/ssUbhMkL"
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
## Conclusion

You did it!
I hope you understand more about how the Modrinth API works, and are now prepared to tackle the rest of the documentation :D

