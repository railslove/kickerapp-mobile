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
    console.log(this.props.badgesQuery.leagues)
  }

  render() {
    const { leagues, loading } = this.props.badgesQuery
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

import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

const BADGES_QUERY = gql`
  query BadgesQuery($id: String!) {
    leagues(league_slug: $id) {
      name
      longest_winning_streak{
        name
        image
        winning_streak
      }
      longest_winning_streak_ever{
        name
        image
        longest_winning_streak_games
      }
      top_crawler{
        name
        image
        number_of_crawls
      }
      worst_crawler{
        name
        image
        number_of_crawlings
      }
    }
  }
`

//
const SelectTeamViewWithGraphQL = compose(
  graphql(BADGES_QUERY, {
    name: 'badgesQuery',
    // see documentation on computing query variables from props in wrapper
    // http://dev.apollodata.com/react/queries.html#options-from-props
    options: () => ({
      variables: {
        id: 'railslove-2018'
      }
    })
  })
)(SelectTeamView)



// Redux

import { connect } from 'react-redux'
import { selectTeamId } from '../redux/actions/'

const mapDispatchToProps = (dispatch) => ({
  selectTeamId: (props) => { dispatch(selectTeamId(props))}}
)

export default connect(null, mapDispatchToProps)(SelectTeamViewWithGraphQL)
