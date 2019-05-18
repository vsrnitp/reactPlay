

import React, {Component} from 'react';
import {Platform, ScrollView,ActivityIndicator,
   StyleSheet, Text, View,Form,Button
} from 'react-native';
import LogoComponent from './authLogo'; 
import AuthForm  from './authForm';
import {getTokens,setTokens} from '../../utils/misc'; 
//doing the redux logic....
import { connect } from 'react-redux';
import{ autoSignIn }  from '../../store/actions/user_action';
import { bindActionCreators } from 'redux';



 class AuthComponent extends Component {
  
  state = {
    loading:true
  }

  // to reroute to the next page....
  goNext = () => {
    this.props.navigation.navigate('App')
  }

  componentDidMount(){
    getTokens((value)=>{
      if(value[0][1]===null){
        this.setState({loading:false})
      }
      else{
        this.props.autoSignIn(value[1][1])
        .then(()=>{
          if(!this.props.User.auth.token){
          this.setState({loading:false})
          }
          else{
            setTokens(this.props.User.auth,()=>{
              this.goNext();
            })
          }
        })
      }
    })
  }

  render() {
    if(this.state.loading){
      return (
      <View style={styles.loading}>
      <Text style={styles.loadText}>
      Hang in there tightly....Logging you in....!!!
      </Text>
      <ActivityIndicator
      size="large"
      color="green"
      />
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
  justifyContent:'center' ,
  marginTop:"90%"
},
loadText:{
  color:'blue',
  textAlign:'center',
  marginBottom:"10%",
  fontSize:20
}
})

//connecting the redux....
function mapStateToProps(state){
  //console.warn(state)
    return{
        User:state.User
    }
    
}

function mapDispacthToProps(dispatch){
    return bindActionCreators({autoSignIn},dispatch);
}

export default connect(mapStateToProps,mapDispacthToProps)(AuthComponent);