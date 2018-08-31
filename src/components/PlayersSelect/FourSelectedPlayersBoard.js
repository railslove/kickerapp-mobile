import React, { Component } from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native'
import SortableList from 'react-native-sortable-list'
import Block from './FourSelectedPlayersBoardBlock'
import Teams from './Teams'
import PrimaryButton from '../PrimaryButton'
import {screenWidth, screenHeight, suffleArrayElements} from './utils'
import colors from '../../utils/colors'

const minHeight = 100
const mediumHeight = 300
const maxHeight = screenHeight - 150

export default class FourSelectedPlayersBoard extends Component {

  props: { playersArray: Array}
  state = {
    playersArray: [],
    stage: 1,
    playersArrayFinalSelection: [],
    slideAnimValue: new Animated.Value(minHeight),
    sortableListOpacityAnimValue: new Animated.Value(1),
    fadeAnimValue: new Animated.Value(0)
  }

  constructor(props) {
    super(props)
  }

  newGame() {
    const {playersArray} = this.props
    if (playersArray.length != 4) {return true}
    this.setState({ playersArrayFinalSelection: playersArray })
  }

  newShuffledGame() {
    const {playersArray} = this.props

    if (playersArray.length != 4) {return true}
    this.setState({
      playersArrayFinalSelection: suffleArrayElements(playersArray)
    })
  }

  static getDerivedStateFromProps(nextProps, _state) {
    return (
      {
        playersArray: [...nextProps.playersArray]
      }
    )
  }
  componentDidUpdate(){
    this.stagesHandler()
  }

  stagesHandler() {
    const {playersArray} = this.props
    const {stage, playersArrayFinalSelection} = this.state
    if (playersArray.length != 4) {
      // from stage 3 to stage to stage 1 only
      if (stage != 1 && stage !=2) { this.stage1Handler() }
    }
    if (playersArray.length == 4) {
      if (stage != 2) { this.stage2Handler() }
    }
    if (playersArray.length == 4 && playersArrayFinalSelection.length == 4) {
      if (stage != 3) { this.stage3Handler() }
    }
    return true
  }
  stage1Handler () {
    this.setState({stage: 1})
    this.doSlideUp()
  }

  stage2Handler () {
    const {playersArrayFinalSelection, playersArray} = this.state
    if (playersArray.length != 4 || playersArrayFinalSelection.length == 4) { return true }
    // if (this.state.stage == 2) { return true }
    this.doSlideDownMiddle()
    this.doFadeIn()
    this.sortableListDoUnfade()
    this.setState({stage: 2})
  }

  stage3Handler () {
    const {playersArrayFinalSelection, playersArray} = this.state
    if (playersArrayFinalSelection.length != 4 && playersArray != 4) { return true }
    if (this.state.stage == 3) { return true }
    this.doSlideDownMaximum()
    this.sortableListDoFade()
    this.setState({stage: 3})
  }

  sortableListDoFade() {
    Animated.timing(
      this.state.sortableListOpacityAnimValue,
      { toValue: 0.2, duration: 200 }
    ).start()
  }

  sortableListDoUnfade() {
    Animated.timing(
      this.state.sortableListOpacityAnimValue,
      { toValue: 1, duration: 400 }
    ).start()
  }

  backToStage1() {
    this.setState({playersArrayFinalSelection: []})
    this.stage1Handler()

  }


  doSlideDownMiddle() {
    Animated.timing(
      this.state.slideAnimValue,
      { toValue: mediumHeight, duration: 400 }
    ).start()
  }

  doSlideDownMaximum() {
    if (this.state.playersArrayFinalSelection.length != 4) { return true }
    Animated.timing(
      this.state.slideAnimValue,
      {
        toValue: maxHeight,
        duration: 500
      }
    ).start()
  }

  doSlideUp() {
    Animated.timing(
      this.state.slideAnimValue,
      {
        toValue: minHeight,
        duration: 300
      }
    ).start()
  }

  doFadeIn() {
    Animated.timing(
      this.state.fadeAnimValue,
      { toValue: 1, duration: 1000 }
    ).start()
  }

  render() {
    const { stage, sortableListOpacityAnimValue, fadeAnimValue, slideAnimValue } = this.state
    return (
      <Animated.View style={[styles.container, {height: slideAnimValue}]}>
        <Animated.View style={{opacity: sortableListOpacityAnimValue}}>
          <SortableList
            horizontal
            style={styles.list}
            data={this.state.playersArray}
            sortingEnabled={stage != 3}
            contentContainerStyle={styles.contentContainerStyle}
            innerContainerStyle={styles.innerContainerStyle}
            renderRow={this._renderRow} />
        </Animated.View>
        { stage != 1 && (<Animated.View style={[styles.teamsContainer, {opacity: fadeAnimValue}]}>
          <View style={styles.buttonWrapper}>
            {stage != 3 && (
              <View style={styles.buttonContainer}>
                <Button title='New Game' onPress={() => {this.newGame()}} />
                <Button title='Shuffle' onPress={() => {this.newShuffledGame()}} />
              </View>
            )}
          </View>
          <View>
            <Teams playersArray= {this.state.playersArrayFinalSelection} />
          </View>
        </Animated.View>)}
        {stage == 3 && (<View style={{backgroundColor: '#eeeeee', flex: 1, width: '100%'}}>

        </View>)}
        {stage == 3 && (
          <View style={styles.slideUpButtonContainer}>
            <PrimaryButton
              onpress={() => {this.backToStage1()}}
              androidIcon='arrow-drop-up'
              iosIcon='md-arrow-dropup'
              stickerUp
              size={25} />
          </View>
        )}
      </Animated.View>
    )
  }

  _renderRow = ({data, active}) => {
    return <Block data={data} active={active} />
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: 'center',
    height: '100%',
    flexDirection: 'column'
  },
  teamsContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  buttonWrapper: {
    height: 30
  },
  buttonContainer: {
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
  innerContainerStyle: {width: '100%'},
  slideUpButtonContainer: {
    width: 50,
    position: 'absolute',
    bottom: 0,
    right: 5
  }
})
