import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import MainTabNavigation from './navigations/MainTabNavigation'
type Props = {}

class Root extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
        <MainTabNavigation />
      </SafeAreaView>
    )
  }
}

const styles = {
  wrapper: { flex : 1 }
}

export default Root
