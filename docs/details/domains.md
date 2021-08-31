---
id: domains
title: API Domains
---

### Base URL
The base URL is the source of all the requests made for this instance and version.
Here is the format we use:
```
https://{branch-}?api.modrinth.com/{version}/
```
Where:
- Branch is the branch (edition) of modrinth you are in. We currently only have `staging` and nothing. If there is no branch (we're on the live servers),
the path is the following: `https://api.modrinth.com/...`

- Version is the version you are using of the api. You can learn more about how modrinth is using versions [here](./versioning.md)
