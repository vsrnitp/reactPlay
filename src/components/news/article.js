import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,
  Image,
  ScrollView,
  Form,Button
} from 'react-native';





export default class ArticleComponent extends Component {
  render() {
    const params = this.props.navigation.state.params;
    return (
     <ScrollView style={{backgroundColor:'#0f0f0f'}}>
       <Image 
       style={{height:250}}
       source={{uri:params.image}}
       resizeMode="cover"
       />
       <View style={styles.articleContainer}>
        <View></View>
       </View>
     </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  articleContainer:{
    padding:10
  }
})