import React, { Component } from 'react';
import { Container, Label, Input, Item } from 'native-base';
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
      password: '',
      confirmPass: '',
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
        <View style={styles.formWrapper}>
          <View style={styles.itemWrapper}>
            <Item style={styles.customItem} stackedLabel error={false}>
              <Label style={styles.formLabel}>EMAIL ADDRESS</Label>
              <TextInput
                underlineColorAndroid='transparent'
                style={[styles.formInput]} 
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
                placeholder="Email Address"
                placeholderTextColor="#b3b3b3"
                autoCapitalize = 'none'
              />
            </Item>
            {/* <Text style={styles.errorMessage}>This is an error</Text> */}
          </View>
          <View style={styles.itemWrapper}>
            <Item style={styles.customItem} stackedLabel>
              <Label style={styles.formLabel}>PASSWORD</Label>
              <TextInput
                underlineColorAndroid='transparent'
                style={[styles.formInput]} 
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                placeholder="Password (min. 6 characters)"
                placeholderTextColor="#b3b3b3"
                secureTextEntry={true}
              />
            </Item>
            {/* <Text style={styles.errorMessage}>This is an error</Text> */}
          </View>
          <View style={styles.itemWrapper}>
            <Item style={styles.customItem} stackedLabel>
              <Label style={styles.formLabel}>CONFIRM PASSWORD</Label>
              <TextInput
                underlineColorAndroid='transparent'
                style={[styles.formInput]} 
                onChangeText={(confirmPass) => this.setState({confirmPass})}
                value={this.state.confirmPass}
                placeholder="Confirm Password"
                placeholderTextColor="#b3b3b3"
                secureTextEntry={true}
              />
            </Item>
            {/* <Text style={styles.errorMessage}>This is an error</Text> */}
          </View>
        </View>
        
        <TouchableOpacity style={styles.submitWrapper} onPress={this.onSubmit}>
          <Text style={styles.button}>
            {isLoading ? 'SUBMITTING...' : 'SIGN UP'}
          </Text>
        </TouchableOpacity>
        <View style={styles.textWrapper}>
          <Text style={styles.lightText}>
            Already have an account? {'  '}
          </Text>
          <Text
            style={styles.anchorLink}
            onPress={() => this.props.navigation.goBack()}
          >
            Log in
          </Text>
        </View>
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