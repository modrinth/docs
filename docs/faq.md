---
sidebar_position: 1
---

# Frequently Asked Questions

## General

For questions specific to the Modrinth App or website, please refer to the [app FAQ](#app) and the [website FAQ](#website).

### When will (x) feature get released? When will support for other games/Bedrock be added? {#etas}

Modrinth does not provide any public <abbr title="Estimated Time of Arrival">ETAs</abbr> for new features or for bug fixes. You can take a look at [our roadmap](https://roadmap.modrinth.com) to see what features we're working on right now as well as what is yet to come. The roadmap is not in any particular order — one item will not be right after the other.

### Why can't I log into my account? {#account-locked}

If your account was created on or before August 5th, 2023, your account was created using GitHub. Attempting to reset your password or log in through any other service will not work.

If you still cannot log into your account after this, please join [our Discord][Discord] and send a message to the `ModrinthMail#3547` bot.

## App

### Why doesn't the app boot on Windows? (Corrupted Microsoft Edge WebView2 installation) {#webview2}

The Modrinth App utilizes a specialized browser component that is native to the system it is running on. In the case of Windows, this component is the Microsoft Edge WebView2, which leverages the same technology that powers the Microsoft Edge browser.

Many users confuse it with the actual browser and mistakenly remove its files, which, unfortunately, breaks the Modrinth app. If you have made the same mistake, fear not — follow these simple steps to repair it:

1. To get started, download the [Microsoft Edge WebView2 installer](https://go.microsoft.com/fwlink/p/?LinkId=2124703) and proceed with the installation.
2. If you encounter an ‘already installed’ message, try running the installer as administrator.
3. Once the installation is complete, give the Modrinth app another go.

If the app still does not run, the issue is likely unrelated to the Edge WebView2. Please join [our Discord][Discord] and send a message in the `#app-support` channel.

## Website

### How can I see the dependents/reverse-dependencies of a project? {#dependents}

Modrinth does not currently have a way to see the dependents of a project — only the dependencies. Pending resolution of some performance issues, this feature is coming soon.

### How long will my submitted project be "under review" for? {#review-times}

Modrinth's team of content moderators work hard to review all submitted projects, but keep in mind that larger projects, especially modpacks, may require more time to review.

Typically, you can expect a new project to be reviewed within 24 to 48 hours. **However, due to a high volume of new projects, reviews are currently experiencing extended delays, much greater than usual. Many projects may be under review for a week or more.** Please understand that we are working to fix this problem as soon as possible. Our sincerest apologies for the inconvenience!

Thanks to the way that Modrinth's queue system works, it is not possible for something to be "lost in the queue". If your project displays as "Under review", it will be reviewed.

[Discord]: https://discord.gg/modrinth