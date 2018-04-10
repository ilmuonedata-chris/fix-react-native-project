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

export default class LoginPage extends Component<{}> {
  
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: ''
    };
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: 'LOGIN',
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
      <View style={styles.container}>
        <Image
          style={{height: 150, width: 150}}
          source={require('../../assets/images/klaslogotext.png')}
          resizeMode="contain"
        />
        <View style={styles.inputWrapper}>
          <TextInput
            style={[styles.input, styles.inputBorderBtm]} 
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
            placeholder="Your Email"
            placeholderTextColor="#b3b3b3"
          />
          <TextInput
            style={styles.input} 
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            placeholder="Your Password"
            placeholderTextColor="#b3b3b3"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.lightText}>
            Don't have an account?
          </Text>
          <View style={styles.anchorWrapper}>
            <Text
              style={styles.anchorLink}
              onPress={() => this.props.navigation.navigate('Signup')}
            >
              Sign Up
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.submitWrapper}>
          <Text style={styles.button}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}