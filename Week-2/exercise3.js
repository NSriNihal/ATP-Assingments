//write a function that recives any number of args and return their sum

function findSum(...a){
 

    let sum = a.reduce((acc , val)=>acc+val)
    return sum
    
 }

console.log(findSum(10,20,30))