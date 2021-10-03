---
sidebar_position: 1
id: getting-started
---

# Démarrage

Bienvenue sur la documentation pour les développeurs de Modrinth !

Ce tutoriel vous expliquera les bases de l'API Modrinth.

## Obtenir un environnement de test fonctionnel

Cette documentation ne fournit pas (encore) un moyen de tester facilement notre API.
Afin de faciliter les tests, nous recommandons les outils suivants :

- [ReqBIN](https://reqbin.com/), un outil de test d'API REST en ligne.
- [Postman](https://www.postman.com/downloads/), la référence principale pour notre API, mais elle n'est pas open source, et vous demande votre login trop fréquemment.
- [Insomnia](https://insomnia.rest/), une autre référence, cette fois opensource, et qui ne demande pas vos identifiants.

Une fois que vous avez un client fonctionnel, vous pouvez vérifier qu'il fonctionne en envoyant une requête **GET** à l'adresse suivante :

```json title="GET https://api.modrinth.com/"
{
  "name": "modrinth-labrinth",
  "version": "0.1.0",
  "documentation": "https://modrinth.com/documentation",
  "about": "Welcome traveler!"
}
```

Si vous avez obtenu une réponse semblable ou très proche de celle ci-dessus, vous pouvez utiliser l'API Modrinth !
Si vous rencontrez des problèmes, n'hésitez pas à nous contacter dans notre canal de support de notre discord. Nous serons heureux de vous aider.

## Votre première requête utile

Commençons par obtenir plus d'informations sur un mod Minecraft, par exemple le mod [Gravestones](https://modrinth.com/mod/gravestones).

Vous pouvez obtenir des informations sur ce mod en effectuant la requête suivante :

```json title="GET https://api.modrinth.com/v2/project/gravestones"
{
  "id": "ssUbhMkL",
  "slug": "gravestones",
  "project_type": "mod",
  "team": "ggl32fu7",
  "title": "Gravestones",
  "description": "A gravestones mod for fabric with tons of config options, an API, and more!",
  "body": "# Gravestones\nA highly configurable, easy to use, and elegant Gravestones mod for Fabric MC. It even has an easy to use API for developers!\n## Screenshots\n\n![Screenshot 1](https://i.imgur.com/mOFGTal.png \"Configuration\")",
  "published": "2020-10-21T22:19:51.707450Z",
  "updated": "2021-03-08T21:02:22.062991Z",
  "status": "approved",
  ...
}
```

Parlons du comment et du pourquoi de cette demande :

### Méthode
Comme beaucoup d'entre vous le savent peut-être déjà, la spécification HTTP comporte des mots d'action spécifiques, appelés méthodes, qui indiquent à l'API Modrinth ce que vous voulez faire avec nos données.
Dans les applications, nous indiquerons toujours à l'API Modrinth quelle action utiliser.
Dans l'exemple ci-dessus, nous avons utilisé la méthode `GET`, qui indique à l'API que nous voulons *obtenir* des informations de Modrinth.

### URL de base
L'URL de base que vous utilisez sera presque toujours :
```
https://api.modrinth.org/{version}/
```
:::note

La version 1 de l'API est la seule exception à cette règle, car elle était la suivante : `https://api.modrinth.com/api/v1/`

Notez la partie entre la version et le domaine


:::
Si vous vous sentez particulièrement aventureux, vous pouvez utiliser l'API de mise à disposition, qui est en cours de développement (et dispose de toutes les nouvelles fonctionnalités), mais qui ne comprend que des mods de test. L'URL de base de l'API de mise à disposition est la suivante :
```
https://staging-api.modrinth.com/{version}/
```
### Projets

Dans modrinth, les projets sont tout type d'élément que Modrinth met à la disposition des utilisateurs pour qu'ils le téléchargent (actuellement, cela ne comprend que les modpacks et les mods).

Les projets ont un identifiant unique, généralement du charabia, comme `tsi4hUoN`, ainsi qu'une autre caractéristique, appelée *slug*.

Les slugs sont un identifiant unique que les auteurs de mods peuvent modifier.

Par exemple, le mod gravestones a le slug `gravestones`, et l'id de `ssUbhMkL`.

:::caution

Alors que les identifiants uniques sont constants, **les slugs peuvent changer à tout moment** !

Si vous voulez stocker quelque chose à long terme, il est recommandé d'utiliser l'ID unique.

:::

Pour reprendre l'exemple du mod gravestones , si nous voulons être sûrs d'accéder *toujours* au mod gravestones, même si l'auteur veut changer le slug, nous pouvons modifier notre requête comme suit
```json title="GET https://api.modrinth.com/v2/project/ssUbhMkL"
{
  "id": "ssUbhMkL",
  "slug": "gravestones",
  "project_type": "mod",
  "team": "ggl32fu7",
  "title": "Gravestones",
  "description": "A gravestones mod for fabric with tons of config options, an API, and more!",
  "body": "# Gravestones\nA highly configurable, easy to use, and elegant Gravestones mod for Fabric MC. It even has an easy to use API for developers!\n## Screenshots\n\n![Screenshot 1](https://i.imgur.com/mOFGTal.png \"Configuration\")",
  "published": "2020-10-21T22:19:51.707450Z",
  "updated": "2021-03-08T21:02:22.062991Z",
  "status": "approved",
  ...
}
```
## Conclusion

Tu l'as fait !
J'espère que vous comprenez mieux le fonctionnement de l'API Modrinth et que vous êtes maintenant prêt à vous attaquer au reste de la documentation :D