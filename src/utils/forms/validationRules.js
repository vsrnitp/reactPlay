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

export default validation;