import React from 'react'
import {ImageBackground, Text, View } from 'react-native'
import PlatformIcon from '../PlatformIcon'
import {screenWidth} from './utils'
import PlayerAvatar from './PlayerAvatar'
import colors from '../../utils/colors'
type Props = {
  playersArray: PropTypes.array
}

const Team = ({children, title} : {children: any, title: string}) => (
  <View style={stylesTeam.container}>
    <View style={stylesTeam.childrenContainer}>
      <Text>{children}</Text>
    </View>
    <View style={stylesTeam.titleContainer}>
      <Text style={stylesTeam.title}>{title}</Text>
    </View>
  </View>
)

const stylesTeam = {
  container:{
    flexDirection: 'column'
  },
  childrenContainer: {
    flexDirection: 'row'
  },
  titleContainer: {
    flexDirection: 'row',
    paddingVertical: 1
  },
  title: {
    fontSize: 17,
    textAlign: 'center',
    flex: 1
  }
}
const Teams = ({playersArray}: Props) => (
  <View style={stylesTeams.wrapper}>

    <View style={stylesTeams.container}>
      <Team title='TEAM A'>
        <SinglePlayerContainer playerObject={playersArray[0]} />
        <SinglePlayerContainer playerObject={playersArray[1]} />
      </Team>
      <PlatformIcon androidIcon='minimize' iosIcon='md-remove' size={30} style={stylesTeams.icon} />
      <Team title='TEAM B'>
        <SinglePlayerContainer playerObject={playersArray[2]} />
        <SinglePlayerContainer playerObject={playersArray[3]} />
      </Team>
    </View>

  </View>
)
const stylesTeams = {
  wrapper: {
    width: screenWidth,
    height: 160,
    justifyContent: 'center'
  },
  container: {
    width: screenWidth,
    height: 140,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    margin: 5,
    width: 10
  }
}

const playerPlaceholder = require('../../assets/images/player.png')
type SinglePlayerProps = {
  playerObject: PropTypes.object
}

const SinglePlayerContainer = ({playerObject}: SinglePlayerProps) => {
  console.log({playerObject})
  return (
    <View style={stylesSinglePlayer.wrapper}>
      <ImageBackground source={playerPlaceholder} style={stylesSinglePlayer.imageBackground}>
        <View style={stylesSinglePlayer.container}>
          {playerObject && (
            <PlayerAvatar
              imageUri={playerObject.image}
              name={playerObject.name}
              captionVisible={true}
            />
          )}
        </View>
      </ImageBackground>
      <View style={stylesSinglePlayer.nameContainer}>
        <Text style={stylesSinglePlayer.nameText}>{playerObject ? playerObject.name : ''}</Text>
      </View>
    </View>
  )
}
const stylesSinglePlayer = {
  wrapper: { padding: 2 },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (screenWidth - 80) / 4,
    height: 80
  },
  imageBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.avatarPlaceholder
  },
  nameContainer: {},
  nameText: { fontSize: 11, textAlign: 'center'}
}

export default Teams
