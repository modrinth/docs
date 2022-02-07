# Domains

The format of the base URL for Modrinth's API is `https://{branch-}?api.modrinth.com/{version}/`, where `branch` is the branch of Modrinth you're using and `version` is the version of the API you are using (the latest version of which is v2). You can learn more about how Modrinth's API versions work [here](versioning.md).

:::note
Version 1 of the API is the only exception to this rule, as it was the following: `https://api.modrinth.com/api/v1/`

Version 1 is deprecated, and anything using it should be migrated to version 2. See its migration guide [here](../migrations/v1-to-v2.md).
:::

The branch can either be `staging` or nothing (production). If you're using the production server, the path will be `https://api.modrinth.com/...`. These use separate databases, with `staging` being primarily for testing the API before it is rolled out onto the production servers. Production uses the latest tagged on the [labrinth](https://github.com/modrinth/labrinth) repository, whereas `staging` uses its latest commit.
