import React, { Component } from 'react'
import { Button, SafeAreaView, View, Text } from 'react-native'

class SettingsView extends Component<Props> {

  deSelectLeague () {
    this.props.selectLeague({  id: null, slug: '', name: '', matches_count: null})
  }

  revokeState () {
    this.props.flushStore()
  }


  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View>
          <Text>ID: {this.props.league.id}</Text>
          <Text>NAME: {this.props.league.name}</Text>
          <Text>SLUG: {this.props.league.slug}</Text>
          <Text>MATCHES: {this.props.league.matches_count}</Text>

          <Text></Text>
          <Button title='Select another league' onPress={ () => {this.deSelectLeague()} }/>
          <Text></Text>
          <Button title='Revoke state' onPress={ () => {this.revokeState()} }/>
        </View>
      </SafeAreaView>
    )
  }
}

type Props = {}

// Redux

import { connect } from 'react-redux'
import { selectLeague, flushStore } from '../redux/actions/'

const mapStateToProps = state => ({
  league: state.league
})

const mapDispatchToProps = (dispatch) => ({
  selectLeague: (props) => { dispatch(selectLeague(props))},
  flushStore: () => { dispatch(flushStore())}
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsView)
