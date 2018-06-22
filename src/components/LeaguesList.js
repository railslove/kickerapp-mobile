import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, TextInput, View, TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types'
class LeaguesList extends Component {

  constructor(props) {
    super(props)
    this.renderRow = this.renderRow.bind(this)
    this.renderSeparator = this.renderSeparator.bind(this)
  }

  state = { filter: '' }

  filterDatasource (text) {
    const { allLeagues } = this.props
    const safe = String(text || '').replace(/([.*^$+?!(){}[\]/\\])/g,'\\$1')
    const regex = new RegExp(safe, 'i')
    const filter = (row) => regex.test(row.name)
    return (allLeagues.filter(filter))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            onChangeText={(typedText) => this.setState({typedText})}
            value={this.state.filter}
            placeholder='type to filter'
            testID="explorer_search" />
        </View>
        <FlatList
          keyExtractor={(item) => (item.id)} // essentail
          style={styles.list}
          enableEmptySections={false}
          data={this.filterDatasource(this.state.typedText)}
          renderItem={ ({item, index}) => (this.renderRow(item, index, this.props.leagueSelecthandler))}
          ItemSeparatorComponent = {this.renderSeparator}
        />
      </View>
    )
  }

  renderRow(data, index, leagueSelecthandler) {
    let handler = () => {
      leagueSelecthandler(data)
    }
    return (
      <View key={index}>
        <TouchableHighlight onPress={handler}>
          <View style={styles.row}>
            <Text style={styles.rowTitle}>
              {data.name}
            </Text>
            <Text style={styles.rowDescription}>
              {data.slug} - {data.matches_count} matches
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  renderSeparator = (key) => ( <View key={key} style={styles.separator} /> )
}

LeaguesList.propTypes = {
  allLeagues: PropTypes.array,
  leagueSelecthandler: PropTypes.func
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#fff'
  },
  list: {
    backgroundColor: '#eeeeee'
  },
  row: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingTop: 15
  },
  rowTitle: {
    fontSize: 14,
    fontWeight: '500'
  },
  rowDescription: {
    fontSize: 14,
    color: '#888888',
    lineHeight: 20,
    paddingBottom: 10
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#bbbbbb',
    marginLeft: 15
  },
  searchContainer: {
    backgroundColor: '#FFF',
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#bbbbbb'
  },
  searchInput: {
    backgroundColor: 'white',
    paddingLeft: 20,
    height: 35
  }
})

export default LeaguesList
