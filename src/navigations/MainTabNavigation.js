import { createBottomTabNavigator } from 'react-navigation'
import {Platform} from 'react-native'
import { TabView } from 'react-native-tab-view'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import MatchesView from '../views/MatchesView'
import HomeView from '../views/HomeView'
import NewMatchView from '../views/NewMatchView'

const MainScreenTabNavigator = createBottomTabNavigator({
  Matches: { screen: MatchesView },
  Home: { screen: HomeView },
  NewMatch: { screen: NewMatchView }
},
{
  initialRouteName: 'Home',
  tabBarComponent: Platform.OS === 'ios' ? TabView.TabBarBottom : NavigationComponent,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: '#EEEEEE',
    style: {
      backgroundColor: '#FFFFFF'
    }
  }
})

export default MainScreenTabNavigator