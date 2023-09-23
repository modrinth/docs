---
sidebar_label: Modrinth App FAQ
---

# Frequently Asked Questions - Modrinth App

For questions that are not specific to the Modrinth App, please refer to the [general FAQ](index.md).

## General questions

### How do I install or create a Modrinth modpack? {#modpack-basics}

Please refer to the [Modpacks on Modrinth](../modpacks/index.md) page.

### How do I unlock or unpair an instance? {#unpair}

When you install a modpack from Modrinth, it is paired and locked to only contain the content from that modpack. By unlocking a modpack, you can add your own content. By unpairing a modpack, you remove the link between your local installation and the modpack as available on Modrinth.

To unpair and/or unlock an instance, go into the instance options, then scroll down to "Modpack" and unpair/unlock as needed.

### Why am I getting an error saying "end of file before message length reached"? {#network}

This error, or any other error along the lines of "Error fetching URL", shows an issue with your network. If your Internet connection is limited, you should lower the "Maximum concurrent downloads" setting in the "Resource management" section of the app settings.

### Why am I getting an error from Fabric saying that it cannot access intermediary? {#intermediary}

This error can show as a result of a corrupted instance installation. You can fix it by repairing the instance. Go into the instance options, then scroll down to "Instance management" and click "Repair".

### Can I run two copies of the same instance at the same time? {#duplicate-instances}

Due to restrictions with how Minecraft interacts with its files, it is not possible to run more than one copy of an instance at the same time. As a workaround, we suggest duplicating your instances. You can do this by right-clicking on the instance and clicking "Duplicate instance".

## Account-related questions

### Why am I getting an error saying my account is underage? {#underage}

Microsoft only allows external launchers to play Minecraft if they are 18+ or if they are connected to a Family group. You can change your account age in [the Microsoft account settings](https://account.microsoft.com/profile) or be added to a Family group on the [Microsoft Family Safety](https://family.microsoft.com) page.

### Why can't I join multiplayer servers? (Invalid session) {#invalid-session}

If you are getting an error along the lines of "Invalid session", you must entirely close out of the Modrinth App and any other Minecraft instances you may have open. Then, open the game again. If the issue persists, [Minecraft's authentication servers may be down](https://downdetector.com/status/minecraft/). Modrinth cannot do anything about this; you must simply wait for them to work again.

### Why am I getting an error saying I don't own Minecraft, even though I do? {#own-minecraft}

Try signing in again, and make sure you're logging in with the correct Microsoft account. If you're sure you're logging in with the correct Microsoft account, there may be something with your configuration preventing the Modrinth App from communicating with Microsoft's servers. Try disabling any VPNs, system-level ad blockers, or network-level ad blockers.

## Windows-specific questions

### Why doesn't the app boot? (Corrupted Microsoft Edge WebView2 installation) {#webview2}

The Modrinth App utilizes a specialized browser component that is native to the system it is running on. In the case of Windows, this component is the Microsoft Edge WebView2, which leverages the same technology that powers the Microsoft Edge browser.

Many users confuse it with the actual browser and mistakenly remove its files, which, unfortunately, breaks the Modrinth app. If you have made the same mistake, fear not — follow these simple steps to repair it:

1. To get started, download the [Microsoft Edge WebView2 installer](https://go.microsoft.com/fwlink/p/?LinkId=2124703) and proceed with the installation.
2. If you encounter an ‘already installed’ message, try running the installer as administrator.
3. Once the installation is complete, give the Modrinth app another go.

If the app still does not run, the issue is likely unrelated to the Edge WebView2. Please join [our Discord][Discord] and send a message in the `#app-support` channel.

### Why am I getting "out-of-memory" errors, even when I have enough memory allocated? {#32bit-java}

If you're experiencing Java memory errors when launching Minecraft 1.16.5 or older, despite having sufficient RAM, it may be due to having a 32-bit version of Java installed.

The Oracle Java 8 installer has issues where it may incorrectly detect your system as a 32-bit one and install 32-bit Java. 32-bit processes can only allocate memory within the first 4 GB of RAM due to how memory addressing works.

To resolve this issue, follow the steps below:
1. Right-click the Start button (⊞) and choose "Installed apps" in the open menu.
2. Uninstall all Java 8 versions that you can find.
3. Download and install the [64-bit version of Java 8 from Azul](https://www.azul.com/downloads/?version=java-8-lts&os=windows&architecture=x86-64-bit&package=jdk#zulu).
4. In your Modrinth app, click "Auto-detect" or manually enter the path to `bin\javaw.exe` of the newly installed Java.
5. Try launching your game now.

If you still have the same error, the problem is probably unrelated to the Java bit-ness. Please join [our Discord][Discord] and send a message in the `#app-support` channel. Check that you allocate the correct amount of RAM and provide all relevant logs and error messages.

## Mac-specific questions

### Why can't I launch the app on macOS Catalina (or older)? {#catalina}

If you are getting an error that says "Modrinth App cannot be opened because of a problem", your macOS version is not supported. The Modrinth App is unable to support macOS Catalina or older due to missing required libraries. If you are able to upgrade to macOS Big Sur or newer, please do so.

## Linux-specific questions

### Why isn't the Modrinth App packaged for my distribution? {#packaging}

For now, the only official distributions of the Modrinth App are via AppImage and Debian files. AppImage files can run on any distribution, so we generally recommend this method, even on Debian-based distributions. Community efforts are currently underway to create packages for Flatpak and Nix; otherwise, any distribution-specific packages are not official.

[Discord]: https://discord.modrinth.com