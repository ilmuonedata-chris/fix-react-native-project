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
import commonStyles from '../../common/CommonStyleSheet';
import { Label, Input, Item } from 'native-base';
import styles from './Stylesheet';
import { onSignIn } from "../../auth";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { validateForm } from '../../config/api';
import { loginUser } from '../../actions'

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: '',
      errors: {},
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: 'LOGIN'
    }
  };

  async onSubmit() {
    const loginData = {
      email: this.state.email,
      password: this.state.password,
    };

    try {
      const response = await this.props.loginUser(loginData);
      onSignIn().then(() => this.props.navigation.navigate("SignedIn"));
      console.log('response: ' + JSON.stringify(response));
    } catch (error) {
      const { errorFromStore } = this.props;
      console.log('error from Promise: ' +  JSON.stringify(error));
      console.log('error from Store: ' +  JSON.stringify(errorFromStore));
    }
  }

  onSuccess(data) {
    console.log('Success!');
    console.log(data);
  }

  onError(error) {
    console.log('error');
    console.log(error);
  }

  render() {
    const errors = '';

    return (
      <View style={styles.container}>
        <Image
          style={styles.imageLogo}
          source={require('../../assets/images/klaslogotext.png')}
        />

        <View style={styles.fieldWrapper}>
          <View style={commonStyles.itemWrapper}>
            <Item style={commonStyles.customItem} stackedLabel error={errors.email ? true : false}>
              <Label style={commonStyles.formLabel}>EMAIL ADDRESS</Label>
              <TextInput
                underlineColorAndroid='transparent'
                style={[commonStyles.formInput]} 
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
                placeholder="Your Email Address"
                placeholderTextColor="#b3b3b3"
                autoCapitalize = 'none'
              />
            </Item>
            <Text style={commonStyles.errorMessage}>
              { errors.email ? errors.email : ''}
            </Text>
          </View>

          <View style={commonStyles.itemWrapper}>
            <Item style={commonStyles.customItem} stackedLabel error={errors.password ? true : false}>
              <Label style={commonStyles.formLabel}>PASSWORD</Label>
              <TextInput
                underlineColorAndroid='transparent'
                style={[commonStyles.formInput]} 
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                placeholder="Your Password"
                placeholderTextColor="#b3b3b3"
                secureTextEntry={true}
              />
            </Item>
            <Text style={commonStyles.errorMessage}>
              { errors.password ? errors.password : ''}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.submitWrapper}>
          <Text 
            style={styles.button}
            onPress={this.onSubmit}
          >
            LOGIN
          </Text>
        </TouchableOpacity>
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
        <View style={{marginTop: 5}}>
          <Text
            style={styles.anchorLink}
            onPress={() => this.props.navigation.navigate('TeacherLogin')}
          >
            Teacher Login
          </Text>
        </View>
      </View>
    );
  }
}

LoginPage.propTypes = {
  loginUser: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isLoading: state.authReducer.isLoading,
  errorFromStore: state.authReducer.error,
});

export default connect(mapStateToProps, { loginUser })(LoginPage);