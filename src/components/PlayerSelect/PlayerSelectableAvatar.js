import React from 'react'
import {TouchableOpacity} from 'react-native'
import PlayerAvatar from './PlayerAvatar'
type Props = {
  onPlayerSelectFinished: PropTypes.func,
  playerData: PropTypes.array
}

const PlayerSelectableAvatar = ({playerData, onPlayerSelectFinished}: Props) => (
  <TouchableOpacity onPress={onPlayerSelectFinished}>
    <PlayerAvatar
      imageUri={playerData.image}
      name={playerData.name}
    />
  </TouchableOpacity>
)

export default PlayerSelectableAvatar
