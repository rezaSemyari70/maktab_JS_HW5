function shuffle(arr){
    let len = arr.length , temp;
    while(len > 0){
        len--;
        index = Math.floor(Math.random() * len );
        temp = arr[index];
        arr[index] = arr[len];
        arr[len] = temp ;
    }
    return arr ;
}

console.log(shuffle([1,2,3,4,5]));

