import {DynamicStructuredTool } from "langchain/tools";
import {z} from "zod";
import {request, gql, GraphQLClient} from 'graphql-request';

export function createGraphqlTool() {
    return new DynamicStructuredTool({
        name: "GraphqlQuery",
        description:
            "Call this to execute a graphql query.",
        schema: z.object({
            apiUrl: z.string().describe("Graphql API url"),
            query: z.string().describe("Graphql query string"),
            apiToken: z.string().optional().describe("Graphql API token"),
        }),
        func: async ({ apiUrl, apiToken, query }) => {
            const requestConfig: Record<string, any> = { fetch: fetch };
            if (apiToken) {
                requestConfig.headers = {
                    authorization: `Bearer ${apiToken}`,
                };
            }

            const graphQLClient = new GraphQLClient(apiUrl, requestConfig)
            try {
                const data = await graphQLClient.request(query);
                return JSON.stringify(data);
            } catch (error) {
                console.error("Failed to fetch graphql:", error);
                return error.message;
            }
        },
    })
}
