import React from 'react'
import { View } from 'react-native'
import PlayersSelectGrid from './PlayersSelectGrid'

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
      <View style={styles.container}>
        <PlayersSelectGrid
          loading={loading}
          playersArray={playersArray}
        />
      </View>
    )
  }
}

const styles = {
  container: {}
}
