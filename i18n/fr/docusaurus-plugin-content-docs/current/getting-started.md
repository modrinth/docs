---
sidebar_position: 1
id: getting-started
---

# Démarrage

Bienvenue sur la documentation pour les développeurs de Modrinth !

Ce tutoriel vous expliquera les bases de l'API Modrinth.

## Obtenir un environnement de test fonctionnel

This documentation doesn't provide a way to easily test our API (yet).
In order to facilitate testing we recommend the following tools:

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

If you got a response just like or very close to the one above, you can use the Modrinth API! 
If you are having issues, feel free to reach out in our support channel of our discord. We'll be happy to assist you.

## Your first useful request

Let's start by getting more information about a minecraft mod, for example the [Gravestones](https://modrinth.com/mod/gravestones) mod.

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
In applications, we will always tell the Modrinth API what action to use.
In the above example, we used the `GET` method, which tells the API we want to *get* information from Modrinth.

### Base URL
The base URL that you use will almost always be:
```
https://api.modrinth.org/{version}/
```
:::note

Version 1 of the API is the only exception to this rule, as it was the following: `https://api.modrinth.com/api/v1/`

Note the part between the version and the domain

:::
If you are feeling particularly adventurous, you can use the staging api, which is in active development (and has all the shiny new features), but only includes test mods. The base URL for the staging API is:
```
https://staging-api.modrinth.com/{version}/
```
### Projects

In modrinth, projects are any type of item that Modrinth provides for users to download (currently only includes modpacks and mods).

Projects have a unique id, usually gibberish, like `tsi4hUoN`, as well as another characteristic, called a *slug*.

Slugs are a unique id that the mod authors can change

For example, the gravestones mod has the slug `gravestones`, and the id of `ssUbhMkL`.

:::caution

While unique IDs are constant, **slugs can change at any moment**!

If you want to store something in the long term, it is recommended to use the unique ID.

:::

Adding on to the gravestones example above, if we want to make sure that we *always* access the gravestones mod, even if the author wants to change the slug, we can change our request to:
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