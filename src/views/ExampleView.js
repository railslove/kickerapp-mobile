import React from 'react'
import { View } from 'react-native'
import PlatformIcon from '../components/PlatformIcon'
export default class ExampleView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <PlatformIcon androidIcon='notifications' iosIcon='md-notifications' size={45} style={styles.icon} />
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
