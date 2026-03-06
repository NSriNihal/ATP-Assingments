/*
ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field                            //doubt
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"
*/
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

    // 1. filter() students who passed (marks ≥ 40)

const passed = students.filter((item)=>item.marks>=40)
console.log(passed)

    // 2. map() to add a grade field
    //           ≥90 → A
    //           ≥75 → B
    //           ≥60 → C
    //           else → D

let grade = students.map(function(item){
    // switch(item.marks){
    //     case item.marks>=90 : students.grade = "A"
    //     case item.marks>=75 : students.grade = "B"
    //     case item.marks>=60 : students.grade = "C"
    //     default : students.grade = "D"
    // }

    if(item.marks>=90){
        return item.grade = "A"
    }
    else if(item.marks>=90){
        return item.grade = "B"
    }
    else if(item.marks>=90){
        return item.grade = "C"
    }
    else{
        return item.grade = "D"
    }
    

  
})
console.log(grade)

//3. reduce() to calculate average marks

let avgmarks = students.reduce((acc , item)=>acc+item.marks,0)
console.log("avg marks: ",avgmarks/students.length)

//   4. find() the student who scored 92

let finding92 = students.find((item)=>item.marks === 92);
console.log(finding92)

//   5. findIndex() of student "Kiran"
let findingKiran = students.findIndex((item)=>item.name === "Kiran")
console.log(findingKiran)

