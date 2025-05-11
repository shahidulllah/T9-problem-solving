//Task-2: Object Manipulation
/*Create an array of objects representing books with properties like title, author, and year.
Write a function that takes the array and returns a new array with only the book titles.
Print the result.*/

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
];

const getBookTittle = (array) => {
  return array.map((book) => book.title);
};

console.log(getBookTittle(books));
