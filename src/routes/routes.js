import React from 'react';
import {Platform} from 'react-native';
//bringing the navigators..
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer,
    createSwitchNavigator
}
 from 'react-navigation';

 // importing the screens

 import SignIn from '../components/auth';
 import News from '../components/news';
 import Games from '../components/games';

 // creating the bottom tab navigator....
 const AppStack = createBottomTabNavigator({
     News:News,
     Games:Games
 });
//creating the initial signin stack....
 const AuthStack = createStackNavigator({
     SignIn:SignIn
 },{
     //if you dont want to get a header...
     headerMode:'none'
 })

 export const RootNavigator = () => {
     return createAppContainer(createSwitchNavigator({
        App:AppStack,
        Auth:AuthStack 
     },{

         initialRouteName:'Auth'
     }))
 }
