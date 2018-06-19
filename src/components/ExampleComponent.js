import React, { Component } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import PropTypes from 'prop-types'

type Props = {
  counter: PropTypes.string,
  increment: PropTypes.func,
  decrement: PropTypes.func
}

class ExampleComponent extends Component<Props> {

  render() {
    const { counter, increment, decrement } = this.props
    return (
      <View style={styles.container}>
        <Text>{counter.count}</Text>
        <TouchableOpacity onPress={increment} style={styles.button}>
          <Text>up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrement} style={styles.button}>
          <Text>down</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    padding: 10,
    backgroundColor: '#EEEEEE'
  },
  button: {
    padding: 5,
    marginTop: 10
  }
}

import { connect } from 'react-redux'
import {increment, decrement} from '../redux/actions'

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  increment: (props) => {dispatch(increment(props))},
  decrement: (props) => {dispatch(decrement(props))}
})

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent)
