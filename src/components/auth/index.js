

import React, {Component} from 'react';
import {Platform, ScrollView,ActivityIndicator,
   StyleSheet, Text, View,Form,Button
} from 'react-native';
import LogoComponent from './authLogo'; 
import AuthForm  from './authForm';



export default class AuthComponent extends Component {
  
  state = {
    loading:false
  }

  goNext = () => {
    this.props.navigation.navigate('App')
  }

  render() {
    if(this.state.loading){
      return (
      <View style={styles.loading}>
      <ActivityIndicator/>
      </View>
      )
    }else{
      return (
        <ScrollView style={styles.container}>
          <View>
          <LogoComponent/>
          <AuthForm
          // we will catch the goNext function here...
          goNext={this.goNext}
          />
          </View>
        </ScrollView>
       );
    }
    
  }
}

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'#1d428a',
  padding:50
},
loading:{
  backgroundColor:'#fff',
  alignItems:'center',
  justifyContent:'center' 
}
})


