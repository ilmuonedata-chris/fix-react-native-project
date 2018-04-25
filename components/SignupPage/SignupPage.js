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
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions'

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      fname: '',
      lname: '',
      password: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit() {
    const newUser = {
      email: this.state.email,
      password: this.state.password
    };

    try {
      const response = await this.props.registerUser(newUser);
      console.log('response: ' + JSON.stringify(response));
    } catch (error) {
      console.log('error: ' +  JSON.stringify(error));
    }
    // this.props.registerUser(newUser, this.onSuccess, this.onError)
  }

  onSuccess(data) {
    console.log('Success!');
    console.log(data);
  }

  onError(error) {
    console.log('error');
    console.log(error);
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
    const { isLoading } = this.props;
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
            placeholder="Email Address"
            placeholderTextColor="#b3b3b3"
            autoCapitalize = 'none'
          />
          <TextInput
            underlineColorAndroid='transparent'
            style={[styles.input, styles.inputBorderBtm]} 
            onChangeText={(fname) => this.setState({fname})}
            value={this.state.fname}
            placeholder="First Name"
            placeholderTextColor="#b3b3b3"
          />
          <TextInput
            underlineColorAndroid='transparent'
            style={[styles.input, styles.inputBorderBtm]} 
            onChangeText={(lname) => this.setState({lname})}
            value={this.state.lname}
            placeholder="Last Name"
            placeholderTextColor="#b3b3b3"
          />
          <TextInput
            underlineColorAndroid='transparent'
            style={styles.input} 
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            placeholder="Password"
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
              onPress={() => this.props.navigation.goBack()}
            >
              Log in
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.submitWrapper} onPress={this.onSubmit}>
          <Text style={styles.button}>
            {isLoading ? 'SUBMITTING...' : 'SIGN UP'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

SignupPage.propTypes = {
  registerUser: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isLoading: state.authReducer.isLoading
});

export default connect(mapStateToProps, { registerUser })(SignupPage);