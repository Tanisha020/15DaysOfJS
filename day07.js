// ACTIVITY 1: Object Creation & Access

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book = {title: "Let Us C", author: "Yashwant Kanetkar", year: 1997};
console.log(book);   //Output : { title: 'Let Us C', author: 'Yashwant Kanetkar', year: 1997 }

// Task 2: Access and log the title and author properties of the book object.
console.log("Title : " + book["title"]);    //Output : Title : Let Us C
console.log("Author : " + book["author"]);  //Output : Author : Yashwant Kanetkar


// ACTIVITY 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.details = function(){console.log(`Book Details: Title: ${this.title} & Author: ${this.author}`)};
book.details(); //Output : Book Details: Title: Let Us C & Author: Yashwant Kanetkar


// Task 4: Add a method to the book object that takes a parameter (year) & updates the book's year property, then log the updated object.
book.updateYear = function(newYear){
    this.year = newYear;
}
// Before 
console.log(book.year); //Output : 1997
// After 
book.updateYear(2005);
console.log(book.year); //Output : 2005


// ACTIVITY 3: Nested Objects
// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
let library = {
    name : "Library NITKKR",
    books : ["Let Us C", "Let us C++", "Morris Mano"]
};
console.log(library);
//Output : 
// {
//     name: 'Library NITKKR',
//     books: [ 'Let Us C', 'Let us C++', 'Morris Mano' ]
//   }

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(library.name); //Output : Library NITKKR
console.log(library.books); //Output : [ 'Let Us C', 'Let us C++', 'Morris Mano' ]


// ACTIVITY 4: The 'this' Keyword

// Task 7: Add a method to the book object that uses the 'this' keyword to return a string with the book's title and year, and log the result of calling this method.
book.getInfo = function(){
    return `Title: ${this.title}, Year: ${this.year}`;
}
console.log(book.getInfo()); //Output : Title: Let Us C, Year: 2005


// ACTIVITY 5: Object Iteration
// Task 8: Use a 'for...in' loop to iterate over the properties of the book object and log each property and its value.
let book2 = {
    Title : "30DaysOfJS",
    Year : 2024,
}
for (let i in book2)
{
    console.log(`${i} : ${book2[i]}`);
}
//Output :
// Title : 30DaysOfJS
// Year : 2024

// Task 9: Use 'Object.keys' & 'Object.values' methods to log all the keys and values of the book object.
console.log(Object.keys(book2));     //Output : [ 'Title', 'Year' ]
console.log(Object.values(book2));   //Output : [ '30DaysOfJS', 2024 ]