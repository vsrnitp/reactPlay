import React from 'react';
import {Platform, ScrollView,ActivityIndicator,
    StyleSheet, Text, View,Form,Button,
    Image
 } from 'react-native';
 
import LogoImage from '../../assets/images/nba_login_logo.png';

 const LogoComponent = () =>(
<View style={{alignItems:'center'}}>
<Image
source={LogoImage}
resizeMode ={'center'}
style={{
    width:170,
    height:150
}}
/>
</View>
 )

 export default LogoComponent;

 