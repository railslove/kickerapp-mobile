import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
type Props = {}

class MatchesView extends Component<Props> {
  static navigationOptions = {
    tabBarLabel: 'Matches'
  }
  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Text>MATCHES</Text>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = {
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default MatchesView
