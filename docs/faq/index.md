---
sidebar_position: 0
---

import UserCard from '../../src/components/UserCard.js';

# Frequently Asked Questions

<div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>

<UserCard avatar={"https://github.com/triphora.png"} username={"triphora"} profileLink={"https://github.com/triphora.png"} /> <UserCard avatar={"https://github.com/triphora.png"} username={"triphora"} profileLink={"https://github.com/triphora.png"} /> <UserCard avatar={"https://github.com/triphora.png"} username={"triphora"} profileLink={"https://github.com/triphora.png"} />

</div>

For questions specific to the Modrinth App, please refer to the [app FAQ](app.md).

## General questions

### When will (x) feature get released? When will support for other games/Bedrock be added? {#etas}

Modrinth does not provide any public <abbr title="Estimated Time of Arrival">ETAs</abbr> for new features or for bug fixes. You can take a look at [our roadmap](../roadmap.md) to see what features we're working on right now as well as what is yet to come.

### Why are the search filters broken when filtering by both game versions and loaders? {#join-filters}

Right now, when you try to filter search results based on specific game versions and loaders, it's not working properly. The reason behind this is that our search system doesn't recognize the different versions of projects. Essentially, it knows which game versions and loaders a project supports, but it can't figure out if there are specific versions that work with both the selected game version and loader. This is a known problem, and we're working on fixing it.

### How can I see the dependents/reverse-dependencies of a project? {#dependents}

Modrinth does not currently have a way to see the dependents of a project — only the dependencies. Pending resolution of some performance issues, this feature is coming soon.

### When will version (x) or snapshot (x) be added to Modrinth? {#snapshots}

For the Labrinth API and Modrinth App, new versions and snapshots will automatically be added within one hour of release. Please ensure that you restart the app for it to show up.

For the main modrinth.com website, versions must be manually added at this point in time. Typically, new versions are added within the same day of release, but it may be delayed for a variety of reasons.

## Account-related questions

### Why can't I log into my Modrinth account? {#account-locked}

If your account was created on or before August 5th, 2023, your account was created using GitHub. Simply sign in using GitHub. Attempting to reset your password or log in through any other service will not work.

If you still cannot log into your account after attempting to sign in using GitHub, please email support@modrinth.com.

### How can I make my Modrinth account more secure? {#2fa}

