import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import PlatformIcon from '../components/PlatformIcon'
class ExampleView extends React.Component {

  preformLoad () {
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => {this.preformLoad()}}>
            <PlatformIcon androidIcon='notifications' iosIcon='md-notifications' size={45} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  iconContainer: {
    alignSelf: 'center'
  },
  icon: {
    width: 45,
    height: 45,
    textAlign: 'center'
  }
}

// Apollo
import allPLayers from '../apollo/allPlayers'

export default allPLayers(ExampleView, {id: 'railslove-2018'})
