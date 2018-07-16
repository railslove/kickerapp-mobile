import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import PlayersSelectGrid from '../components/PlayersSelectGrid'
type Props = {
  newMatchQuery: PropTypes.object
}

class NewMatchView extends Component<Props> {

  constructor(props){
    super(props)
    this.onPlayersSelectGridFinished = this.onPlayerSelectFinished.bind(this)
  }

  static navigationOptions = {
    tabBarLabel: 'New Match'
  }

  isLoading() {
    return (this.props.newMatchQuery.loading)
  }
  playerArray() {
    if (this.isLoading()) return []
    return this.props.newMatchQuery.leagues[0].users
  }

  onPlayerSelectFinished() { alert('onPlayerSelectFinished') }

  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Text>NEW MATCH</Text>
          <PlayersSelectGrid loading={this.isLoading()} playerArray={this.playerArray()} />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = {
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

// Apollo
import allPlayers from '../apollo/allPlayers'


export default allPlayers(NewMatchView, {id: 'railslove-2018'})
