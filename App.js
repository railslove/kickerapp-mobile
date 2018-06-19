import React, { Component } from 'react'
import Root from './src/Root'

type Props = {}

export default class App extends Component<Props> {
  render() {
    return <Root />
  }
}

console.ignoredYellowBox = [
  'Remote debugger',
  'Warning: isMounted(...) is deprecated'
]
