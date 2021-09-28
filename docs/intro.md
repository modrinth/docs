---
sidebar_position: 1
id: intro
---

# Introduction

Welcome to modrinth developer docs!

This tutorial will explain the basics of the Modrinth API.

## Getting a working testing environment

This documentation doesn't provide (yet!) a way to easily test every single command.
In order to facilitate testing here is, in no particular order, a list of some great API testing tools:

- [Postman](https://www.postman.com/downloads/) the reference, but is not open source, and now asks for login too frequently.
- [Insomnia](https://insomnia.rest/) another reference, this time opensource, and doesn't ask for your credentials.
- [ReqBIN](https://reqbin.com/) online REST testing tool.

:::note

This site doesn't make use of them, everything is presented in code blocks.

:::

Once you have installed a client, you can test that it works on modrinth by making a **GET** request to the following address:

```http
GET https://staging-api.modrinth.com/
{
  "name": "modrinth-labrinth",
  "version": "0.2.0",
  "documentation": "https://docs.modrinth.com",
  "about": "Welcome traveler!"
}
```

If you did get nearly the same thing than what's appearing above, then it's that you can access modrinth !

## Your first interesting request

Let's start by getting more information about a minecraft mod, let's say, [Gravestones](https://modrinth.com/mod/gravestones), or [Monke Mod](https://staging.modrinth.com/mod/monke) if you live on the edge.

You can get information about that mod by doing the following request:
:::note

Don't worry, we'll explain everything after you have made the request

:::

```http
GET https://staging-api.modrinth.com/v2/project/monke
{
  "id": "tsi4hUoN",
  "slug": "monke",
  "project_type": "mod",
  "team": "9gqVrerM",
  "title": "Monke Mod",
  "description": "A mod about finding monkes in Minecraft!",
  "body": "MONKEEEEEEEEEEEEEEEEEEEEEEEEE\n\n**monkey**",
  "body_url": null,
  "published": "2021-07-20T02:31:50.191272Z",
  "updated": "2021-07-20T02:31:49.914234Z",
  "status": "approved",
  ...
}
```

First of all, good job!
After that, let's talk a little bit more about the how and why of this request:

### Method
As many of you may already know, the HTTP specification has action words, and as expected, we do use them.
In application, we will always say what word to use, and in the majority of cases when querying data, you will use `GET`

But you can learn more about them [here](details/methods.md)

### Base URL
The base URL is the source of all the requests made for this instance and version.
Here is the format we use:
```
https://{branch}-api.modrinth.com/{version}/
```
Where:
- Branch is the branch (edition) of modrinth you are in. We currently only have `staging` and nothing. If there is no branch (we're on the live servers), the path is the following: `https://api.modrinth.com/...`
- Version is the version you are using of the api. You can learn more about how modrinth is using versions [here](details/versioning.md)

:::tip

The v1 is the only exception to this rule, as it was the following: `https://api.modrinth.com/api/v1/`

Note the part between the version and the domain :P

:::

### Projects

In modrinth, projects are really any entity that modrinth provides (currently only modpacks and mods).

It has an unique id, usually gibberish, like for example `tsi4hUoN`, and another characteristic, the **slug**.

A slug is a chosen unique ID, that is used in the website navigation and in the API, interchangeably with the unique ID.

In our example, this would be `monke`.

:::danger

While unique IDs are constant, slugs can change at any moment!

If you store something in the long term, it is recommended to use the unique ID.

:::

## Conclusion

You did it!
I hope you do understand more about how the modrinth API works in general, and you are now prepared to combat the rest of the tutorials :)

