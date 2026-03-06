// Problem Statement: Library Book Management System
// -------------------------------------------------
// Objective : Create a Book class and use it to manage a collection of books in a library.

// Requirements:
//   Create a Book class with the following:

//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)


//   Methods:
//       borrow() - Marks the book as not available
//       returnBook() - Marks the book as available
//       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
//       isLongBook() - Returns true if pages > 300, false otherwise




//   1. Create at least 5 book objects using the class:
//       Example: "Harry Potter", "1984", "The Hobbit", etc.


//   2. Perform the following operations:

//       i. Display info of all books
//       ii. Borrow 2 books and show their availability status
//       iii. Return 1 book and show updated status
//       iv. Count how many books are "long books" (more than 300 pages)
//       v. List all available books

class Book{
    title;
    author;
    pages;
    isavailable;

    constructor(title,author,pages,isavailable){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isavailable = isavailable;
    }

    borrow(){
        this.isavailable = false;
    }
    returnBook(){
        this.isavailable = true;
    }
    getInfo(){
        return `${this.title} by ${this.author} (${this.pages} pages)`
    }

    isLongBook(){
        if(this.pages>300){
            return true
        }
        return false
    }
}

let b1 = new Book("book1","nihal","100",true)

let b2 = new Book("book2","nihal1","1000",true)

let b3 = new Book("book3","nihal2","100",true)

let b4 = new Book("book4","nihal3","600",true)

let b5 = new Book("book5","nihal4","1000",true)

let b6 = new Book("book6","nihal5","900",true)

//Displaying all books

console.log(b1.getInfo())
console.log(b2.getInfo())
console.log(b3.getInfo())
console.log(b4.getInfo())
console.log(b5.getInfo())

// ii. Borrow 2 books and show their availability status

b1.borrow()
b3.borrow()

console.log(b1.isavailable)
console.log(b3.isavailable)

//       iii. Return 1 book and show updated status
b1.returnBook()
console.log(b1.isavailable)

//       iv. Count how many books are "long books" (more than 300 pages)
count = 0;
let books = [b1,b2,b3,b4,b5,b6]
for(let v of books){
    if(v.isLongBook){
       count++
    }
   
}
 console.log(`there are ${count} long books`)

 //       v. List all available books
 for(let v of books){
    if(v.isavailable){
        console.log(v.getInfo())
    }
 }
