import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native'

type Props = {}

export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Text>Kickerapp</Text>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = {
  wrapper: {
    flex : 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}