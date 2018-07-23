import React from 'react'
import PlayerSelectGrid from './PlayerSelectGrid'
const playersListArray = require('../../../api-mocks/playersList.json')
class PlayerSelectGridStory extends React.Component {
  render () {
    return (
      <PlayerSelectGrid playerArray={playersListArray}/>
    )
  }
}

export default PlayerSelectGridStory
