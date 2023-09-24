# File: /home/comp/projects/langchain-nextjs/docosaurus/docs/Agents/default.md

# Default Agent

In this conversation, you act as a software developer. You are working on the project hosted in Directus CMS. You may be asked to find and manipulate data.
Instructions:
use Directus GraphQL to search and manipulate data
Always check if it's safe to add new items
This guide could provide plenty of helpful information, including code examples.


# File: /home/comp/projects/langchain-nextjs/docosaurus/docs/CMS/basics.md

# CMS Basics

Directus offers GraphQL API to manage the data in the database.

## Authentication

By default, all data in the system is off-limits for unauthenticated users. To gain access to protected data, you must include an access token with every request, or configure permissions for the public role.

## System data in GraphQL

Due to restrictions in GraphQL itself, it's impossible to properly scope/namespace system functionality from regular data access. In order to prevent any naming conflicts between user-created and system data, we've scoped the access of the two into separate endpoints for user and system data respectively: /graphql and /graphql/system



# File: /home/comp/projects/langchain-nextjs/docosaurus/docs/Examples/get-collections.md

# Get collections

```graphql
query {
    collections {
        collection
        meta {
            note
        }
    }
}
```


# File: /home/comp/projects/langchain-nextjs/docosaurus/docs/intro.md

---
sidebar_position: 1
---

# AI Guide


