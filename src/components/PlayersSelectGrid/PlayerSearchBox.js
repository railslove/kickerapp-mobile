import React from 'react'
import { TouchableHightLight, Text, View } from 'react-native'
import { screenWidth } from './utils'
import Search from 'react-native-search-box'

const rowHeight = 40

class PlayerSearchBox extends React.Component {
  props: {
    headerVisible: Boolean
  }

    renderRow = (item) => {
      return (
        <TouchableHightLight
          style={{
            height: rowHeight,
            justifyContent: 'center',
            alignItems: 'center'}}
        >
          <Text>{item.name}</Text>
        </TouchableHightLight>
      )
    }

    render() {
      if (headerVisible) {
        this.doAnimate()
      }
      const { headerVisible } = this.props
      return (
        <View style={{ width: screenWidth }}>
          {headerVisible && (
            <Search ref={(searchBox) => this.searchBox = searchBox} />
          )}
        </View>
      )
    }
}

export default PlayerSearchBox
