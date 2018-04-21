/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import { Provider } from 'react-redux';
// import configureStore from './configureStore';
import AppContainer from './AppContainer';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

console.disableYellowBox = true;

export default App;