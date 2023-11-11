---
sidebar_class_name: hidden
---

# Why are the search filters broken when filtering by both game versions and loaders?

Right now, when you try to filter search results based on specific game versions and loaders, it's not working properly. The reason behind this is that our search system doesn't recognize the different versions of projects. Essentially, it knows which game versions and loaders a project supports, but it can't figure out if there are specific versions that work with both the selected game version and loader. This is a known problem, and we're working on fixing it.
