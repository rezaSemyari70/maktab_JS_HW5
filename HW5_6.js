function mergObjects(arr){
    let ans = {} ,res = [];
    for(let val of arr){
        res.push(val);
    }
    return Object.assign(ans , ...res) ;
    
}

console.log(mergObjects([ {name:"john" , age:28} , {userName:"ali" , pass:"ke@89"} ]) );
