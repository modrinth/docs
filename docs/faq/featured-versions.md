---
sidebar_class_name: hidden
---

# How does the "featured versions" system work?

If you do not manually feature any versions on your project, Modrinth will automatically feature certain versions that are likely to be relevant to users. The latest version of any given combination of game version and loader will be automatically featured by this system. For example, if you have a version for Fabric and Forge, both will be featured; likewise, if you have a version for 1.19.4 and 1.20.1, both will be featured.

<details>
<summary>List of major game versions, as defined by Modrinth</summary>

1.20.2, 1.20.1, 1.20, 1.19.4, 1.19.3, 1.19.2, 1.19, 1.18.2, 1.17.1, 1.16.5, 1.16.1, 1.15.2, 1.14.4, 1.13.2, 1.12.2, 1.11.2, 1.10.2, 1.9.4, 1.8.9, 1.7.10, 1.6.4, 1.5.2, 1.4.7, 1.3.2, 1.2.5, 1.1, b1.7.3

This list was last updated November 4th, 2023. If you wish to see the list of latest versions at any time, the following command can be run in a Bash terminal:  
`curl -s https://api.modrinth.com/v2/tag/game_version | jq -r '[.[] | select(.major==true) | .version] | join(", ")'`

</details>

If you have a single version that is manually featured, the auto-featuring system will not work. Thus, we do not recommend manually featuring any version. For most intents and purposes, the automatic featuring system for versions on projects is sufficient.
