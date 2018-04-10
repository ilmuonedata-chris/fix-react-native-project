/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator, TabNavigator, TabBarBottom, SwitchNavigator } from 'react-navigation';

import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';
import HomePage from './components/HomePage/HomePage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import SearchPage from './components/SearchPage/SearchPage';

import { SignedOut, SignedIn } from "./router";

export default class App extends React.Component {
  render() {
    return <SignedIn />;
  }
}

/*const LoginStack = StackNavigator({
  Login: { screen: LoginPage },
  Signup: { screen: SignupPage },
});

const HomeStack = StackNavigator({
  Home: { screen: HomePage },
});

const ProfileStack = StackNavigator({
  Profile: { screen: ProfilePage },
});

const App = TabNavigator({
  Home: { 
    screen: HomeStack 
  },
  Profile: { 
    screen: ProfileStack 
  },
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = `ios-home${focused ? '' : '-outline'}`;
      } else if (routeName === 'Profile') {
        iconName = `ios-contact${focused ? '' : '-outline'}`;
      }

      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
});
export default LoginStack;*/

console.disableYellowBox = true;