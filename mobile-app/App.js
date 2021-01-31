import React from 'react'

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AccountScreen from './src/screens/AccountScreen'
import CreateTrackScreen from './src/screens/CreateTrackScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackDetailsScreen from './src/screens/TrackDetailsScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import ResolveAuthScreen from './src/screens/ResolveAuthScreen'

import { Provider as AuthProvider } from './src/context/authContext'
import { Provider as LocationProvider } from './src/context/locationContext'
import { Provider as TrackProvider } from './src/context/trackContext'

import { setNavigator } from './src/navigationRef'
import { FontAwesome } from '@expo/vector-icons'
import DashboardScreen from './src/screens/DashboardScreen';


const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetails: TrackDetailsScreen
})

trackListFlow.navigationOptions = {
  title: 'tracks',
  tabBarIcon: <FontAwesome name='th-list' size={25} />
}



const switchNavigator = createSwitchNavigator({
  ResolveAuthScreen: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    Dashboard: DashboardScreen,
    trackListFlow,
    CreateTrack: CreateTrackScreen,
    Account: AccountScreen
  })
})

const App = createAppContainer(switchNavigator)

export default () => {
  return (
    <AuthProvider>
      <LocationProvider>
        <TrackProvider>
          <App ref={(navigator) => {setNavigator(navigator)}} />
        </TrackProvider>
      </LocationProvider>
    </AuthProvider>
  )
}