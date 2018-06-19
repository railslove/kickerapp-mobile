import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Root from './src/Root'
import store from './src/redux/store'
type Props = {}

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}

console.ignoredYellowBox = [
  'Remote debugger',
  'Warning: isMounted(...) is deprecated'
]
