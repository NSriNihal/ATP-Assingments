// ASSIGNMENT 1:
// -------------
// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
// const cart = [
//   { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
//   { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
//   { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
//   { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
// ];

// Tasks:
//     1. Use filter() to get only inStock products
//     2. Use map() to create a new array with:  { name, totalPrice }
//     3. Use reduce() to calculate grand total cart value
//     4. Use find() to get details of "Mouse"
//     5. Use findIndex() to find the position of "Keyboard"


const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//     1. Use filter() to get only inStock products
let allowed = cart.filter((available)=> available.inStock===true)
console.log(allowed)

//     2. Use map() to create a new array with:  { name, totalPrice }
let newArray = cart.map((item)=>{
  return{
    itemname :item.name,
    totalprice: item.price*item.quantity
  }
}
)
console.log(newArray)
//     3. Use reduce() to calculate grand total cart value
let totalValue = cart.reduce((Accum,value)=>Accum+value.price*value.quantity,0)
console.log(totalValue)

//     4. Use find() to get details of "Mouse"
let mouse = cart.find((item)=>item.name === "Mouse")
console.log(mouse)

//     5. Use findIndex() to find the position of "Keyboard"

let findKeyboard = cart.findIndex((item)=>item.name === "Keyboard")
console.log(findKeyboard)