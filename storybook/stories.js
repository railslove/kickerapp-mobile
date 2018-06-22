import React from 'react'

import { storiesOf } from '@storybook/react-native'
import { linkTo } from '@storybook/addon-links'

import LeaguesList from '../src/components/LeaguesList.story.js'
import PlatformIcon from '../src/components/PlatformIcon.story.js'

storiesOf('Leagues List', module).add('Main View', () => <LeaguesList showApp={linkTo('Button')} />)
storiesOf('Platform Icon', module).add('Main View', () => <PlatformIcon />)
