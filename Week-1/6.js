//6. recive array as argument and return as a sum
let arr = [10,20,30,40,50]

function sumOfArray(arr){
    let sum =0;
    for(i=0;i<arr.length;i++){
        sum = sum+arr[i]
    }
    return sum
}

let a = sumOfArray(arr);
console.log(` sum is ${a}`)