import React, { Component } from 'react';
import { 
  StyleSheet,
  Button,
  View,
  Text 
} from 'react-native';

export default class ProfilePage extends Component<{}> {
  static navigationOptions = {
    title: 'Profile Page',
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});