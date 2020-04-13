function validateUserName(str){
    let len = str.length ;
    let res = (len >= 3 && len <= 9 && 
    str.slice().split('').filter(item => item == '.' ).length <= 1  &&
    str.slice().split('').filter(item => item == '_' ).length <= 1 ) ;
    if(res){
        return "the user name is valid" ;
    }else{
        return "the user name is not valid" ;
    }
}

console.log(validateUserName('reza_sem'));
console.log(validateUserName('r.s_sem'));
console.log(validateUserName('r.semyari_70'));
console.log(validateUserName('r.s.emyar'));

