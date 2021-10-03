---
title: v1 to v2
---
# Migrating from API v1 to API v2

These bullet points cover most changes in the v2 API, but please note that fields containing `mod` in most contexts have been shifted to `project`. 
For example, in the search route, the field `mod_id` was renamed to `project_id`

- The search route has been moved from /api/v1/mod -> /v2/search
- New search facet: `project_type`
- Alphabetical sort removed (it didn't work and is not possible due to limits in MeiliSearch)
- New search fields: `project_type`, `gallery`
  - The gallery field is an array of URLs to images that are part of the project's gallery
- The gallery is a new feature which allows the user to upload images showcasing their mod to the CDN which will be displayed on their mod page
- Internal change: Any project file uploaded to Modrinth is now validated to make sure it's a valid Minecraft mod, Modpack, etc.
    - For example, a Forge 1.17 mod with a JAR not containing a mods.toml will not be allowed to be uploaded to Modrinth
- In project creation, projects may not upload a mod with no versions to review, however they can be saved as a draft
- Donation URLs have been enabled

Along with this, project subroutes, for example /v2/project/{id}/version, now allow the slug to be used with the ID. 
This is also the case with user routes.