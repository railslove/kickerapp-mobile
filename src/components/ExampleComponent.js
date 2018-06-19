import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
type Props = {}

class ExampleComponent extends Component<Props> {

  handleStateChange () {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text></Text>
        <Button title='Change state' onPress={() => {this.handleStateChange()}} />
      </View>
    )
  }
}

const styles = {
  container: {
    justifyContent: 'center',
    margin: 20,
    padding: 10,
    backgroundColor: '#EEEEEE'
  }
}


export default ExampleComponent
