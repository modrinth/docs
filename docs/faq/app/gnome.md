# Why doesn't the app boot on Linux? (Using GNOME Wayland)

If you get an error like `Settings schema 'org.gnome.settings-daemon.plugins.xsettings' does not contain a key named 'antialiasing' Trace/breakpoint trap (core dumped)`, you are using the GNOME desktop environment with a Wayland compositor. This combination causes issues for the Modrinth App.

To get around this, you need to specify the `GDK_BACKEND` environment variable to `x11`. In other words:

```sh
$ GDK_BACKEND=x11 ~/path/to/Modrinth-App.AppImage
```

This issue is being tracked as [#941](https://github.com/modrinth/theseus/issues/941).