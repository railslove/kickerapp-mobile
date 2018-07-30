import React from 'react'
import {ImageBackground, Text, View } from 'react-native'
import PlatformIcon from '../PlatformIcon'
import {screenWidth} from './utils'
import colors from '../../utils/colors'
type Props = {
  playersArray: PropTypes.array
}

const Teams = ({playersArray}: Props) => (
  <View style={stylesTeams.wrapper}>

    <View style={stylesTeams.container}>
      <SinglePlayerContainer />
      <SinglePlayerContainer />
      <PlatformIcon androidIcon='minimize' iosIcon='md-remove' size={30} style={stylesTeams.icon} />
      <SinglePlayerContainer />
      <SinglePlayerContainer />
    </View>

  </View>
)
const stylesTeams = {
  wrapper: {
    width: screenWidth,
    height: 160,
    backgroundColor: '#eeeeee',
    justifyContent: 'center'
  },
  container: {
    width: screenWidth,
    height: 140,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeee22'
  },
  icon: {
    margin: 5,
    width: 10
  }
}

const playerPlaceholder = require('../../assets/images/player.png')
const SinglePlayerContainer = ({name}) => (
  <View style={stylesSinglePlayer.wrapper}>
    <ImageBackground source={playerPlaceholder} style={{width: '100%', height: '100%'}}>
      <Text>A Name</Text>
    </ImageBackground>
  </View>
)

const stylesSinglePlayer = {
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.avatarPlaceholder,
    margin: 1,
    width: (screenWidth - 80) / 4,
    height: 80
  }
}

export default Teams