The best way to add more security to your Modrinth account is to set up [two-factor authentication (2FA)](https://en.wikipedia.org/wiki/Multi-factor_authentication). Modrinth's 2FA setup uses [time-based one-time passwords (TOTP)](https://en.wikipedia.org/wiki/Time-based_one-time_password) that are accessible through Google Authenticator, Authy, Bitwarden, or any other application supporting TOTP 2FA. You can set this up under the "Account security" section of the [Modrinth account settings](https://modrinth.com/settings/account).

### What makes a secure Modrinth account password? {#password-requirements}

Modrinth uses [zxcvbn](https://lowe.github.io/tryzxcvbn/) to judge password strength. Any password with a score lower than 3 out of 4 will be rejected. Besides the zxcvbn requirements, passwords must have a minimum length of 8 and a maximum length of 256. We do not require you to add numbers or symbols, though this is highly recommended. Any Unicode character is allowed — even emoji! [Just make sure you have a way to type them.](https://www.youtube.com/watch?v=3AtBE9BOvvk)

We recommend [Bitwarden](https://bitwarden.com) for generating and storing passwords. Any password you are able to remember is unlikely to have optimal security.

### How can I add additional authentication methods to my Modrinth account? {#auth-methods}

You can use Discord, GitHub, Microsoft, Google, Steam, GitLab, or a password to sign in to Modrinth. We generally recommend you set up two or three of these seven methods. You can set this up under the "Account security" section of the [Modrinth account settings](https://modrinth.com/settings/account).

<details><summary>Why only set up two or three and not all seven?</summary>

There is a delicate balance to be struck when choosing how to log in to your Modrinth account. Setting up too few authentication methods can leave you prone to locking yourself out of your Modrinth account if you lose your login information for one service. Meanwhile, setting up too many can leave your Modrinth account prone to also being compromised if your login for another service is compromised.

If all of your passwords are secure and unique (i.e. generated by a password manager program), you typically do not have to worry about this at all. For more information about what we consider to be a secure password, please see [What makes a secure Modrinth account password?](#password-requirements)

</details>

## Author-related questions

### How long will my submitted project be "under review" for? {#review-times}

Modrinth's team of content moderators work hard to review all submitted projects. Typically, you can expect a new project to be reviewed within 24 to 48 hours. Please keep in mind that larger projects, especially modpacks, may require more time to review. Certain holidays or events may also lead to delays depending on moderator availability.

Thanks to the way that Modrinth's queue system works, it is not possible for something to be "lost in the queue". If your project displays as "Under review", it will be reviewed.

### How does the "featured versions" system work? {#featured-versions}

If you do not manually feature any versions on your project, Modrinth will automatically feature certain versions that are likely to be relevant to users. The latest version of any given combination of game version and loader will be automatically featured by this system. For example, if you have a version for Fabric and Forge, both will be featured; likewise, if you have a version for 1.19.4 and 1.20.1, both will be featured.

<details>
<summary>List of major game versions, as defined by Modrinth</summary>

1.20.2, 1.20.1, 1.20, 1.19.4, 1.19.3, 1.19.2, 1.19, 1.18.2, 1.17.1, 1.16.5, 1.16.1, 1.15.2, 1.14.4, 1.13.2, 1.12.2, 1.11.2, 1.10.2, 1.9.4, 1.8.9, 1.7.10, 1.6.4, 1.5.2, 1.4.7, 1.3.2, 1.2.5, 1.1, b1.7.3

This list was last updated September 23rd, 2023. If you wish to see the list of latest versions at any time, the following command can be run in a Bash terminal:  
`curl -s https://api.modrinth.com/v2/tag/game_version | jq -r '[.[] | select(.major==true) | .version] | join(", ")'`

</details>

If you have a single version that is manually featured, the auto-featuring system will not work. Thus, we do not recommend manually featuring any version. For most intents and purposes, the automatic featuring system for versions on projects is sufficient.

### What is the "Additional files" section for? {#additional-files}

Generally speaking, you should only upload one file to each version you upload - that is, the one that most people will want to download. There are certain cases where you are permitted to upload additional files:

- **Source files**: For JVM-based projects (mods and plugins), uploading a JAR file containing source code created by a build tool such as Gradle or Maven is acceptable.
- **Javadoc files**: For JVM-based projects (mods and plugins), uploading a JAR file containing [Javadoc](https://en.wikipedia.org/wiki/Javadoc) is acceptable.
- **Resource packs associated with a data pack**: For data packs, it is acceptable to upload a resource pack as an additional file. Just make sure you select the "Required resource pack" or "Optional resource pack" file type as appropriate.
- **Configuration templates**: Any default configuration file(s) that cannot be included in the base file can be uploaded as an additional file.

Outside of these cases, the "Additional files" section should rarely, if ever, be used. Separate files supporting additional loaders or game versions should be uploaded as separate versions on a single project. It may be appropriate to create a separate project for entirely different variations of a given project.

### How should I format my version numbers? {#version-numbers}

Generally speaking, we recommend that version numbers use a consistent versioning system similar to [Semantic Versioning (SemVer)](https://www.geeksforgeeks.org/introduction-semantic-versioning). That is, a format of `MAJOR.MINOR.PATCH`, where `MAJOR` represents an incremental number for major changes, `MINOR` for smaller changes, and `PATCH` for small fixes. Beta and alpha releases follow a different pattern, as detailed in [the SemVer specification](https://semver.org). Many examples of this versioning system can be found across Modrinth and the broader software development world.

While SemVer is the most common approach, this is not the only way. Other approaches include:

- **[Calendar Versioning (CalVer)](https://calver.org)**: When it doesn't make much sense to differentiate between types of releases, it may make more sense to create a SemVer-formatted version based on today's date; for example, `2020.11.30`.
- **Minecraft Versioning**: Using the supported Minecraft version without the dots as your `MAJOR` version. For example, `1202.1.10` would indicate project version `1.10` for Minecraft 1.20.2.
- **[zer0ver](https://0ver.org)**: While this is meant to be more tongue-in-cheek, many projects on Modrinth use this versioning scheme in order to indicate a sense of "never being completely finished".
- **Incremental versioning**: While not recommended, it is certainly possible to simply have a version number that is incremented each time a new version is released. For example, your first version would be version `1`, the next `2`, the next `3`, etc.

[Discord]: https://discord.modrinth.com