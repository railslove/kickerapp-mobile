import React, { Component } from 'react'
import { Text, View } from 'react-native'

type Props = {}

class NewMatchView extends Component<Props> {
  static navigationOptions = {
    tabBarLabel: 'New Match'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>NEW MATCH</Text>
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

export default NewMatchView
