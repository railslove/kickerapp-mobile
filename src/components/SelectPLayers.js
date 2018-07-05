import React from 'react'
import { Dimensions, FlatList, ScrollView, Text, TouchableOpaciy, View } from 'react-native'
import LoadingIndicator from './LoadingIndicator'
import PropTypes from 'prop-types'
const numColumns = 4
const size = Dimensions.get('window').width/numColumns


export default class SelectPLayer extends React.Component {
  props: {
    playerArray: PropTypes.array,
    loading: PropTypes.bool,
    onPlayerSelectFinished: PropTypes.func
  }
  render() {
    const {playerArray, loading, onPlayerSelectFinished} = this.props
    return (
      <View style={styles.container}>
        {console.log(playerArray)}
        {loading
          ? (<LoadingIndicator />)
          : (
            <ScrollView>
              <FlatList
                data={playerArray}
                renderItem={({item}) => (
                  <View style={styles.itemContainer}>
                    <Text style={styles.item}>{item.name}</Text>
                  </View>
                )}
                keyExtractor={item => item.id}
                numColumns={numColumns} />
            </ScrollView>
          )}
      </View>
    )
  }
}


const styles = {
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  itemContainer: {
    width: size,
    height: size
  },
  item: {
    flex: 1,
    margin: 2,
    backgroundColor: 'lightblue'
  }
}
