import React, { Component } from 'react'
import {
  Animated,
  Easing,
  StyleSheet,
  View,
  Platform
} from 'react-native'
import SortableList from 'react-native-sortable-list'
import PlayerAvatar from './PlayerAvatar'
import {screenWidth, imageSize} from './utils'
export default class FourSelectedPlayersBoard extends Component {

  props: { playersArray: Array }
  state = {
    playersArray: []
  }
  constructor(props) {
    super(props)
  }

  UNSAFE_componentWillReceiveProps() {
    this.setState({
      playersArray: [...this.props.playersArray]
    })
  }

  render() {
    return (

      <View style={styles.container}>
        <SortableList
          horizontal
          style={styles.list}
          data={this.state.playersArray}
          contentContainerStyle={styles.contentContainerStyle}
          innerContainerStyle={styles.innerContainerStyle}
          renderRow={this._renderRow} />
      </View>
    )
  }

  _renderRow = ({data, active}) => {
    return <Row data={data} active={active} />
  }
}

class Row extends Component {

  constructor(props) {
    super(props)
    this._active = new Animated.Value(0)
    this._style = {
      ...Platform.select({
        ios: {
          transform: [{
            scale: this._active.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 1.1]
            })
          }],
          shadowRadius: this._active.interpolate({
            inputRange: [0, 1],
            outputRange: [2, 10]
          })
        },

        android: {
          transform: [{
            scale: this._active.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 1.07]
            })
          }],
          elevation: this._active.interpolate({
            inputRange: [0, 1],
            outputRange: [2, 6]
          })
        }
      })
    }
  }

  props: { active: Boolean, data: Array }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.active !== nextProps.active) {
      Animated.timing(this._active, {
        duration: 300,
        easing: Easing.bounce,
        toValue: Number(nextProps.active)
      }).start()
    }
  }

  render() {
    const {data} = this.props

    return (
      <Animated.View style={[
        styles.row,
        this._style
      ]}>
        <PlayerAvatar imageUri={data.image} name={data.name} />
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    height: 120 ,
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth - 20
  },
  container: { alignItems: 'center' },
  contentContainerStyle: {width: '100%'},
  innerContainerStyle: {width: '100%'},
  row: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 2,
    // marginVertical: 5,
    padding: 2,
    margin: 4,
    width: imageSize + 4,
    height: imageSize + 4,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowOpacity: 1,
        shadowOffset: {height: 2, width: 2},
        shadowRadius: 2
      },

      android: {
        elevation: 0,
        marginHorizontal: 30
      }
    })
  }
})
