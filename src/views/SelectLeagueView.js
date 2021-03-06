import React, { Component } from 'react'
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import LeaguesList from '../components/LeaguesList'
const allLeaguesContent = require('../../api-mocks/leaguesList.json')
type Props = {
  selectLeague: PropTypes.func,
  allLeagues: PropTypes.object
}

class SelectLeagueView extends Component<Props> {
  constructor(props) {
    super(props)
    this.leagueSelecthandler = this.leagueSelecthandler.bind(this)
  }
  static navigationOptions = { tabBarLabel: 'Select League' }

  leagueSelecthandler (leagueObject) {
    this.props.selectLeague(leagueObject)
  }

  render() {
    const { loading } = this.props.allLeagues
    return (
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.title}>SELECT LEAGUE</Text>
          <LeaguesList loading={loading} allLeagues={allLeaguesContent} leagueSelecthandler={ this.leagueSelecthandler} />
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
    flex: 1
  },
  title: {
    textAlign: 'center',
    fontSize: 19,
    paddingTop:25
  }
}

// Apollo
import allLeagues from '../apollo/allLeagues'

// Redux
import { connect } from 'react-redux'
import { selectLeague } from '../redux/actions/'
const mapDispatchToProps = (dispatch) => ({
  selectLeague: (props) => { dispatch(selectLeague(props))}}
)

export default connect(null, mapDispatchToProps)(allLeagues(SelectLeagueView))
