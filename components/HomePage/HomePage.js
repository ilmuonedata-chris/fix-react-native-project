import React, { Component } from 'react';
import { 
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image
} from 'react-native';
import styles from './Stylesheet';

export default class HomePage extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      fname: '',
      lname: '',
      password: ''
    };
  }

  // static navigationOptions = ({ navigation, navigationOptions }) => {
  //   const { params } = navigation.state;

  //   return {
  //     title: 'HOME',
  //     /* These values are used instead of the shared configuration! */
  //     headerStyle: {
  //       backgroundColor: '#fff',
  //       elevation: 0,
  //       shadowOpacity: 0,
  //       shadowColor: 'transparent',
  //       borderBottomColor:'transparent',
  //       borderBottomWidth: 0,
  //     },
  //     headerTitleStyle: {
  //       fontFamily: 'Lato-Regular',
  //       fontWeight: '800',
  //       fontSize: 12,
  //       letterSpacing: 3,
  //       color: '#7a7a7a',
  //     }
  //   };
  // };


  render() {
    return (
      <View style={styles.container}>
        <Text>This is HomePage</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
      </View>
    );
  }
}