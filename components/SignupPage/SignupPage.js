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

export default class SignupPage extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      fname: '',
      lname: '',
      password: ''
    };
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: 'CREATE ACCOUNT',
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
            style={[styles.input, styles.inputBorderBtm]} 
            onChangeText={(fname) => this.setState({fname})}
            value={this.state.fname}
            placeholder="Your First Name"
            placeholderTextColor="#b3b3b3"
          />
          <TextInput
            style={[styles.input, styles.inputBorderBtm]} 
            onChangeText={(lname) => this.setState({lname})}
            value={this.state.lname}
            placeholder="Your Last Name"
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
            Already have an account?
          </Text>
          <View style={styles.anchorWrapper}>
            <Text
              style={styles.anchorLink}
              onPress={() => this.props.navigation.navigate('Profile')}
            >
              Log in
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.submitWrapper}>
          <Text style={styles.button}>SIGN UP</Text>
        </TouchableOpacity>
        {/* <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Profile')}
        /> */}
      </View>
    );
  }
}