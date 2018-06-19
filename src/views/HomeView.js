import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ExampleComponent from '../components/ExampleComponent'
type Props = {}

class HomeView extends Component<Props> {
  static navigationOptions = {
    tabBarLabel: 'Home'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>HOME</Text>
        <ExampleComponent />
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

export default HomeView
