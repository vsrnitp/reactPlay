/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Form,Button} from 'react-native';
import { Icon } from 'react-native-vector-icons/FontAwesome';



export default class App extends Component {
  render() {
    return (
      <View style={{backgroundColor:'grey',height:'100%'}}>

     <Text>
      Hey there..
     </Text>

      </View>
    );
  }
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});*/
