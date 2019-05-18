const validation = (value,rules,form) => {
let valid = true;
// checking for validation using for loop....

for(let rule in rules){
    switch(rule){
        case "isRequired":
            valid = valid && validateRequired(value)
            break;
        case "isEmail":
             valid = valid && validateEmail(value)
            break;
        case "minLength":
         valid = valid && validateMinLength(value,rules[rule])
             break;
             // can also validate for max length.....

        // for confirm password validation...
        case "confirmPass":
            valid = valid && validateConfirmPass(value,form[rules.confirmPass].value) 
            break;
        default:
            valid = true;

    }
}


return valid;
}
//validating the required feilds...
const validateRequired = value => {
    if(value !== ''){
        return true;
    }
    return false
}

//validating the email feilds...
const validateEmail = email =>{
    const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return expression.test(String(email).toLowerCase());
    
}
//validating min length of password..
const validateMinLength = (value,ruleValue) => {
if(value.length >= ruleValue){
return true
}else{
return false
}
}

//matching the password
const validateConfirmPass = (confirmPass,pass) => {
    return confirmPass === pass
}

export default validation;