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

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetails: TrackDetailsScreen
    }),
    CreateTrack: CreateTrackScreen,
    Account: AccountScreen
  })
})

export default createAppContainer(switchNavigator)