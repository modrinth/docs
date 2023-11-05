# Why is my modded game instance crashing?

There are many possible reasons for your game crashing. While some crashes may be caused by the Modrinth App itself, such as in the case of [certain unsupported versions](unsupported.md), this is extremely rare.

## Step 1: Updated mods

First, make sure you're using the latest version of each mod you're using. You can update very easily by clicking the "Update all" button in the top-right corner of the "Mods" section of an instance. If it's been a while since you last updated, it might take a while to download all new updates.

Next, double check to ensure that all of your mods support the loader and game version you're using. For example, mods for 1.20.1 may not work on 1.20.2.

## Step 2: Read crash logs

Reading the log or crash report can be incredibly important in diagnosing a crash. The most common crash that can be resolved by reading logs are mods that have a failure in using "Mixin", a library very commonly used in Fabric and Quilt mods, and occasionally in Forge or NeoForge mods. If your crash log says `Caused by: org.spongepowered.asm.mixin` anywhere in it, it is likely this category of crash. If you search for `Mixin apply for mod` or `.mixins.json`, you can often find the ID of a mod that's misbehaving. For example, finding `memoryleakfix.mixins.json` in a crash log may indicate an issue with [Memory Leak Fix](https://modrinth.com/mod/memoryleakfix).

## Step 3: Binary search method

When all else fails, the **binary search method** (also "divide and conquer") is a tried-and-true method. If you have many mods, it might seem impossible to figure out which one might be causing the crash. The binary search method allows you to determine the problematic mod very quickly, without having to disable and test mods one-by-one. Here's how it works:

1. Start by disabling half of your mods. Run the game to see if the crash still happens.
2. Does the issue still exist?
    <br />a. If YES: Repeat from step 1 with the mods you currently have enabled.
    <br />b. If NO: Disable all mods you currently have enabled, and enable all mods which were previously disabled.
3. Repeat this process until the problematic mod(s) have been found. Check for updates, conflicts, or incompatibilities.

Following this process, you should be able to find the problem, regardless of your loader or game version. If the game still crashes even without any mods enabled, it may be caused by the loader itself or by the Modrinth App. Check if any FAQs below, such as [broken intermediary (Fabric/Quilt)](intermediary.md), [out-of-memory errors](32bit-java.md), or [old Minecraft versions](unsupported.md) solve your issues. If your game still crashes and you suspect the crash is caused by the Modrinth App, please join us in the `#app-support` channel of our [Discord](https://discord.modrinth.com). We are unable to assist with crashes caused by a loader.
