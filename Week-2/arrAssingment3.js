// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

// Test data:
// const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 92

const marks = [78, 92, 35, 88, 40, 67];

//     1. filter() marks ≥ 40 (pass marks)
const passMark = marks.filter((mark)=>mark>=40)
console.log(passMark)

//     2. map() to add 5 grace marks to each student
const graceMarks = marks.map((mark)=>mark+5)
console.log(graceMarks)

//     3. reduce() to find highest mark

let highestMark = marks.reduce((acc,mark)=>acc>mark?acc:mark)
console.log("Highest Mark is :",highestMark)

 //4. find() first mark below 40

 let firstMarkBelow40 = marks.find((mark)=>mark<40)
 console.log("first mark <40:",firstMarkBelow40)

 //     5. findIndex() of mark 92
 let indexOf92 = marks.findIndex((mark)=>mark === 92)
 console.log("index of 92 :",indexOf92)



