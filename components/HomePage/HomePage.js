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