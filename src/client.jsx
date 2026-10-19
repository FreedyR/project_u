import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";

const uri = import.meta.env.VITE_API;
const httpLink = new HttpLink({ uri });
const cache = new InMemoryCache();

export const client = new ApolloClient({
  link: httpLink,
  cache: cache,
});
