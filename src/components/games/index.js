import React, {Component} from 'react';
import {Platform, StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Text, View,Form,Button
} from 'react-native';
import {connect} from 'react-redux';

import {getGames} from '../../store/actions/games_action';
import Moment from 'moment';





class GamesComponent extends Component {

componentDidMount(){
  this.props.dispatch(getGames())
}

  render() {
    return (
     <View>
    <Text>Hello....games login</Text>
     </View>
    );
  }
}



function mapStateToProps(state){
  console.warn(state);
  return {
    Games:state.Games
  }
}

export default connect(mapStateToProps)(GamesComponent);