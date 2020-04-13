function uniqueRandom(max , min){
    const res = [];
    let randomNum ;
    for(let i = 0; i < 10; i++){
        randomNum = Math.floor((Math.random() * (max - min)) + min ) ;
        if(!res.includes(randomNum)){
            res.push(randomNum);
        }
    }
    return res ;
}


console.log(uniqueRandom(59999 , 1000));
