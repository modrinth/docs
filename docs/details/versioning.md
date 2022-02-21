# Versioning 

Modrinth follows a simple pattern for its API:

- In the event of a breaking API change, the API version is bumped, and migration steps will be available [here](../migrations/information.md)
- When an API is no longer the current one, it will be considered outdated but still supported. It will be kept for a certain duration, defined by one of the two triggers, either that:
  - The version is no longer current for a duration of two (2) years, or
  - The version is three (3) versions behind the current one
- When one of these triggers has been met, a deprecation period of six (6) months begins, where developers still using that version will be notified by email, Discord, GitHub issues, or other similar contact methods if available.
- Once the deprecation period finishes, the version will phase out over a duration of one (1) month.
  - For the first two weeks, the version will periodically return a `410 GONE` error for small durations of around 5 minutes, alongside an error body saying that the version is phasing out.
  - For the next two weeks, it will break with the same error, but over longer durations of 6-12 hours.
- After this phase-out period, the version will be removed entirely, either with a permanent `410 GONE` or `404 NOT FOUND` error.

:::tip
We recommend that you handle these 410 errors and update applications to the latest API version. Migration details can be found [here](../migrations/v1-to-v2.md).
:::

Modrinth must stay stable for apps that depends on it, but maintaining older versions can be costly and difficult to maintain. Keeping old versions is also a barrier to innovation for new features and changes. As such, this approach is taken in order to keep a balance between stability and innovation.
