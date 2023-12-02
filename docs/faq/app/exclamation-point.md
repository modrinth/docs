# Why do I crash when I put an exclamation point in my instance name?

When attempting to launch a Fabric modded instance, users may encounter a crash with the error message `Uncaught exception in thread 'main' java.lang.RuntimeException: error remapping game jars.` This issue can be caused by an exclamation point (!) in the instance name.

To resolve this issue, you must rename the folder to remove the exclamation point. Ensure you have closed the launcher before renaming the folder, because you may encounter issues if you do it while the app is open.

In the future, this bug will be fixed in the Modrinth App itself by not allowing you to put the exclamation point there in the first place. For now, however, you will need to intervene manually to fix it.
