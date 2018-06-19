import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import redux from './src/redux'

import RootView from './src/RootView'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = new HttpLink({ uri: 'https://www.kicker.cool/graphql' })
// const httpLink = new HttpLink({ uri: 'http://localhost:3003/graphql' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

type Props = {}

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={redux.store}>
        <ApolloProvider client={client}>
          <PersistGate loading={null} persistor={redux.persistor}>
            <RootView />
          </PersistGate>
        </ApolloProvider>
      </Provider>
    )
  }
}

console.ignoredYellowBox = [
  'Remote debugger',
  'Warning: isMounted(...) is deprecated'
]
