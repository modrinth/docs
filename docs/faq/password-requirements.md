---
sidebar_class_name: hidden
---

# What makes a secure Modrinth account password?

Modrinth uses [zxcvbn](https://lowe.github.io/tryzxcvbn/) to judge password strength. Any password with a score lower than 3 out of 4 will be rejected. Besides the zxcvbn requirements, passwords must have a minimum length of 8 and a maximum length of 256. We do not require you to add numbers or symbols, though this is highly recommended. Any Unicode character is allowed — even emoji! [Just make sure you have a way to type them.](https://www.youtube.com/watch?v=3AtBE9BOvvk)

We recommend [Bitwarden](https://bitwarden.com) for generating and storing passwords. Any password you are able to remember is unlikely to have optimal security.
