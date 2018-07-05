import React from 'react'
import {TouchableOpacity} from 'react-native'
import PlayerAvatar from './PlayerAvatar'
type Props = {
  onPlayerSelect: PropTypes.func,
  playerData: PropTypes.array,
  selected: PropTypes.bool
}

const PlayerSelectableAvatar = ({playerData, onPlayerSelect, selected}: Props) => {
  const handlePress = () => {
    !selected ? onPlayerSelect(playerData.id) : () => {}
  }
  const AvatarImage = () => (
    <PlayerAvatar
      imageUri={playerData.image}
      name={playerData.name}
      active={selected}
    />
  )

  return (
    <TouchableOpacity onPress={() => { handlePress() }}>
      <AvatarImage />
    </TouchableOpacity>
  )
}

const styles = {
  selected: {
    backgroundColor: 'red',
    padding: 30
  }
}
export default PlayerSelectableAvatar
