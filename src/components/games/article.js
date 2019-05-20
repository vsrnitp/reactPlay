import React, {Component} from 'react';
import {Platform, StyleSheet, 
  ActivityIndicator,
  Text, View,Form,Button,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Video from 'react-native-video';
import { connect } from 'react-redux';
import{ autoSignIn }  from '../../store/actions/user_action';
import { getTokens, setTokens } from '../../utils/misc';




class GameArticleComponent extends Component {
  state={
    loading:true,
    isAuth:true
  }

  manageState(loading,isAuth){
    this.setState({
        loading,
        isAuth
    })
  }


componentDidMount(){
  const user = this.props.User;

  getTokens((value)=>{
    if(value[0][1]===null){
      this.manageState(false,false)
    }else{
      this.props.dispatch(autoSignIn(value[1][1]))
      .then(()=>{
        !user.auth.token ? 
        this.manageState(false,false)
        : 
        setTokens(user.auth,()=>{
          this.manageState(false,true)
        })
      })
    }
  })
}

  render() {
    const params = this.props.navigation.state.params;

    if(this.state.loading){
      return(
      <View style={styles.loading}>
      <ActivityIndicator size="large"/>
      </View>
      )
    }else{
      return(
        <ScrollView style={{backgroundColor:'#f0f0f0'}}>
          {
            this.state.isAuth?
           <Video
           source={{uri:params.play}}
           muted={false}
           paused={true}
           controls={true}
           style={{width:'100%',height:250}}
           />
            :
            <View style={styles.notAuth}>
               <Icon
               name="md-sad"
               size={80}
               color="#d5d5d5"
               />
               <Text style={styles.notAuthText}>
               Sorry....
               You need to be authenticated to see the game videos...!
               </Text>
               <Button
               title="Login/Register"
               onPress={()=>this.props.navigation.navigate('Auth')}
               />
            </View>
          }
        </ScrollView>
      )

    }
      
  }
}


const styles = StyleSheet.create({
  loading:{
    backgroundColor:"#fff",
    alignItems:'center',
    flex:1,
    justifyContent:'center'
  },
  notAuth:{
    flex:1,
    margin:50,
    justifyContent:'center',
    alignItems:'center'
  },
  notAuthText:{
    fontFamily:'Roboto-Bold'
  }
})


//connecting the redux....
function mapStateToProps(state){
  //console.warn(state)
    return{
        User:state.User
    }
    
}

export default connect(mapStateToProps)(GameArticleComponent)