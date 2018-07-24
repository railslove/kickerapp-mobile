import React from 'react'
import { Button, FlatList, View } from 'react-native'
import LoadingIndicator from '../LoadingIndicator'
import PlayerSelectableAvatar from './PlayerSelectableAvatar'
import FourSelectedPlayersBoard from './FourSelectedPlayersBoard'
import SearchBox from './SearchBox'
import {columnsNumber} from './utils'
export default class playersSelectGrid extends React.Component {

  constructor(props) {
    super(props)
    this.onPlayerSelect = this.onPlayerSelect.bind(this)
    this.onPlayerDeselect = this.onPlayerDeselect.bind(this)
    this.moreSelectIsPossible = this.moreSelectIsPossible.bind(this)

  }
  props: {
    playersArray: PropTypes.array,
    loading: PropTypes.bool,
    onPlayerSelectFinished: PropTypes.func,
    playerSelectHandler: PropTypes.func
  }
  state = { selectedPlayers: [] }

  _filterPlayerObject(playerID) {
    // input: playerID
    // output: {id: "", name: "", image: ""}
    return this.props.playersArray.filter((player)=> {return player.id == playerID})[0]
  }
  onPlayerSelect (playerID) {
    let { selectedPlayers } = this.state
    selectedPlayers.push(this._filterPlayerObject(playerID))
    this.setState({selectedPlayers: selectedPlayers})
  }

  onPlayerDeselect (playerID) {
    let { selectedPlayers } = this.state
    const playerIndexInArray = selectedPlayers.findIndex((player) => (player.id == playerID))
    if (playerIndexInArray !== -1) {
      selectedPlayers.splice(playerIndexInArray, 1)
    }
    this.setState({selectedPlayers: selectedPlayers})
  }

  moreSelectIsPossible () {
    let { selectedPlayers } = this.state
    return (selectedPlayers.length < 4)
  }

  fourPlayersSelected() {
    return(this.state.selectedPlayers.length == 4)
  }

  headerVisibilityHandler(scrollHanlder) {
    if (scrollHanlder.nativeEvent.contentOffset.y === 0 && !this.state.headerVisible) {
      this.setState({headerVisible: true})
    }
    return
  }

  render() {
    const { playersArray, loading } = this.props
    const { selectedPlayers } = this.state
    return (
      <View>
        {loading
          ? (<LoadingIndicator />)
          : (
            <View>
              <FourSelectedPlayersBoard
                playersArray={selectedPlayers}
              />
              <Button title='rerender handler' onPress={() => {this._componentHandler()}} />
              <FlatList
                ListHeaderComponent={() => (<SearchBox headerVisible/>)}
                style={{backgroundColor: 'transparent'}}
                data={playersArray}
                renderItem={({item}) => (
                  <PlayerSelectableAvatar
                    playerData={item}
                    moreSelectIsPossible={this.moreSelectIsPossible}
                    onPlayerSelect={this.onPlayerSelect}
                    onPlayerDeselect={this.onPlayerDeselect} />
                )}
                keyExtractor={item => item.id}
                numColumns={columnsNumber} />
            </View>
          )}
      </View>
    )
  }
}
