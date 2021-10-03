---
title: Versioning
---

# Versioning
### Versioning policy
Modrinth follows a simple pattern for its API:
- In the event of an API change, the API version is bumped, and migrations steps are available will be available [here](../migrations/migrations.md)
- When an API is no longer the current one, it will be kept for a certain duration, defined by one of the two triggers:
  - Either the version is no longer current for a duration of two (2) years
  - Or this version is three (3) versions behind the current one
- When one of these triggers has been met, a deprecation period of six (6) months begins, where no new additions are done, and developers still using that version will be notified by email or Discord if it is available.
- Once the deprecation period finishes, the version will phase out over a duration of one (1) month, where the version will break with a 410 GONE error, and an error body saying that the version is phasing out during small periods of time (<5 minutes) in the first two weeks, and long periods for the last two (~6-12 hours) in order to keep up to date all developers.

:::tip
We recommend that you handle these 410 errors and ask your users to update to a newer version of your application for best usability.
:::
### Reasoning

This choice was made because of two reasons. First, Modrinth must stay stable for apps that depends on it, but on the other side of the balance, we have the difficulty of innovation. Multiple versions of an API can be costly and difficult to continuously maintain.

This is why we took the middle-ground, by having a specific set of rules dictating how we will phase out old versions of the API
