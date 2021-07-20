import { ApolloClient , InMemoryCache, HttpLink} from '@apollo/client'
import fetch from 'cross-fetch';
const GRAPHQL_SERVER_URL = 'http://localhost:5000/graphql';


export const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: GRAPHQL_SERVER_URL, fetch }),
  cache : new InMemoryCache()
})