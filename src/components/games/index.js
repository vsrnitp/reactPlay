import React, {Component} from 'react';
import {Platform, StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Text, View,Form,Button,
  ActivityIndicator
} from 'react-native';
import {connect} from 'react-redux';

import {getGames} from '../../store/actions/games_action';
import Moment from 'moment';





class GamesComponent extends Component {

componentDidMount(){
  //console.warn(getGames());
  this.props.dispatch(getGames())
}

showGames = (list) => {
 //console.warn(list.games)
 return(
  list.games ?
  
    list.games.map((item,i)=>(
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Article',{
        ...item
      })}
      key={i}
      >
      
      <Text>Hello...</Text>
      </TouchableOpacity>
    ))
   

  : <ActivityIndicator size="large"/>
 )
}

  render() {
    return (
    <ScrollView style={{backgroundColor:'#fff'}}>
       <View style={{flex:1,flexDirection:'column',flexWrap:'nowrap'}}>
        {this.showGames(this.props.Games)}
      
       </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

})


function mapStateToProps(state){
//console.warn(state);
  return {
    Games:state.Games
  }
}

export default connect(mapStateToProps)(GamesComponent);