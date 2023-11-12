# Why am I getting a "IO error: Access is denied" error?

The error `I/O error: Access is denied. (os error 5)` means that you have changed the Modrinth App directory to a location that the Modrinth App does not have access to. People commonly change the app directory to `Program Files`. **Please do not do this.** The option to change the app directory is only provided for advanced users. The Modrinth App does not have access to the Program Files folder, so it will fail to read anything from there.

There are two ways you can resolve this. The first method is less destructive but takes more time. The second method is more destructive but easier.

:::danger
The Modrinth App should be closed before attempting to perform any of the steps below.
:::

## Less destructive - manually edit config to change directory

1. Go to https://jsoneditoronline.org.
2. Click "Open" and select "Open from disk" from the menu.
3. Type `%AppData%\com.modrinth.theseus\settings.json` in the bottom path field and click "Open".
4. Click "[tree]" at the top of the page.
5. Look for `loaded_config_dir` and double-click its value.
6. Type a valid directory to which you have full write access. By default, Modrinth uses `C:\Users\<YOUR WINDOWS USERNAME>\AppData\Roaming\com.modrinth.theseus`.
7. Click "Save" and then "Save to disk".
8. When prompted about name and indentation, leave everything as is and click "Save".
9. Save the file:
   - If a save dialog appears, type `%AppData%\com.modrinth.theseus\settings.json` in the bottom path field and click "Save".
   - If not, wait until the file is downloaded. Press <kbd>⊞ Win</kbd> + <kbd>R</kbd>, type `%AppData%\com.modrinth.theseus`, click "OK", and drag the file into the Explorer window that just opened.
10. If asked to replace the existing file, click "Yes".
11. Try opening the app now.

## Path of mass destruction - remove Modrinth's app directory

1. Open Explorer and navigate to `%AppData%\com.modrinth.theseus`.
2. Delete everything **except** `profiles` and `meta`.
3. Open Modrinth app again and complete onboarding as usual.
