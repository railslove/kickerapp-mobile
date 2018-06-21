import React, { Component } from 'react'
import { Button, SafeAreaView, Text, View } from 'react-native'
import PropTypes from 'prop-types'

type Props = {selectTeamId: PropTypes.func }

class SelectTeamView extends Component<Props> {
  static navigationOptions = {
    tabBarLabel: 'Matches'
  }

  handleSelectTeam () {
    this.props.selectTeamId('railslove-2018')
  }

  debugLeagues () {
    console.log(this.props)
  }

  render() {
    const { loading } = this.props.allLeagues
    return (
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Text>SELECT TEAM</Text>
          {loading
            ? (<Text>loading...</Text>)
            : (<Text>loaded!</Text>)
          }
          <Button title='Select!' onPress = { () => {this.handleSelectTeam() }}/>
          <Text></Text>
          <Button title='debug leagues!' onPress = { () => {this.debugLeagues() }}/>
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
import allLeagues from '../apollo/allLeagues'

// Redux
import { connect } from 'react-redux'
import { selectTeamId } from '../redux/actions/'
const mapDispatchToProps = (dispatch) => ({
  selectTeamId: (props) => { dispatch(selectTeamId(props))}}
)

export default connect(null, mapDispatchToProps)(allLeagues(SelectTeamView))
