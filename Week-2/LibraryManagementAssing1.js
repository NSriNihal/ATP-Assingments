/**
 * Library Book Management System
 * 
 * Topic: ES6 Classes
 * 
 * Objective: Create a Book class and use it to manage a collection
 *            of books in a library.
 * 
 * Class Properties: title, author, pages, isAvailable
 * Class Methods: borrow(), returnBook(), getInfo(), isLongBook()
 * 
 * Concepts: Class declaration, constructor, methods, instances, array of objects
 */

class Book {
  title;
  author;
  pages;
  isAvailable;

  /**
   * @param {string} title - The book title
   * @param {string} author - The author name
   * @param {number} pages - Number of pages (should be a number, not string)
   * @param {boolean} isAvailable - Whether the book is available for borrowing
   */
  constructor(title, author, pages, isAvailable) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAvailable = isAvailable;
  }

  // Marks the book as not available (borrowed)
  borrow() {
    this.isAvailable = false;
  }

  // Marks the book as available (returned)
  returnBook() {
    this.isAvailable = true;
  }

  // Returns a formatted string with book details
  getInfo() {
    return `${this.title} by ${this.author} (${this.pages} pages)`;
  }

  // Returns true if the book has more than 300 pages
  isLongBook() {
    if (this.pages > 300) {
      return true;
    }
    return false;
  }
}

// Create 6 book objects — Fixed: pages passed as numbers instead of strings
let b1 = new Book("book1", "nihal", 100, true);
let b2 = new Book("book2", "nihal1", 1000, true);
let b3 = new Book("book3", "nihal2", 100, true);
let b4 = new Book("book4", "nihal3", 600, true);
let b5 = new Book("book5", "nihal4", 1000, true);
let b6 = new Book("book6", "nihal5", 900, true);

// i. Display info of all books
console.log("--- All Books ---");
console.log(b1.getInfo());
console.log(b2.getInfo());
console.log(b3.getInfo());
console.log(b4.getInfo());
console.log(b5.getInfo());
console.log(b6.getInfo());

// ii. Borrow 2 books and show their availability status
b1.borrow();
b3.borrow();
console.log("\n--- After borrowing b1 and b3 ---");
console.log("b1 available:", b1.isAvailable); // false
console.log("b3 available:", b3.isAvailable); // false

// iii. Return 1 book and show updated status
b1.returnBook();
console.log("\n--- After returning b1 ---");
console.log("b1 available:", b1.isAvailable); // true

// iv. Count how many books are "long books" (more than 300 pages)
let count = 0; // Fixed: added 'let' to avoid implicit global
let books = [b1, b2, b3, b4, b5, b6];
for (let v of books) {
  if (v.isLongBook()) {
    // Fixed: added () to call the method instead of referencing it
    count++;
  }
}
console.log(`\nThere are ${count} long books`);

// v. List all available books
console.log("\n--- Available Books ---");
for (let v of books) {
  if (v.isAvailable) {
    console.log(v.getInfo());
  }
}
