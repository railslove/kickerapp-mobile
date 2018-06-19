import React, { Component } from 'react'
import { Button, SafeAreaView, View, Text } from 'react-native'

class SettingsView extends Component<Props> {

  deselectTeam () {
    this.props.selectTeamId('')
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View>
          <Text>{this.props.selectedTeamId}</Text>
          <Button title='Remove team' onPress={ () => {this.deselectTeam()} }/>
        </View>
      </SafeAreaView>
    )
  }
}

type Props = {}

// Redux

import { connect } from 'react-redux'
import { selectTeamId } from '../redux/actions/'

const mapStateToProps = state => ({
  selectedTeamId: state.team.selectedTeamId
})

const mapDispatchToProps = (dispatch) => ({
  selectTeamId: (props) => { dispatch(selectTeamId(props))}}
)

export default connect(mapStateToProps, mapDispatchToProps)(SettingsView)
