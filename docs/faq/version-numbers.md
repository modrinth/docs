---
sidebar_class_name: hidden
---

# How should I format my version numbers?

Generally speaking, we recommend that version numbers use a consistent versioning system similar to [Semantic Versioning (SemVer)](https://www.geeksforgeeks.org/introduction-semantic-versioning). That is, a format of `MAJOR.MINOR.PATCH`, where `MAJOR` represents an incremental number for major changes, `MINOR` for smaller changes, and `PATCH` for small fixes. Beta and alpha releases follow a different pattern, as detailed in [the SemVer specification](https://semver.org). Many examples of this versioning system can be found across Modrinth and the broader software development world.

While SemVer is the most common approach, this is not the only way. Other approaches include:

- **[Calendar Versioning (CalVer)](https://calver.org)**: When it doesn't make much sense to differentiate between types of releases, it may make more sense to create a SemVer-formatted version based on today's date; for example, `2020.11.30`.
- **Minecraft Versioning**: Using the supported Minecraft version without the dots as your `MAJOR` version. For example, `1202.1.10` would indicate project version `1.10` for Minecraft 1.20.2.
- **[zer0ver](https://0ver.org)**: While this is meant to be more tongue-in-cheek, many projects on Modrinth use this versioning scheme in order to indicate a sense of "never being completely finished".
- **Incremental versioning**: While not recommended, it is certainly possible to simply have a version number that is incremented each time a new version is released. For example, your first version would be version `1`, the next `2`, the next `3`, etc.
