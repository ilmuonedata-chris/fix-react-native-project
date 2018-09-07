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
import DiscoverPage from './components/DiscoverPage/DiscoverPage';
import TeacherPage from './components/TeacherPage/TeacherPage';
import SchedulePage from './components/SchedulePage/SchedulePage';

const headerStyling = {
  backgroundColor: '#fff',
  elevation: 0,
  shadowOpacity: 0,
  shadowColor: 'transparent',
  borderBottomColor:'#f3f3f3',
};

const headerTitleStyling = {
  fontFamily: 'Lato-Regular',
  fontWeight: '800',
  fontSize: 12,
  letterSpacing: 3,
  color: '#7a7a7a',
};

// Template for custom back btn on headerLeft
const customBackBtn = (navigation) => {
  return (
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
  );
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
      headerLeft: (customBackBtn(navigation)),
      headerStyle: headerStyling,
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
  },
  Discover: {
    screen: DiscoverPage,
    navigationOptions: ({navigation}) => ({
      headerLeft: (customBackBtn(navigation)),
      headerRight: (
        <View style={{marginRight: 20}}>
          <Material 
            name="tune"
            backgroundColor="transparent"
            size={30}
            color="#cdccd8" 
            onPress={() => {
              navigation.goBack()
            }}
          />
        </View>
      ),
      headerStyle: headerStyling,
      tabBarVisible: false,
    })
  },
  Teacher: {
    screen: TeacherPage,
    navigationOptions: ({navigation}) => ({
      headerLeft: (customBackBtn(navigation)),
      headerRight: (
        <View style={{marginRight: 20}}>
          <Material 
            name="bookmark-border"
            backgroundColor="transparent"
            size={30}
            color="#00b16e" 
            onPress={() => {
              navigation.goBack()
            }}
          />
        </View>
      ),
      headerStyle: headerStyling,
      tabBarVisible: false,
    })
  },
  Schedule: {
    screen: SchedulePage,
    navigationOptions: ({navigation}) => ({
      headerLeft: (customBackBtn(navigation)),
      headerStyle: headerStyling,
      tabBarVisible: false,
    })
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

// FOR TESTING PURPOSE ONLY - DELETE BEFORE DEPLOYMENT!!!
const CurrentStack = StackNavigator({
  Schedule: {
    screen: SchedulePage,
    navigationOptions: ({navigation}) => ({
      headerStyle: headerStyling,
    })
  }
});
// FOR TESTING PURPOSE ONLY - DELETE BEFORE DEPLOYMENT!!!

// Pages after signed in
export const SignedIn = TabNavigator({
  Schedule: {
    screen: CurrentStack,
    navigationOptions: {
      title: 'Schedule',
      tabBarIcon: ({ tintColor }) => (
        <Material name="dashboard" size={30} color={tintColor} />
      )
    }
  },
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
  },
},
{
  tabBarOptions: {
    showLabel: false,
    activeTintColor: '#00b16e',
    inactiveTintColor: '#c0c0c0',
    style: {
      backgroundColor:'white',
      borderTopColor: '#f3f3f3'
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
      initialRouteName: signedIn ? "SignedIn" : "SignedIn"
    }
  );
};
