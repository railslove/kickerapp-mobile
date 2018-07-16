import React, { PureComponent } from 'react'
import { Animated, TouchableHightLight, Text, View } from 'react-native'
import { screenWidth } from './utils'
import Search from 'react-native-search-box'

const rowHeight = 40

class MyScene extends React.Component {
  props: {
    headerVisible: Boolean
  }
  state = {
    heightAnim: new Animated.Value(0)
  }
  doAnimate () {
    Animated.timing(
      this.state.heightAnim,
      { toValue: 40,
        duration: 500 }
    ).start()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log({prevProps, prevState, snapshot})
  }
  componentDidMount() {
    this.doAnimate()
    console.log('did mount')
  }

    renderRow = (item, sectionId, index) => {
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
      let { heightAnim } = this.state
      return (
        <View>
          {headerVisible && (
            <Animated.View style={{ width: screenWidth, height: heightAnim}} >
              <Search ref='search_box' />
            </Animated.View>
          )}
        </View>
      )
    }
}

export default MyScene
