import React from 'react'

import { storiesOf } from '@storybook/react-native'
import { linkTo } from '@storybook/addon-links'

import LeaguesList from '../src/components/LeaguesList.story.js'
import PlayersSelectGrid from '../src/components/PlayersSelect/PlayersSelectGrid.story.js'
import PlayerAvatar from '../src/components/PlayersSelect/PlayerAvatar.story.js'
import PlatformIcon from '../src/components/PlatformIcon.story.js'
import FourSelectedPlayersBoard from '../src/components/PlayersSelect/FourSelectedPlayersBoard.story.js'


storiesOf('Platform Icon', module).add('Main View', () => <PlatformIcon />)
storiesOf('Leagues List', module).add('Main View', () => <LeaguesList showApp={linkTo('Button')} />)
storiesOf('Player Select', module)
  .add('List of players', () => <PlayersSelectGrid />)
  .add('Four Selected Players Board', () => <FourSelectedPlayersBoard />)

  .add('Single Avatar', () => <PlayerAvatar />)

require('../src/components/PlayersSelect/Teams.story.js')

console.ignoredYellowBox = [ 'Remote debugger' ]
