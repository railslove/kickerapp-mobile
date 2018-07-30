import React from 'react'
import Teams from './Teams'
const allPlayersListArray = require('../../../api-mocks/playersList.json')

class TeamsStoryEmpty extends React.Component {
  render () {
    return (
      <Teams playersArray={[]}/>
    )
  }
}

class TeamsStory extends React.Component {
  render () {
    return (
      <Teams playersArray={allPlayersListArray.slice(4, 8)}/>
    )
  }
}

export default TeamsStory

import { storiesOf } from '@storybook/react-native'

storiesOf('Teams', module)
  .add('Empty Players', () => <TeamsStoryEmpty />)
  .add('Selected Players', () => <TeamsStory />)
