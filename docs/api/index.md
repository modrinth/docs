---
sidebar_position: 2
---

# Getting Started with the API

Welcome to Modrinth API developer docs!

:::info
Looking for the list of routes? **[Take me to the API specification.](/api-spec)**
:::

This documentation doesn't provide a way to test our API. In order to facilitate testing, we recommend the following tools:

- [cURL](https://curl.se/) (recommended, command-line)
- [ReqBIN](https://reqbin.com/) (recommended, online)
- [Postman](https://www.postman.com/downloads/)
- [Insomnia](https://insomnia.rest/)
- Your web browser, if you don't need to send headers or a request body

Once you have a working client, you can test that it works by making a `GET` request to the following address:

```json title="GET https://api.modrinth.com/"
{
  "about": "Welcome traveler!",
  "documentation": "https://docs.modrinth.com",
  "name": "modrinth-labrinth",
  "version": "2.7.0"
}
```

If you got a response similar to the one above, you can use the Modrinth API! [Take me to the API specification.](/api-spec)
