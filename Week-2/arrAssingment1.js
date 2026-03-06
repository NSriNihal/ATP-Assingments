// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
// const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. filter() temperatures above 35
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28

 const temperatures = [32, 35, 28, 40, 38, 30, 42];

 //1. filter() temperatures above 35
 const tempAbove35 = temperatures.filter((values)=>values>35)
 console.log("tempratures above 35 :",tempAbove35)

 //2. filter() temperatures above 35
const Fahrenheit = temperatures.map((value)=>value*1.8+32)
console.log("fahrenheit values :",Fahrenheit)

//3. reduce() to calculate average temperature

const averageTemp = temperatures.reduce((acc,val)=>(acc+val))
console.log("Average temprature : ",averageTemp/temperatures.length)

//4. find() first temperature above 40
const firstAbove40 = temperatures.find((value) =>value>40)
console.log("first temp >40:",firstAbove40)

//5. findIndex() of temperature 28
const IndexOftemp28 = temperatures.findIndex((value)=>value>28)
console.log("temprature 28: ",IndexOftemp28)