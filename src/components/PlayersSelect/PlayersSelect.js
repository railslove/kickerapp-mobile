import React from 'react'
import { View } from 'react-native'
import FourSelectedPlayersBoard from './FourSelectedPlayersBoard'
import PlayersSelectGrid from './PlayersSelectGrid'


export default class playersSelectGrid extends React.Component {
  constructor(props) {
    super(props)
  }
  props: {
    playerArray: PropTypes.array,
    loading: PropTypes.bool,
    onPlayerSelectFinished: PropTypes.func
  }

  render() {
    const {playerArray, loading} = this.props
    return (
      <View>
        <View>
          <FourSelectedPlayersBoard />
          <PlayersSelectGrid
            loading={loading}
            playerArray={playerArray}
          />
        </View>
      </View>
    )
  }
}
