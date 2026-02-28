//write a function that recives 3 number args and return the big number

function big(a,b,c){
    if(a>b){
        if(a>c){
            return a
        }
        else{
            return c
        }
    }
    else if(a<b){
        if(c<b){
            return b
        }
        else{
            return c
        }
    }
}

let a = big(120,1300,98)

console.log(`the bigger number is ${a}`)