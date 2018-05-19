import React, { Component } from 'react'
import { Text, View } from 'react-native'

class LoginPage extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: 'LOGIN AS TEACHER',
      /* These values are used instead of the shared configuration! */
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
    };
  };

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

export default LoginPage;