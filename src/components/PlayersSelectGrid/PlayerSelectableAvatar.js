import React from 'react'
import {TouchableOpacity} from 'react-native'
import PlayerAvatar from './PlayerAvatar'

class PlayerSelectableAvatar extends React.Component {
  props: {
    onPlayerSelect: PropTypes.func,
    onPlayerDeselect: PropTypes.func,
    moreSelectIsPossible: PropTypes.func,
    playerData: PropTypes.array,
  }
  state = {
    selected: false
  }

  handlePress () {
    const playerID = this.props.playerData.id
    const {selected} = this.state
    const {onPlayerSelect, onPlayerDeselect} = this.props
    if (selected) {
      onPlayerDeselect(playerID)
    } else {
      if (!this.props.moreSelectIsPossible()) return
      onPlayerSelect(playerID)
    }
    this.setState({selected: !selected})
  }

  render () {
    const {playerData} = this.props
    const {selected} = this.state
    return (
      <TouchableOpacity onPress={() => { this.handlePress() }}>
        <PlayerAvatar
          imageUri={playerData.image}
          name={playerData.name}
          active={selected}
        />
      </TouchableOpacity>
    )
  }
}

// const styles = {
//   selected: {
//     backgroundColor: 'red',
//     padding: 30
//   }
// }
export default PlayerSelectableAvatar
