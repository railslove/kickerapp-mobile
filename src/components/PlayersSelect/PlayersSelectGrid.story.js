import React from 'react'
import PlayersSelectGrid from './PlayersSelectGrid'
const playersListArray = require('../../../api-mocks/playersList.json')
class PlayerSelectGridStory extends React.Component {
  render () {
    return (
      <PlayersSelectGrid playersArray={playersListArray}/>
    )
  }
}

export default PlayerSelectGridStory
