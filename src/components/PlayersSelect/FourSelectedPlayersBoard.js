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

const minHeight = 100
const maxHeight = 300

export default class FourSelectedPlayersBoard extends Component {

  props: { playersArray: Array, fourPlayersSelected: Boolean }
  state = {
    playersArray: [],
    slideAnimValue: new Animated.Value(minHeight),
    fadeAnimValue: new Animated.Value(0)
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
    this.doFadeIn()
  }

  doSlideDown() {
    if (!this.props.fourPlayersSelected) { return true }
    Animated.timing(
      this.state.slideAnimValue,
      {
        toValue: maxHeight,
        duration: 400
      }
    ).start()
  }
  doFadeIn() {
    if (!this.props.fourPlayersSelected) { return true }
    Animated.timing(
      this.state.fadeAnimValue,
      {
        toValue: 1,
        duration: 1000
      }
    ).start()
  }


  render() {
    const { fourPlayersSelected } = this.props
    const { fadeAnimValue, slideAnimValue } = this.state
    return (
      <Animated.View style={[styles.container, {height: slideAnimValue}]}>
        <SortableList
          horizontal
          style={styles.list}
          data={this.state.playersArray}
          contentContainerStyle={styles.contentContainerStyle}
          innerContainerStyle={styles.innerContainerStyle}
          renderRow={this._renderRow} />
        {fourPlayersSelected && (<Animated.View style={[styles.buttonContainer, {opacity: fadeAnimValue}]}>
          <Button title='New Game' onPress={() => {this.newGame()}} />
          <Button title='Shuffle' onPress={() => {this.shufflePlayers()}} />
        </Animated.View>)}
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
    height: 90,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth - 20
  },
  innerContainerStyle: {width: '100%'}
})
