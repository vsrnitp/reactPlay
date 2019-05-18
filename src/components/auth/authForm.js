import React, {Component} from 'react';
import {Platform, ScrollView,ActivityIndicator,
   StyleSheet, Text, View,Form,Button
} from 'react-native';
import Input from '../../utils/forms/input';
import ValidationRules from '../../utils/forms/validationRules';



class AuthForm extends Component {

    state = {
        type:'Login',
        action:'Login',
        actionMode:'I want to register',
        hasErrors:false,
        form:{
            email:{
                value:"",
                valid:false,
                type:"textinput",
                rules:{
                    isRequired:true,
                    isEmail:true
                }
            },
            password:{
                value:"",
                valid:false,
                type:"textinput",
                rules:{
                    isRequired:true,
                    minLength:6
                }
            },
            confirmPassword:{
                value:"",
                valid:false,
                type:"textinput",
                rules:{
                    confirmPass:'password'
                }
            }
        }
    }

    formHasErrors = () => (
        this.state.hasErrors ? 
        <View style={styles.errorContainer}>
            <Text style={styles.errorLabel}>Oops....something wrong..</Text>
        </View>
        :null
    )

    confirmPassword = () => (
        this.state.type != 'Login' ?
        <Input
        placeholder="Confirm your password"
        placeholderTextColor="#cecece"
        type={this.state.form.confirmPassword.type}
        value={this.state.form.confirmPassword.value}
        onChangeText ={value => this.updateInput("confirmPassword",value)}
       secureTextEntry
        />
        :null
    )

    // creating the input updation functions....

    updateInput = (name,value) => {
        this.setState({
            hasErrors:false
        });

        let formCopy = this.state.form;
        formCopy[name].value = value;

        // checking the rules before updating the input
        let rules = formCopy[name].rules;
        let valid = ValidationRules(value,rules,formCopy);

        formCopy[name].valid = valid;

        // checking if valid or not....
      alert(valid)
                //updating the original state...
        this.setState({
            form:formCopy
        })
    }

    //submitting the user details...
    submitUser = () => {

    }

    // changing the form type from login to register..
    changeFormType = () => {
        const type = this.state.type;
        // better to make a copy of set state....
        this.setState({
            type: type === 'Login' ? 'Register' : 'Login',
            action: type === 'Login' ? 'Register' : 'Login',
            actionMode: type === 'Login' ? 'I want to Login' :'I want to Register'
        })
    }

    render(){
        return(
            <View>
                <Input
                placeholder="Enter email"
                placeholderTextColor="#cecece"
                type={this.state.form.email.type}
                value={this.state.form.email.value}
                autocapitalize={"none"}
                keyboardType={"email-address"}
                onChangeText ={value => this.updateInput("email",value)}
                />

                <Input
                placeholder="Enter your password"
                placeholderTextColor="#cecece"
                type={this.state.form.password.type}
                value={this.state.form.password.value}
                onChangeText ={value => this.updateInput("password",value)}
               secureTextEntry
                />

                {this.confirmPassword()}

                {this.formHasErrors()}

            <View style={{marginTop:20}}>
            <View style={styles.button}>
            <Button
            title={this.state.action}
            onPress = {this.submitUser}
            />
            </View>
            
            <View style={styles.button}>
            <Button
            title={this.state.actionMode}
            onPress = {this.changeFormType}
            />
            </View>

            <View style={styles.button}>
            <Button
            title="I'll do it Later"
            onPress = {()=> this.props.goNext()}
            />
            </View>

            </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    errorContainer:{
        marginBottom:10,
        marginTop:30,
        padding:10,
        backgroundColor:'#f44336'

    },
    errorLabel:{
        color:'#fff',
        textAlign:'center',
        textAlign:'center'
    },
    button:{
        marginBottom:5
    }
})

export default AuthForm;