function dynamicRange(range1, range2, num){
    return (num + "in (" + range1[0] + "~" + range1[1] + ") Range; is " +
        (range2[0] + (((num - range1[0])*(range2[1] - range2[0]))/(range1[1] - range1[0])) ) +
        " in (" + range2[0] + "~" +range2[1] + ") Range");
}

console.log(dynamicRange([1,80],[30,99.5],3));