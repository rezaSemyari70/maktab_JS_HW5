function validPhonNumber(str){
    let res ;
    res = (str.length == 11  &&  
          str.slice(0,3) == '091'  &&  
          +str == str && !str.split('').includes('.'))
    if(res){
        return "The phone number is valid" ;
    }else{
        return "the phone number is not valid" ;
    }
}

console.log(validPhonNumber('09121734212'));


//-----------------------------------

//function with Regular Expressions
function validPhonNumberRegExp(str){
    let res =  /^(\+98|0)?9\d{9}$/g.test(str)  ;
    if(res){
        return "The phone number is valid" ;
    }else{
        return "the phone number is not valid" ;
    }
}

console.log(validPhonNumberRegExp('09128792125'));



