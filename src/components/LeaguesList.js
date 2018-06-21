import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, TextInput, View, ListView, TouchableHighlight } from 'react-native'

type DataItem = {
  title: string;
  description: string;
}

const FILTER_TEXT = 'Select your league'
const EMPTY_TEXT = 'there is no leagues matching previous search'

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged: (h1, h2) => h1 !== h2
})


class LeaguesList extends Component {

  constructor(props) {
    super(props)
    this.renderRow = this.renderRow.bind(this)
    this.renderSeparator = this.renderSeparator.bind(this)
  }

  state = {
    filter: ''
  }

  filterDatasource (text) {
    const safe = String(text || '').replace(/([.*^$+?!(){}[\]/\\])/g,'\\$1')
    const regex = new RegExp(safe, 'i')
    const filter = (row) => regex.test(row.title)
    // var out = {}
    // for(var sectionID in this.props.leaguesList){
    // if(!this.props.leaguesList.hasOwnProperty(sectionID)){
    //     continue
    //   }
    //
    //   out[sectionID] = this.props.leaguesList[sectionID].data.filter(filter)
    // }
    const beqdenus = this.props.allLeagues
    // console.log({beqdenus})
    return (beqdenus)
  }

  render() {
    const dataSource = this.filterDatasource(this.state.filter)
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            onChangeText={(filter) => this.setState({filter})}
            value={this.state.filter}
            placeholder={FILTER_TEXT}
            testID="explorer_search" />
        </View>
        <FlatList
          style={styles.list}
          enableEmptySections={false}
          data={this.filterDatasource()}
          renderItem={ ({item}) => (this.renderRow(item))}
        />
        {/* <ListView
          style={styles.list}
          dataSource={dataSource}
          renderRow={this.renderRow}
          renderSeparator={this.renderSeparator}
          enableEmptySections={false}
        /> */}
      </View>
    )
  }

  renderRow(data) {
    let handler = () => {
      console.log(data)
    }
    return (
      <View key={data.id}>
        <TouchableHighlight onPress={handler}>
          <View style={styles.row}>
            <Text style={styles.rowTitle}>
              {data.name}
            </Text>
            <Text style={styles.rowDescription}>
              {data.name}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  renderSeparator = (key) => ( <View key={key} style={styles.separator} /> )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:25,
    backgroundColor: '#fff'
  },
  list: {
    backgroundColor: '#eeeeee'
  },
  row: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingTop: 25
  },
  rowTitle: {
    fontSize: 14,
    fontWeight: '500'
  },
  rowDescription: {
    fontSize: 14,
    color: '#888888',
    lineHeight: 20
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
