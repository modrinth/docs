# Versioning 

Modrinth follows a simple pattern for its API versioning. In the event of a breaking API change, the API version is bumped, and migration steps will be available [on the migration page](../migrations/information.md).

When an API is no longer the current one, it will immediately be considered deprecated. No more support will be provided for API versions older than the current one. It will be kept for some time, but this amount of time is not certain.

:::warning
Modrinth reserves the right to break any old API versions at any time. Do not request support for old API versions.
:::

Old API routes may be changed in a way seen fit by Modrinth. For example, a field called `_comment` may be added to every JSON request telling developers to update their applications. Another example may be route providing a `410 GONE` error or `404 NOT FOUND` error periodically. In any event, you [MUST (but we know you won't)](https://datatracker.ietf.org/doc/html/rfc6919#section-1) handle these errors and update your application.

Modrinth must stay stable for apps that depends on it, but maintaining older versions can be costly and difficult to maintain. Keeping old versions is also a barrier to innovation for new features and changes. As such, this approach is taken in order to keep a balance between stability and innovation.
