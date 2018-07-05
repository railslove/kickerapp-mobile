import React from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import LoadingIndicator from '../LoadingIndicator'
import PlayerSelectableAvatar from './PlayerSelectableAvatar'
import {columnsNumber} from './utils'
export default class PlayerSelect extends React.Component {
  constructor(props) {
    super(props)
    this.onPlayerSelect = this.onPlayerSelect.bind(this)
  }
  props: {
    playerArray: PropTypes.array,
    loading: PropTypes.bool,
    onPlayerSelectFinished: PropTypes.func
  }
  state = {
    selectedPlayers: [
      '4584'
    ]
  }

  isPlayerSelected(playerID) {
    const { selectedPlayers } = this.state
    return selectedPlayers.find((item) => {
      if (item == playerID) return true
    })
  }

  onPlayerSelect (playerID) {
    let { selectedPlayers } = this.state
    selectedPlayers.push(playerID)
    this.setState({selectedPlayers: selectedPlayers})
  }
  render() {
    console.log(this.state.selectedPlayers)
    const {playerArray, loading, onPlayerSelectFinished} = this.props
    return (
      <View>
        {loading
          ? (<LoadingIndicator />)
          : (
            <ScrollView>
              <FlatList
                extraData={this.state}
                data={playerArray}
                renderItem={({item}) => (
                  <PlayerSelectableAvatar
                    playerData={item}
                    selected={this.isPlayerSelected(item.id)}
                    onPlayerSelect={this.onPlayerSelect}
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
