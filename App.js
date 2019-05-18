/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Form,Button
} from 'react-native';
import {RootNavigator} from './src/routes/routes';




export default class App extends Component {
  render() {
//from root navigator
const Nav = RootNavigator();

    return (
     <View
     style={{flex:1,backgroundColor:'#fff'}}
     >
    <Nav/>
     </View>
    );
  }
}


