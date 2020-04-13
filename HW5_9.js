function georgianToJalaali(date){
    date.setFullYear(date.getFullYear() - 621 ) ;
    date.setMonth(date.getMonth() - 3) ;
    date.setDate(date.getDate() + 12) ;
    return [date.getFullYear() , date.getMonth() + 1, date.getDate()].join('/') ;
    
}

console.log(georgianToJalaali(new Date('2015-4-28')));
