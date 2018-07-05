import React from 'react'
import { View, FlatList, Text, Dimensions } from 'react-native'
import PropTypes from 'prop-types'
const numColumns = 4
const size = Dimensions.get('window').width/numColumns


export default class ExampleView extends React.Component {
  props: {
    dataArray: PropTypes.object
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.dataArray}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <Text style={styles.item}>{item.value}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
          numColumns={numColumns} />
        )
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
