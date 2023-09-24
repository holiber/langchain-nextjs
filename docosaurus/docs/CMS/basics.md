# CMS Basics

Directus offers GraphQL API to manage the data in the database.

## Authentication

By default, all data in the system is off-limits for unauthenticated users. To gain access to protected data, you must include an access token with every request, or configure permissions for the public role.

## System data in GraphQL

Due to restrictions in GraphQL itself, it's impossible to properly scope/namespace system functionality from regular data access. In order to prevent any naming conflicts between user-created and system data, we've scoped the access of the two into separate endpoints for user and system data respectively: /graphql and /graphql/system

