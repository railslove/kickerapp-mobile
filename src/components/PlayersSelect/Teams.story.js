import React from 'react'
import Teams from './Teams'
const allPlayersListArray = require('../../../api-mocks/playersList.json')

class TeamsStory extends React.Component {
  render () {
    return (
      <Teams playersArray={allPlayersListArray.slice(4, 8)}/>
    )
  }
}

export default TeamsStory
