import React from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import LoadingIndicator from '../LoadingIndicator'
import PlayerSelectableAvatar from './PlayerSelectableAvatar'
import {columnsNumber} from './utils'
export default class PlayerSelect extends React.Component {
  props: {
    playerArray: PropTypes.array,
    loading: PropTypes.bool,
    onPlayerSelectFinished: PropTypes.func
  }

  render() {
    const {playerArray, loading, onPlayerSelectFinished} = this.props
    return (
      <View>
        {loading
          ? (<LoadingIndicator />)
          : (
            <ScrollView>
              <FlatList
                data={playerArray}
                renderItem={({item}) => (
                  <PlayerSelectableAvatar playerData={item} onPress={onPlayerSelectFinished}/>
                )}
                keyExtractor={item => item.id}
                numColumns={columnsNumber} />
            </ScrollView>
          )}
      </View>
    )
  }
}
