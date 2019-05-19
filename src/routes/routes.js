import React from 'react';
import {Platform} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

//bringing the navigators..
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer,
    createSwitchNavigator,
    createDrawerNavigation
}
 from 'react-navigation';

 // importing the screens

 import SignIn from '../components/auth';
 import News from '../components/news';
 import Games from '../components/games';
 import Article from '../components/news/article';
 import GameArticle from '../components/games/article';
 import Logout from '../components/other/logout';

 // importing header logo
 import Logo from '../utils/logo';
//creating header conf
const headerConf = {
    headerLayoutPreset:'center',
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#001338'
        },
        headerTintColor:'white',
        headerTitle:Logo
    }
}

//news stack....
const NewsStack = createStackNavigator({
News:News,
Article:Article
},headerConf);

//game stack...
const GameStack = createStackNavigator({
    Games:Games,
    Article:GameArticle
    },headerConf);

 // creating the bottom tab navigator....
 const AppStack = createBottomTabNavigator({
     News:NewsStack,
     Games:GameStack
 },{
     tabBarOptions:{
         activeTintColor:'white',
         showLabel:true,
         activeBackgroundColor:'#001338',
         inactiveBackgroundColor:'#00194b',
         style:{
            backgroundColor:'#001338'
         }
     },
     initialRouteName:'News',
     defaultNavigationOptions:({navigation})=>({
        tabBarIcon:({focused,horizontal,tintColor})=>{
            const {routeName} = navigation.state;
            let iconName;
            if(routeName === 'News'){
                iconName = `ios-basketball`;
            }else{
                iconName = `md-tv`;
            }



            return <Ionicons
            name={iconName} size={25} color={tintColor}
            />

        }
     })
 });
//creating the initial signin stack....
 const AuthStack = createStackNavigator({
     SignIn:SignIn
 },{
     //if you dont want to get a header...
     headerMode:'none'
 })

 // drawer navigation bar...
 /*const logout = createDrawerNavigation({
   Logout:Logout
 })*/

 export const RootNavigator = () => {
     return createAppContainer(createSwitchNavigator({
        App:AppStack,
        Auth:AuthStack ,
      
     },{

         initialRouteName:'Auth'
     }))
 }
