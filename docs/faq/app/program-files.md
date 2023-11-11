# Why am I getting a "IO error: Access is denied" error?

The error `I/O error: Access is denied. (os error 5)` means that you have changed the Modrinth App directory to a location that the Modrinth App does not have access to. People commonly change the app directory to `Program Files`. **Please do not do this.** The option to change the app directory is only provided for advanced users. The Modrinth App does not have access to the Program Files folder, so it will fail to read anything from there.

There are two ways you can resolve this. The first method is less destructive but takes more time. The second method is more destructive but easier.

:::danger
The Modrinth App should be closed before attempting to perform any of the steps below.
:::

## Less destructive - manually edit config to change directory

1. Open https://jsoneditoronline.org.
2. Click "Open" -> "Open from disk".
3. In path field at the bottom, type `%AppData%\com.modrinth.theseus\settings.json` and click Open.
4. In the top click `[tree]`.
5. Find `loaded_config_dir` and change its value by double-clicking to any valid directory that you have full write access to. By default, Modrinth uses `C:\Users\<YOUR WINDOWS USERNAME>\AppData\Roaming\com.modrinth.theseus`.
6. Click "Save" -> "Save to disk".
7. When asked about name and indentation, keep everything as is, and click Save.
8. Type `%AppData%\com.modrinth.theseus\settings.json` in the path field at the bottom again, and click Save.
9. When asked whether to override the existing file, click Yes.
10. Try starting the app now.

## Path of mass destruction - remove Modrinth's app directory

1. Open Explorer and navigate to `%AppData%\com.modrinth.theseus`.
2. Delete everything **except** `profiles` and `meta`.
3. Launch Modrinth app again and complete onboarding as usual.
