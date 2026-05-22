import { GraphQLClient } from "graphql-request";
import { ENV } from "../../constants/env";

export const graphqlClient = new GraphQLClient(ENV.GRAPHQL_ENDPOINT, {
  headers: {
    "Content-Type": "application/json",
    // 認証などが必要になった場合はここに追加
  },
});
