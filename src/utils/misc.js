export const FIREBASEURL = `https://smedia-2bddc.firebaseio.com`;
export const APIKEY = `AIzaSyDVpYJAXj9RJpcDwywHsw72EErprZUo-mc`;
export const SIGNUP = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${APIKEY}`;
export const SIGNIN = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${APIKEY}`;
export const REFRESH = `https://securetoken.googleapis.com/v1/token?key=${APIKEY}`;

//storing the data into the phone's dedicated memory...(Async storage) 
import AsyncStorage from '@react-native-community/async-storage';

export const getTokens = (cb) => {

    AsyncStorage.multiGet([
        '@sMedia@token',
        '@sMedia@refreshToken',
        '@sMedia@expToken',
        '@sMedia@uid',
    ]).then(value=>{
        cb(value)
    }
       
    )

}

export const setTokens = (values,cb) =>{ 
const dateNow = new Date();
const expiration = dateNow.getTime()+(3600*1000);

AsyncStorage.multiSet([
    ['@sMedia@token',values.token],
    ['@sMedia@refreshToken',values.refToken],
    ['@sMedia@expToken',expiration.toString()],
    ['@sMedia@uid',values.uid],
]).then(
    cb()
)

}