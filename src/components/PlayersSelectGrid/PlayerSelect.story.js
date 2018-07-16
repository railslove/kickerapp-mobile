import React from 'react'
import PlayerSelect from './PlayerSelect'
const playersListArray = require('../../../api-mocks/playersList.json')
class PlayerSelectStory extends React.Component {
  render () {
    return (
      <PlayerSelect playerArray= {playersListArray}/>
    )
  }
}

export default PlayerSelectStory
