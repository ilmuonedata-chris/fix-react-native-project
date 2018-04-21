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
import { onSignIn } from "../../auth";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: ''
    };
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: 'LOGIN'
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{height: 150, width: 150}}
          source={require('../../assets/images/klaslogotext.png')}
        />
        <View style={styles.inputWrapper}>
          <TextInput
            underlineColorAndroid='transparent'
            style={[styles.input, styles.inputBorderBtm]} 
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
            placeholder="Your Email"
            placeholderTextColor="#b3b3b3"
          />
          <TextInput
            underlineColorAndroid='transparent'
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
            Don't have an account?{'  '}
          </Text>
          <Text
            style={styles.anchorLink}
            onPress={() => this.props.navigation.navigate('Signup')}
          >
            Sign Up
          </Text>
        </View>
        <TouchableOpacity style={styles.submitWrapper}>
          <Text 
            style={styles.button}
            onPress={() => {
              onSignIn().then(() => this.props.navigation.navigate("SignedIn"));
            }}
          >
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}