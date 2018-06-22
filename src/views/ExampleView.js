import React from 'react'
import { SafeAreaView, View } from 'react-native'
import PlatformIcon from '../components/PlatformIcon'
export default class ExampleView extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={contentStyles.container}>
          <View style={contentStyles.block}>
            <View style={contentStyles.blockHeader}>
              <View style={contentStyles.iconContainer}>
                <PlatformIcon androidIcon='camera-alt' iosIcon='md-camera' size={26} style={contentStyles.icon} />
              </View>
            </View>
          </View>

          <View style={contentStyles.block}>
            <View style={contentStyles.blockHeader}>
              <View style={contentStyles.iconContainer}>
                <PlatformIcon androidIcon='my-location' iosIcon='md-locate' size={26} style={contentStyles.icon} />
              </View>
            </View>
          </View>

          <View style={contentStyles.block}>
            <View style={contentStyles.blockHeader}>
              <View style={contentStyles.iconContainer}>
                <PlatformIcon androidIcon='notifications' iosIcon='md-notifications' size={26} style={contentStyles.icon} />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}


const contentStyles = {
  container: {
    padding: 10
  },
  block: {
    flexDirection: 'column',
    paddingVertical: 10
  },
  iconContainer: {
    width: 40
  },
  icon: {
    width: 26,
    height: 26,
    textAlign: 'center'
  }
}
