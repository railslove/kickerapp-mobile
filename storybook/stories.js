import React from 'react'

import { storiesOf } from '@storybook/react-native'
import { linkTo } from '@storybook/addon-links'

import LeaguesList from '../src/components/LeaguesList.story.js'
import PlayerSelect from '../src/components/PlayerSelect/PlayerSelect.story.js'
import PlatformIcon from '../src/components/PlatformIcon.story.js'

storiesOf('Platform Icon', module).add('Main View', () => <PlatformIcon />)
storiesOf('Leagues List', module).add('Main View', () => <LeaguesList showApp={linkTo('Button')} />)
storiesOf('Player Select', module) .add('Main View', () => <PlayerSelect />)


console.ignoredYellowBox = [ 'Remote debugger' ]
