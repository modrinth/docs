---
title: Search
id: api_search
---

Searching projects is a common use case of the Modrinth API, but can be a difficult topic understand. 
By the end of this tutorial, you should have a high level understanding of how to search for projects using the API!

## Route

The search API is available at the following route: `{API_BASE}/search` (if you don't know what {API_BASE} means [see this page](../details/domains.md)

## Details

In these examples, we'll be searching for an adventure mod about monkeys on Fabric 1.17.

### Query
Query Parameter: `query`

The query is the text you want to search by.
In this example, the query would be `Monke`. You can view an example of what the API returns to this 
[here](https://staging-api.modrinth.com/v2/search?query=Monke)!

### Sorting
Query Parameter: `index`

The index field decides the way the results will be sorted in the response.
Modrinth supports the following indexes:
- `relevance` => This sorts by the element that our system is the best match for your query, at least based on our query.
- `downloads` => This sorts all matches by the order of downloads.
- `follows` => The same principle as `downloads`, but sorted by the number of followers of this mod.
- `newest` => Sorts by the newest mod created. This is based on the time of initial creation of the mod.
- `updated` => Sorts by the newest mod updated. This is based on the time of the latest update of the mod (creation of a new version).

### Limiting results
Query Parameter: `limit`

The maximum number of results that will be returned in the response. The minimum limit is 5, and the maximum limit is 100. 

### Handling pagination
Query Parameter: `offset`

The offset field allows for projects to be skipped from the result. When combined with the limit parameter, the offset field can be used to create powerful pagination.

### Facets
Facets are an essential concept for understanding how to filter out results.

#### Facet types
A facet can be of multiple types:
- `categories` => The loader or category to filter the results from
- `versions` => The minecraft version to filter the results from
- `license` => The license ID to filter the results from
- `project_type` => The project type to filter the results from

Now you have all the facets types, to get a string representing both the type and the content, you have to use the following format:
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

#### Example Query
Here's an example query on the staging API if you are confused:
https://staging-api.modrinth.com/v2/search?limit=20&index=relevance&facets=[["categories:adventure"],["categories:fabric"],["versions:1.17.1"]]

### Filters
Filters are an alternative way to facets to filter out results. Filters are slower than facets.

The syntax for filters can be found [here](https://docs.meilisearch.com/reference/features/filtering_and_faceted_search.html#using-filters).
