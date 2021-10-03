---
id: domains
title: Domains
---

### Base URL
The base URL is the source of all the requests made for this instance and version.
Here is the format we use:
```
https://{branch-}?api.modrinth.com/{version}/
```
Where:
- `branch` is the branch (edition) of modrinth you are in. We currently only have `staging` and nothing. If there is no branch (in the case you're using the production server),
the path will be: `https://api.modrinth.com/...`

- `version` is the version you are using of the API. You can learn more about how Modrinth's API versions work [here](./versioning.md)
