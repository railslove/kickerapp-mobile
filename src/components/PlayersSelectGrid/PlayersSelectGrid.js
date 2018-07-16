import React from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import LoadingIndicator from '../LoadingIndicator'
import PlayerSelectableAvatar from './PlayerSelectableAvatar'
import PlayerSearch from './PlayerSearch'
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
    selectedPlayers: [],
    headerVisible: false
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
    return (selectedPlayers.length < 4)
  }

  headerVisibilityHandler(scrollHanlder) {
    if (scrollHanlder.nativeEvent.contentOffset.y === 0 && !this.state.headerVisible) {
      this.setState({headerVisible: true})
    }
    return
  }

  render() {
    const {playerArray, loading} = this.props
    const {headerVisible} = this.state
    return (
      <View>
        {loading
          ? (<LoadingIndicator />)
          : (
            <View>
              <FlatList
                // extraData={headerVisible}
                columnWrapperStyle = {{backgroundColor: '#FFF'}}
                ListHeaderComponent = {() => (<PlayerSearch headerVisible = {headerVisible} />)}
                onScroll = {(event) => {this.headerVisibilityHandler(event)}}
                data={playerArray}
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
