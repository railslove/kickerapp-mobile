import React from 'react'
import { View } from 'react-native'
import FourSelectedPlayersBoard from './FourSelectedPlayersBoard'
import PlayersSelectGrid from './PlayersSelectGrid'

const allPlayersListArray = require('../../../api-mocks/playersList.json')

export default class playersSelectGrid extends React.Component {
  constructor(props) {
    super(props)
  }
  props: {
    playersArray: PropTypes.array,
    loading: PropTypes.bool,
    onPlayerSelectFinished: PropTypes.func
  }

  render() {
    const {playersArray, loading} = this.props
    return (
      <View>
        <View>
          <PlayersSelectGrid
            loading={loading}
            playersArray={playersArray}
          />
        </View>
      </View>
    )
  }
}
