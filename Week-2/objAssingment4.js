/**
 * Assignment 4: Movie Streaming Platform
 * 
 * Topic: Array Higher-Order Methods — Movie Recommendation
 * 
 * Scenario: Working on a movie recommendation system.
 * 
 * Tasks:
 *   1. filter() only "Sci-Fi" movies
 *   2. map() to return formatted strings like "Inception (8.8)"
 *   3. reduce() to find average movie rating
 *   4. find() movie "Joker"
 *   5. findIndex() of "Avengers"
 * 
 * Concepts: filter, map (string formatting), reduce (average), find, findIndex
 */

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 },
];

// 1. Filter only Sci-Fi genre movies
let scifi = movies.filter((movie) => movie.genre === "Sci-Fi");
console.log("Sci-Fi movies:", scifi);

// 2. Map to return formatted strings "Title (Rating)" for ALL movies
// Fixed: previously only formatted "Inception" and returned undefined for others
let formattedMovies = movies.map((movie) => `${movie.title} (${movie.rating})`);
console.log("Formatted movies:", formattedMovies);

// 3. Reduce to find the average movie rating
let totalRating = movies.reduce((acc, movie) => acc + movie.rating, 0);
console.log("Average rating:", totalRating / movies.length);

// 4. Find the movie "Joker"
let findingJoker = movies.find((movie) => movie.title === "Joker");
console.log("Joker details:", findingJoker);

// 5. Find the index of "Avengers"
let findingIndexOfAvengers = movies.findIndex(
  (movie) => movie.title === "Avengers"
);
console.log("Avengers index:", findingIndexOfAvengers);
