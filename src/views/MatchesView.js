import React, { Component } from 'react'
import { Text, View } from 'react-native'

type Props = {}

class MatchesView extends Component<Props> {
  static navigationOptions = {
    tabBarLabel: 'Matches'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>MATCHES</Text>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default MatchesView
