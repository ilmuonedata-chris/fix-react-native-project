import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialIcons';
import { 
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  SwitchNavigator
} from 'react-navigation';
import { Button, Text, View } from 'react-native';

import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';
import HomePage from './components/HomePage/HomePage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import SearchPage from './components/SearchPage/SearchPage';

const headerStyling = {
  backgroundColor: '#fff',
  elevation: 0,
  shadowOpacity: 0,
  shadowColor: 'transparent',
  borderBottomColor:'transparent',
  borderBottomWidth: 0,
};

const headerTitleStyling = {
  fontFamily: 'Lato-Regular',
  fontWeight: '800',
  fontSize: 12,
  letterSpacing: 3,
  color: '#7a7a7a',
};

// SignedOut Pages or First Landing Page
export const SignedOut = StackNavigator({
  Login: {
    screen: LoginPage,
    title: 'LOGIN',
    navigationOptions: {
      headerStyle: headerStyling,
      headerTitleStyle: headerTitleStyling
    }
  },
  Signup: {
    screen: SignupPage,
    navigationOptions: ({navigation}) => ({
      headerLeft: (
        <View style={{marginLeft: 20}}>
          <Material 
            name="keyboard-backspace"
            backgroundColor="transparent"
            size={30}
            color="#cdccd8" 
            onPress={() => {
              navigation.goBack()
            }}
          />
        </View>
      ),
    })
  },
});

/* --- Signed in Navigations ---- */
const HomeStack = StackNavigator({
  Home: { 
    screen: HomePage,
    navigationOptions: {
      title: 'HOME',
      headerStyle: headerStyling,
      headerTitleStyle: headerTitleStyling
    }
  },
});

const SearchStack = StackNavigator({
  Search: {
    screen: SearchPage,
    navigationOptions: {
      title: 'SEARCH',
      headerStyle: headerStyling,
      headerTitleStyle: headerTitleStyling
    }
  }
});

const ProfileStack = StackNavigator({
  Profile: { 
    screen: ProfilePage,
    navigationOptions: {
      title: 'PROFILE',
      headerStyle: headerStyling,
      headerTitleStyle: headerTitleStyling
    }
  },
});

// Pages after signed in
export const SignedIn = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      title: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Material name="home" size={30} color={tintColor} />
      )
    }
  },
  Search: {
    screen: SearchStack,
    navigationOptions: {
      title: 'Search',
      tabBarIcon: ({ tintColor }) => (
        <Material name="search" size={30} color={tintColor} />
      )
    }
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      title: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-contact" size={30} color={tintColor} />
      )
    }
  }
},
{
  tabBarOptions: {
    // showLabel: false,
    activeTintColor: '#00b16e',
    tabStyle: {
      borderColor: 300
    },
    style: {
      backgroundColor:'#f6f6f6',
    },
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
}
);

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
