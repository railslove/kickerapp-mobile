import React from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import LoadingIndicator from '../LoadingIndicator'
import PlayerSelectableAvatar from './PlayerSelectableAvatar'
import {columnsNumber} from './utils'
export default class playersSelectGrid extends React.Component {
  constructor(props) {
    super(props)
    this.onPlayerSelect = this.onPlayerSelect.bind(this)
    this.onPlayerDeselect = this.onPlayerDeselect.bind(this)
    this.moreSelectIsPossible = this.moreSelectIsPossible.bind(this)
  }
  props: {
    playerArray: PropTypes.array,
    loading: PropTypes.bool,
    onPlayerSelectFinished: PropTypes.func
  }
  state = {
    selectedPlayers: []
  }

  onPlayerSelect (playerID) {

    let { selectedPlayers } = this.state
    selectedPlayers.push(playerID)
    this.setState({selectedPlayers: selectedPlayers})
  }

  onPlayerDeselect (playerID) {
    let { selectedPlayers } = this.state
    const playerIndexInArray = selectedPlayers.indexOf(playerID)
    if (playerIndexInArray !== -1) {
      selectedPlayers.splice(playerIndexInArray, 1)
    }
    this.setState({selectedPlayers: selectedPlayers})
  }

  moreSelectIsPossible () {
    let { selectedPlayers } = this.state
    console.log(selectedPlayers.length)
    return (selectedPlayers.length < 4)
  }
  render() {
    console.log('Player Grid', this.state.selectedPlayers)
    const {playerArray, loading} = this.props
    return (
      <View>
        {loading
          ? (<LoadingIndicator />)
          : (
            <ScrollView>
              <FlatList
                data={playerArray}
                renderItem={({item}) => (
                  <PlayerSelectableAvatar
                    playerData={item}
                    moreSelectIsPossible={this.moreSelectIsPossible}
                    onPlayerSelect={this.onPlayerSelect}
                    onPlayerDeselect={this.onPlayerDeselect}
                  />
                )}
                keyExtractor={item => item.id}
                numColumns={columnsNumber} />
            </ScrollView>
          )}
      </View>
    )
  }
}
