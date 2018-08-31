import { createBottomTabNavigator } from 'react-navigation'
import {Platform} from 'react-native'
import { TabView } from 'react-native-tab-view'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import MatchesView from '../views/MatchesView'
import HomeView from '../views/HomeView'
import NewMatchView from '../views/NewMatchView'
import SettingsView from '../views/SettingsView'

const MainScreenTabNavigator = createBottomTabNavigator({
  Matches: { screen: MatchesView },
  Home: { screen: HomeView },
  NewMatch: { screen: NewMatchView },
  Settings: { screen: SettingsView }
},
{
  initialRouteName: 'Home',
  // initialRouteName: 'NewMatch',
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
