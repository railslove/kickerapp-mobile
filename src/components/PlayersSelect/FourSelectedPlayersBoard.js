import React from 'react'
import {Text, View } from 'react-native'
import colors from '../../utils/colors'
class FourSelectedPlayersBoard extends React.Component {
  props: {
    playersArray: Array
  }
  render() {
    return (
      <View style={styles.container}>
        {console.log(this.props.playersArray)}
      </View>
    )
  }
}

const styles = {
  container: {
    backgroundColor: colors.primaryInverted,
    height: 140
  }
}

export default FourSelectedPlayersBoard
