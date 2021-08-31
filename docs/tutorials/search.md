---
title: Search API
id: api_search
---

Welcome!

This tutorial will explain how search works, first in a nutshell, then in details.

After this tutorial, you should be able to make your own searches using our api!

## High level view of the search API call

The API search is available at the following route: `{API_BASE}/search` (if you are thinking at what {API_BASE} means, [look here](../details/domains.md)

## Details

For the future examples, let's say I want to search a mod about monkes, that is on Fabric 1.17, and it is a great adventure mod ;)

### Query

The query is the text you want to search by.
In our example, it is `Monke`

### Index

Index is the way we sort elements out of our search, if we have more than one.
Modrinth supports the following indexes:
- `relevance` => This sorts by the element that our system is the best match for your query, at least based on our query.
- `downloads` => This sorts all matches by the order of downloads.
In our example, the mod `Monke` will be ranked lower than `Monkes: The lost island` if the second has more downloads.
- `follows` => The same principle as `downloads`, but sorted by the number of followers of this mod.
- `newest` => Sorts by the newest mod created. This is based on the time of initial creation of the mod.
- `updated` => Sorts by the newest mod updated. This is based on the time of the latest update of the mod (creation of a new version).

### Limit
The maximum number of matches that will be returned in the API call.
If it's higher than 100, it will return an error.

### Offset
Offset is the number of matches that you skip from the beginning.
There's no limit, and if used with `limit`, you are easily able to make paging in any customized way you want.

### Filters
Filters are a more powerful version of Query for search.
More documentation on how to use this query parameters is underway.

### Facets
Facets may be the most difficult thing to understand in search, but is necessary for the majority of searches.

#### Facet types
A facet can be of multiple types:
- `categories` => A loader or a general category. A way to get a list of all categories is available [here](statics.md)
- `versions` => A minecraft version. A way to get a list of all minecraft versions is available [here](statics.md)
- `license` => A licence for projects (LGPL, WTFPL...) A way to get a list of all licenses is available [here](statics.md)
- `project_type` => A project type, the only supported values currently are `modpack` and `mod`

Now you have all the facets types, to get a string representing both the type and the content, you have to use the following:
```
{type}:{value}
```
Where type is one of the facet types defined above.

#### Operators

In search, the main operators are `AND` and `OR`. The others are not supported as of now.

First of all, all facets search must be included in a javascript array.

##### OR
All elements in a single array **after the first one** are considered in a single OR block.
For example, the search `[["versions:1.16.5", "versions:1.17.1"]]` translates to `Projects that supports 1.16.5 OR 1.17.1`

##### AND
All arrays in the top-level one are considered in a single AND block.
For example, the search `[["versions:1.16.5"], ["project_type:modpack"]]` translates to `Projects that support 1.16.5 AND are modpacks`


If you want to learn more about facets, the documentation on them is available [here](https://docs.meilisearch.com/reference/features/faceted_search.html#using-facets)

