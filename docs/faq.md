---
sidebar_position: 0
---

# Frequently Asked Questions

For questions specific to the Modrinth App or website, please refer to the [app FAQ](#app) and the [website FAQ](#website).

## General

### When will (x) feature get released? When will support for other games/Bedrock be added? {#etas}

Modrinth does not provide any public <abbr title="Estimated Time of Arrival">ETAs</abbr> for new features or for bug fixes. You can take a look at [our roadmap](roadmap.md) to see what features we're working on right now as well as what is yet to come.

### Why can't I log into my account? {#account-locked}

If your account was created on or before August 5th, 2023, your account was created using GitHub. Attempting to reset your password or log in through any other service will not work.

If you still cannot log into your account after this, please email support@modrinth.com.

## App

### Why doesn't the app boot on Windows? (Corrupted Microsoft Edge WebView2 installation) {#webview2}

The Modrinth App utilizes a specialized browser component that is native to the system it is running on. In the case of Windows, this component is the Microsoft Edge WebView2, which leverages the same technology that powers the Microsoft Edge browser.

Many users confuse it with the actual browser and mistakenly remove its files, which, unfortunately, breaks the Modrinth app. If you have made the same mistake, fear not — follow these simple steps to repair it:

1. To get started, download the [Microsoft Edge WebView2 installer](https://go.microsoft.com/fwlink/p/?LinkId=2124703) and proceed with the installation.
2. If you encounter an ‘already installed’ message, try running the installer as administrator.
3. Once the installation is complete, give the Modrinth app another go.

If the app still does not run, the issue is likely unrelated to the Edge WebView2. Please join [our Discord][Discord] and send a message in the `#app-support` channel.

### Why am I getting "out-of-memory" errors on Windows, even when I have enough memory allocated? {#32bit-java}

If you're experiencing Java memory errors when launching Minecraft 1.16.5 or older, despite having sufficient RAM, it may be due to having a 32-bit version of Java installed.

The Oracle Java 8 installer has issues where it may incorrectly detect your system as a 32-bit one and install 32-bit Java. 32-bit processes can only allocate memory within the first 4 GB of RAM due to how memory addressing works.

To resolve this issue, follow the steps below:
1. Right-click the Start button (⊞) and choose “Installed apps” in the open menu.
2. Uninstall all Java 8 versions that you can find.
3. Download and install the 64-bit version of Java 8 from Azul.
4. In your Modrinth app, click “Auto-detect” or manually enter the path to bin\javaw.exe of the newly installed Java.
5. Try launching your game now.

If you still have the same error, the problem is probably unrelated to the Java bit-ness. Please join [our Discord][Discord] and send a message in the `#app-support` channel. Check that you allocate the correct amount of RAM and provide all relevant logs and error messages.

## Website

### How can I see the dependents/reverse-dependencies of a project? {#dependents}

Modrinth does not currently have a way to see the dependents of a project — only the dependencies. Pending resolution of some performance issues, this feature is coming soon.

### How long will my submitted project be "under review" for? {#review-times}

Modrinth's team of content moderators work hard to review all submitted projects. Typically, you can expect a new project to be reviewed within 24 to 48 hours. Please keep in mind that larger projects, especially modpacks, may require more time to review. Certain holidays or events may also lead to delays depending on moderator availability.

Thanks to the way that Modrinth's queue system works, it is not possible for something to be "lost in the queue". If your project displays as "Under review", it will be reviewed.

### How does the "featured versions" system work? {#featured-versions}

If you do not manually feature any versions on your project, Modrinth will automatically feature certain versions that are likely to be relevant to users. The latest version of any given combination of game version and mod loader will be automatically featured by this system. For example, if you have a version for Fabric and Forge, both will be featured; likewise, if you have a version for 1.19.4 and 1.20.1, both will be featured.

<details>
<summary>List of major game versions, as defined by Modrinth</summary>

1.20.1, 1.20, 1.19.4, 1.19.3, 1.19.2, 1.19, 1.18.2, 1.17.1, 1.16.5, 1.16.1, 1.15.2, 1.14.4, 1.13.2, 1.12.2, 1.11.2, 1.10.2, 1.9.4, 1.8.9, 1.7.10, 1.6.4, 1.5.2, 1.4.7, 1.3.2, 1.2.5, 1.1, b1.7.3

This list was last updated September 2nd, 2023. If you wish to see the list of latest versions at any time, the following command can be run in a Bash terminal:  
`curl -s https://api.modrinth.com/v2/tag/game_version | jq -r '[.[] | select(.major==true) | .version] | join(", ")'`

</details>

If you have a single version that is manually featured, the auto-featuring system will not work. Thus, we do not recommend manually featuring any version. For most intents and purposes, the automatic featuring system for versions on projects is sufficient.

[Discord]: https://discord.gg/modrinth