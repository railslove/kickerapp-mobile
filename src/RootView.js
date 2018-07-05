import React, { Component } from 'react'
import SelectLeague from './views/SelectLeagueView'
import PropTypes from 'prop-types'
import MainTabNavigation from './navigations/MainTabNavigation'
class RootView extends Component<Props> {

  leagueIsAlreadySelected () {
    const { league } = this.props
    return league.slug != ''
  }

  render() {
    return this.leagueIsAlreadySelected()
      ? <MainTabNavigation />
      : <SelectLeague />
  }
}

type Props = {
  league: PropTypes.object
}

import { connect } from 'react-redux'
const mapStateToProps = state => ({
  league: state.league
})

export default connect(mapStateToProps, null)(RootView)
