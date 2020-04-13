function checkUnique(userName , listUsers){
    let ans = listUsers.includes(userName);
    if(ans){
        console.error("the user name exist!");
    }else{
        return "the user name is valid" ;
    }
}

