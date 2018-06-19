import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import ExampleComponent from '../components/ExampleComponent'
type Props = {}

class HomeView extends Component<Props> {
  static navigationOptions = {
    tabBarLabel: 'Home'
  }
  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Text>HOME</Text>
          <ExampleComponent />
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

export default HomeView
