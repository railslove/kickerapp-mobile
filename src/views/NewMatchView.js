import React, { Component } from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import WrapperView from '../components/WrapperView'

import PlayersSelect from '../components/PlayersSelect'
type Props = {
  newMatchQuery: PropTypes.object
}

class NewMatchView extends Component<Props> {

  constructor(props){
    super(props)
    this.onPlayersSelectFinished = this.onPlayerSelectFinished.bind(this)
  }

  static navigationOptions = {
    tabBarLabel: 'New Match'
  }

  isLoading() {
    return (this.props.newMatchQuery.loading)
  }
  playersArray() {
    if (this.isLoading()) return []
    return this.props.newMatchQuery.leagues[0].users
  }

  onPlayerSelectFinished() { alert('onPlayerSelectFinished') }

  render() {
    return (
      <WrapperView>
        <Text>NEW MATCH</Text>
        <PlayersSelect loading={this.isLoading()} playersArray={this.playersArray()} />
      </WrapperView>
    )
  }
}

// Apollo
import allPlayers from '../apollo/allPlayers'

export default allPlayers(NewMatchView, {id: 'railslove-2018'})
