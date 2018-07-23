import React from 'react'
import FourSelectedPlayersBoard from './FourSelectedPlayersBoard'
const allPlayersListArray = require('../../../api-mocks/playersList.json')

class FourSelectedPlayersBoardStory extends React.Component {

  render() {
    return (
      <FourSelectedPlayersBoard playersArray={allPlayersListArray.slice(0, 4)}/>
    )
  }
}

export default FourSelectedPlayersBoardStory
