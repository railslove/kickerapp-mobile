import { ApolloClient } from 'apollo-client'

import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = new HttpLink({ uri: 'https://www.kicker.cool/graphql' })
// const httpLink = new HttpLink({ uri: 'http://localhost:3003/graphql' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default client
