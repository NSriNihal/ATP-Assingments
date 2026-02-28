//7. function that recives an array search element as args and returns the index of the search element in the array it should return "not found " if the element is not found



let arr = [10,20,30,40]
let ele = 30;

function Search(arr,ele){
    for(let i =0;i<arr.length;i++){
        if(ele == arr[i]){
            return i;
        }
    }
    return "not found"
}

let a = Search(arr,ele);
console.log(a);