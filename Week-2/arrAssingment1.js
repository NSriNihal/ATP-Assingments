/**
 * Assignment 1: Daily Temperature Analyzer
 * 
 * Topic: Array Higher-Order Methods
 * 
 * Scenario: Analyzing daily temperatures recorded by a weather app.
 * 
 * Tasks:
 *   1. filter() temperatures above 35
 *   2. map() to convert Celsius to Fahrenheit
 *   3. reduce() to calculate average temperature
 *   4. find() first temperature above 40
 *   5. findIndex() of temperature 28
 * 
 * Concepts: filter, map, reduce, find, findIndex, arrow functions
 */

const temperatures = [32, 35, 28, 40, 38, 30, 42];

// 1. Filter temperatures above 35°C
const tempAbove35 = temperatures.filter((value) => value > 35);
console.log("Temperatures above 35:", tempAbove35);

// 2. Map to convert each Celsius value to Fahrenheit (F = C × 1.8 + 32)
const Fahrenheit = temperatures.map((value) => value * 1.8 + 32);
console.log("Fahrenheit values:", Fahrenheit);

// 3. Reduce to calculate the average temperature
// First sum all values, then divide by the count
const totalTemp = temperatures.reduce((acc, val) => acc + val);
console.log("Average temperature:", totalTemp / temperatures.length);

// 4. Find the first temperature above 40°C
const firstAbove40 = temperatures.find((value) => value > 40);
console.log("First temp > 40:", firstAbove40);

// 5. Find the index of temperature 28 (using strict equality)
const indexOfTemp28 = temperatures.findIndex((value) => value === 28); // Fixed: changed > to === as per requirement
console.log("Index of temperature 28:", indexOfTemp28);