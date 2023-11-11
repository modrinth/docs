---
sidebar_class_name: hidden
---

# What is the "Additional files" section for?

Generally speaking, you should only upload one file to each version you upload - that is, the one that most people will want to download. There are certain cases where you are permitted to upload additional files:

- **Source files**: For JVM-based projects (mods and plugins), uploading a JAR file containing source code created by a build tool such as Gradle or Maven is acceptable.
- **Javadoc files**: For JVM-based projects (mods and plugins), uploading a JAR file containing [Javadoc](https://en.wikipedia.org/wiki/Javadoc) is acceptable.
- **Resource packs associated with a data pack**: For data packs, it is acceptable to upload a resource pack as an additional file. Just make sure you select the "Required resource pack" or "Optional resource pack" file type as appropriate.
- **Configuration templates**: Any default configuration file(s) that cannot be included in the base file can be uploaded as an additional file.

Outside of these cases, the "Additional files" section should rarely, if ever, be used. Separate files supporting additional loaders or game versions should be uploaded as separate versions on a single project. It may be appropriate to create a separate project for entirely different variations of a given project.
