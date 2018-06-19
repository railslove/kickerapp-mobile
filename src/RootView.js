import React, { Component } from 'react'
import MainTabNavigation from './navigations/MainTabNavigation'
import SelectTeam from './views/SelectTeamView'
import PropTypes from 'prop-types'

class RootView extends Component<Props> {

  teamIsAlreadySelected () {
    const { selectedTeamId } = this.props
    return selectedTeamId != ''
  }

  render() {
    return this.teamIsAlreadySelected()
      ? <MainTabNavigation />
      : <SelectTeam />
  }
}

type Props = {
  selectedTeamId: PropTypes.string
}

// Redux

import { connect } from 'react-redux'
const mapStateToProps = state => ({
  selectedTeamId: state.team.selectedTeamId
})

export default connect(mapStateToProps, null)(RootView)
