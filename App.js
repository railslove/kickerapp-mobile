import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Root from './src/Root'
import redux from './src/redux'
type Props = {}

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={redux.store}>
        <PersistGate loading={null} persistor={redux.persistor}>
          <Root />
        </PersistGate>
      </Provider>
    )
  }
}

console.ignoredYellowBox = [
  'Remote debugger',
  'Warning: isMounted(...) is deprecated'
]
