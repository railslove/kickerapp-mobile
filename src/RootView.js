import React, { Component } from 'react'
import MainTabNavigation from './navigations/MainTabNavigation'
import SelectLeague from './views/SelectLeagueView'
import PropTypes from 'prop-types'

class RootView extends Component<Props> {

  leagueIsAlreadySelected () {
    const { selectedLeagueSlug } = this.props
    return selectedLeagueSlug != ''
  }

  render() {
    return this.leagueIsAlreadySelected()
      ? <MainTabNavigation />
      : <SelectLeague />
  }
}

type Props = {
  selectedLeagueSlug: PropTypes.string
}

// Redux

import { connect } from 'react-redux'
const mapStateToProps = state => ({
  selectedLeagueSlug: state.league.selectedLeagueSlug
})

export default connect(mapStateToProps, null)(RootView)
