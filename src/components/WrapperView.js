import React from 'react'
import { ImageBackground, SafeAreaView, View } from 'react-native'
import colors from '../utils/colors'
const backgroundImage = require('../assets/images/kickerapp-background.png')
type Props = {
  children: any
}
const WrapperView = ({children} :Props) => (
  <View style={styles.wrapper}>
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        {children}
      </SafeAreaView>
    </ImageBackground>
  </View>
)

const styles = {
  wrapper: {
    flex: 1,
    backgroundColor: colors.skyBlue
  },
  container: {flex: 1},
  backgroundImage: {
    flex: 1
  }
}

export default WrapperView
