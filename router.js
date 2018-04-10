import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { 
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  SwitchNavigator
} from 'react-navigation';

import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';
import HomePage from './components/HomePage/HomePage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import SearchPage from './components/SearchPage/SearchPage';

// SignedOut Pages or First Landing Page
export const SignedOut = StackNavigator({
  Login: {
    screen: LoginPage,
  },
  Signup: {
    screen: SignupPage,
  },
});

const HomeStack = StackNavigator({
  Home: { 
    screen: HomePage,
    navigationOptions: {
      title: 'HOME',
      headerStyle: {
        backgroundColor: '#fff',
        elevation: 0,
        shadowOpacity: 0,
        shadowColor: 'transparent',
        borderBottomColor:'transparent',
        borderBottomWidth: 0,
      },
      headerTitleStyle: {
        fontFamily: 'Lato-Regular',
        fontWeight: '800',
        fontSize: 12,
        letterSpacing: 3,
        color: '#7a7a7a',
      }
    }
  },
});

const ProfileStack = StackNavigator({
  Profile: { 
    screen: ProfilePage,
    navigationOptions: {
      title: 'PROFILE',
      headerStyle: {
        backgroundColor: '#fff',
        elevation: 0,
        shadowOpacity: 0,
        shadowColor: 'transparent',
        borderBottomColor:'transparent',
        borderBottomWidth: 0,
      },
      headerTitleStyle: {
        fontFamily: 'Lato-Regular',
        fontWeight: '800',
        fontSize: 12,
        letterSpacing: 3,
        color: '#7a7a7a',
      }
    }
  },
});

// Pages after signed in
export const SignedIn = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="home" size={30} color={tintColor} />
      )
    }
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="user" size={30} color={tintColor} />
      )
    }
  }
});

// Root Navigator: determine the root navigator
export const createRootNavigator = (signedIn = false) => {
  return SwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};
