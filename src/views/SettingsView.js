import React, { Component } from 'react'
import { Button, SafeAreaView, View, Text } from 'react-native'

class SettingsView extends Component<Props> {

  deSelectLeague () {
    this.props.selectLeagueSlug('')
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View>
          <Text>{this.props.selectedLeagueSlug}</Text>
          <Button title='Remove league' onPress={ () => {this.deSelectLeague()} }/>
        </View>
      </SafeAreaView>
    )
  }
}

type Props = {}

// Redux

import { connect } from 'react-redux'
import { selectLeagueSlug } from '../redux/actions/'

const mapStateToProps = state => ({
  selectedLeagueSlug: state.league.selectedLeagueSlug
})

const mapDispatchToProps = (dispatch) => ({
  selectLeagueSlug: (props) => { dispatch(selectLeagueSlug(props))}}
)

export default connect(mapStateToProps, mapDispatchToProps)(SettingsView)
