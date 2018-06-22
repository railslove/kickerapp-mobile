import React from 'react'
import LeaguesList from './LeaguesList'
const allLeagues = require('../../api-mocks/leaguesList.json')
class LeaguesListStory extends React.Component {
  constructor(props) {
    super(props)
    this.onLeaugeSelect = this.onLeaugeSelect.bind(this)
  }

  onLeaugeSelect (leagueSlug) {
    alert(leagueSlug)
  }
  render () {
    return (
      <LeaguesList allLeagues={allLeagues} leagueSelecthandler={ this.onLeaugeSelect} />
    )
  }
}

export default LeaguesListStory
