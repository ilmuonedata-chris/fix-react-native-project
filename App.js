/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { isSignedIn } from "./auth";
import { SignedOut, SignedIn, createRootNavigator } from "./router";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentDidMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred"));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
      return null;
    }

    const Layout = createRootNavigator(signedIn);
    return <Layout />;

    // if (signedIn) {
    //   return <SignedIn />;
    // } else {
    //   return <SignedOut />;
    // }

  }
}

console.disableYellowBox = true;