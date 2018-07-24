import React, { Component } from 'react'
import {
  Animated,
  Button,
  StyleSheet,
  View
} from 'react-native'
import SortableList from 'react-native-sortable-list'
import Block from './FourSelectedPlayersBoardBlock'
import {screenWidth} from './utils'

const minHeight = 160
const maxHeight = 300

export default class FourSelectedPlayersBoard extends Component {

  props: { playersArray: Array, fourPlayersSelected: Boolean }
  state = {
    playersArray: [],
    slideAnimValue: new Animated.Value(minHeight)
  }

  constructor(props) {
    super(props)
  }

  newGame() { }

  shufflePlayers() { }

  static getDerivedStateFromProps(nextProps) {
    return (
      {
        playersArray: [...nextProps.playersArray]
      }
    )
  }
  componentDidUpdate(){
    this.doSlideDown()
  }

  doSlideDown() {
    const { fourPlayersSelected } = this.props
    if (!fourPlayersSelected) { return true }
    Animated.timing(
      this.state.slideAnimValue,
      {
        toValue: maxHeight,
        duration: 1000
      }
    ).start()
  }


  render() {
    const { fourPlayersSelected } = this.props
    const { slideAnimValue } = this.state
    return (
      <Animated.View style={[styles.container, {height: slideAnimValue}]}>
        <SortableList
          horizontal
          style={styles.list}
          data={this.state.playersArray}
          contentContainerStyle={styles.contentContainerStyle}
          innerContainerStyle={styles.innerContainerStyle}
          renderRow={this._renderRow} />
        {fourPlayersSelected && (<View style={styles.buttonContainer}>
          <Button title='New Game' onPress={() => {this.newGame()}} />
          <Button title='Shuffle' onPress={() => {this.shufflePlayers()}} />
        </View>)}
      </Animated.View>
    )
  }

  _renderRow = ({data, active}) => {
    return <Block data={data} active={active} />
  }
}


const styles = StyleSheet.create({
  container: { alignItems: 'center', height: minHeight, backgroundColor: '#FFFFFF'},
  buttonContainer: {
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contentContainerStyle: {width: '100%'},
  list: {
    height: 120 ,
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth - 20
  },
  innerContainerStyle: {width: '100%'}
})
