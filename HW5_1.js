//example invalid emails ...

//mysite.ourearth.com [@ is not present]
//mysite@.com.my [ tld (Top Level domain) can not start with dot "." ]
//@you.me.net [ No character before @ ]
//mysite123@gmail.b [ ".b" is not a valid tld ]
//mysite@.org.org [ tld can not start with dot "." ]
//.mysite@mysite.org [ an email should not be start with "." ]
// let specials = ['!','#','$','%','&','(',')','*','+','-','/',':',';','<','=','>','?','@','[','\\',']','^','_' ,'`','{','|','}','~']

let specials = "!#$%&'()*+,-/:;<=>?[\]^`{|}~"

function validate(str){
    let atIndex = str.lastIndexOf('@');
    let dotIndex = str.lastIndexOf('.') ; 
    let cloneStr = str ;
    let res = (
           atIndex < dotIndex && 
           atIndex > 0 && 
           (cloneStr.lastIndexOf('"') < atIndex) &&  
           cloneStr.indexOf('..') && 
           cloneStr.indexOf('@@') &&
           !(cloneStr.indexOf('.') == 0) &&
           cloneStr.split('').slice().filter(item => item == '@').length <= 1 && 
           cloneStr.includes('@')        
    )

    for(let i = 0; i < str.length; i++){
        if(specials.includes(str[i])){
            res = false ;
            break ;
        }
    }

    if(res){
        return "The Email is valid" ;
    }else{
        return "the Email is not valid" ;
    }

} 

console.log(validate("re^za@yahoo.com"));
console.log(validate(".reza@yahoo.com"));
console.log(validate("@reza@yahoo.com"));
console.log(validate("rezayahoo.com"));
console.log(validate("rezayahoo..com"));
console.log(validate("reza@yahoo.com"));

