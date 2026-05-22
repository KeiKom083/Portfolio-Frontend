import type { CodegenConfig } from "@graphql-codegen/cli";
import { ENV } from "./constants/env";

const config: CodegenConfig = {
  schema: ENV.GRAPHQL_ENDPOINT,
  documents: ["./**/*.tsx", "./**/*.ts", "!./gql/**/*"],
  generates: {
    "./gql/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false,
      },
      config: {
        strictScalars: true,
        scalars: {
          DateTime: "string",
          ID: "string",
          Date: "string",
          JSON: "Record<string, unknown>",
        },
        useTypeImports: true,
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
