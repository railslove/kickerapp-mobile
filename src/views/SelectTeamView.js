import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import LeaguesList from '../components/LeaguesList'
const allLeaguesContent = require('../../api-mocks/leaguesList.json')
type Props = {
  selectLeagueSlug: PropTypes.func,
  allLeagues: PropTypes.object
}

class SelectTeamView extends Component<Props> {
  constructor(props) {
    super(props)
    this.leagueSelecthandler = this.leagueSelecthandler.bind(this)
  }
  static navigationOptions = { tabBarLabel: 'Select League' }

  leagueSelecthandler (leagueSlug) {
    this.props.selectLeagueSlug(leagueSlug)
  }

  render() {
    // const { loading } = this.props.allLeagues
    return (
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.title}>SELECT LEAGUE</Text>
          {/* {loading
            ? (<Text>loading...</Text>)
            : (<Text>loaded!</Text>)
          } */}
          <LeaguesList allLeagues={allLeaguesContent} leagueSelecthandler={ this.leagueSelecthandler} />
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
import { selectLeagueSlug } from '../redux/actions/'
const mapDispatchToProps = (dispatch) => ({
  selectLeagueSlug: (props) => { dispatch(selectLeagueSlug(props))}}
)

export default connect(null, mapDispatchToProps)(allLeagues(SelectTeamView))
