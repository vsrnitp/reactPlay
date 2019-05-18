import React, {Component} from 'react';
import {Platform, ScrollView,ActivityIndicator,
   StyleSheet, Text, View,Form,Button,TextInput,Picker
} from 'react-native';

const input = (props) => {
let template = null;

switch(props.type){
case "textinput":
    template = 
    <TextInput
    {...props}
    style={[styles.input,props.overrideStyle]}
    />
break;
default:
    return template;
}

return template;
}

const styles = StyleSheet.create({
    input:{
        width:'100%',
        borderBottomWidth:2,
        borderBottomColor:'#fff',
        fontSize:16,
        marginTop:10,
        color:'#fff',
        fontSize:17

    }
})

export default input;