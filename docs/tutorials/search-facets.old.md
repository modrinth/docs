---
title: Using search facets
---

# Using search facets
To filter projects while searching using the API, you'll use facets. Using facets mostly follows the [formatting documented by MeiliSearch.](https://docs.meilisearch.com/guides/advanced_guides/filtering.html) The only difference is that single elements are represented with an array of one element.

## Available facets
- `"project_type:{type}"`  
  Where type is a valid project type, like `mod` or `modpack`
- `"categories:{category-name}"`  
  Where category name is one of `worldgen`, `technology`, `food`, `magic`, `storage`, `library`, `adventure`, `utility`, `decoration`, `misc`, `equipment`, `cursed`, `fabric`, or `forge`
- `"versions:{version}"`  
  Where version is a valid Minecraft version, like `1.16.3` or `20w08a`
- `"license:{license}"`  
  Where license is a valid license id, like `mit` or `custom`
- `"client_side:{side}"`  
  Where side is `required`, `optional` or `unsupported`
- `"server_side:{side}"`  
  Where side is `required`, `optional` or `unsupported`
- `"host:{host}"`  
  Deprecated, and no longer used. Kept for backwards compat

## Logical operators
Using a double dimensional array allows you to use logical operators.
- Inner arrays elements are connected by an OR operator
  - `[["versions:1.16.5", "versions:1.17.1"]]` translates to "projects that support either 1.16.5 OR 1.17.1"
- Outer arrays elements are connected by an AND operator
  - `[["versions:1.16.5"], ["project_type:modpack"]]` translates to "projects that support 1.16.5 AND are modpacks"

## Examples
#### Search for server-side only projects
```http
GET https://api.modrinth.com/v2/search?facets=[["client_side:optional","client_side:unsupported"],["server_side:optional","server_side:required"]]
{
 "hits": [
   { ... }
 ],
  "offset": 0,
  "limit": 10,
  "total_hits": 0
}
```

#### Search for Fabric mods with Minecraft version 1.15.2, 1.16.5, or 1.17.1
```http
GET https://api.modrinth.com/v2/search?facets=[["categories:fabric"],["versions:1.15.2","versions:1.16.5","versions:1.17.1"],["project_type:mod"]]
{
 "hits": [
   { ... }
 ],
  "offset": 0,
  "limit": 10,
  "total_hits": 0
}
```

#### Search for Forge and Fabric modpacks with the LGPL license
```http
GET https://api.modrinth.com/v2/search?facets=	[["categories:forge"],["license:lgpl"],["categories:fabric"],["project_type:modpack"]]
{
 "hits": [
   { ... }
 ],
  "offset": 0,
  "limit": 10,
  "total_hits": 0
}
```