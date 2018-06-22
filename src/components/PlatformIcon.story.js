import React from 'react'
import {View} from 'react-native'
import PlatformIcon from './PlatformIcon'
class PlatformIconStory extends React.Component {
  constructor(props) {
    super(props)
    this.onLeaugeSelect = this.onLeaugeSelect.bind(this)
  }

  onLeaugeSelect (leagueSlug) {
    alert(leagueSlug)
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.blockHeader}>
          <View style={styles.iconContainer}>
            <PlatformIcon androidIcon='camera-alt' iosIcon='md-camera' size={50} style={styles.icon} />
          </View>
        </View>

        <View style={styles.blockHeader}>
          <View style={styles.iconContainer}>
            <PlatformIcon androidIcon='my-location' iosIcon='md-locate' size={50} style={styles.icon} />
          </View>
        </View>

        <View style={styles.blockHeader}>
          <View style={styles.iconContainer}>
            <PlatformIcon androidIcon='notifications' iosIcon='md-notifications' size={50} style={styles.icon} />
          </View>
        </View>
      </View>
    )
  }
}



const styles = {
  container: {
    padding: 10,
    justifyContent: 'center'
  },
  icon: {
    width: 50,
    height: 50,
    alignSelf: 'center'
  }
}

export default PlatformIconStory
