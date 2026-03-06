// ASSIGNMENT 4: 
// ------------
// Movie Streaming Platform

// You are working on a movie recommendation system.

// Test data:
// const movies = [
//   { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
//   { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
//   { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
//   { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
// ];


// Tasks:
//     1. filter() only "Sci-Fi" movies
//     2. map() to return:
//             "Inception (8.8)"

//     3. reduce() to find average movie rating
//     4. find() movie "Joker"
//     5. findIndex() of "Avengers"

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


//     1. filter() only "Sci-Fi" movies

let scifi = movies.filter((type)=>type.genre === "Sci-Fi")
console.log(scifi)

//     2. map() to return:
//             "Inception (8.8)"

let inception = movies.map(function(obj){
    if(obj.title === "Inception")return `${obj.title}(${obj.rating})`
})
console.log(inception)

//     3. reduce() to find average movie rating
let avgRating = movies.reduce((acc , obj)=>acc+obj.rating,0)
console.log("average rating: ",avgRating/movies.length)

//     4. find() movie "Joker"
let findingJoker = movies.find((obj)=>obj.title==="Joker")
console.log(findingJoker)

//     5. findIndex() of "Avengers"
let findingIndexOfAvengers = movies.findIndex((obj)=>obj.title === "Avengers")
console.log(findingIndexOfAvengers)
