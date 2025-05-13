//Task-7: Unique Values
/*Create an array of numbers with some duplicate values. Write a function to filter out the
duplicate values and return a new array with only unique numbers. Print the result.*/

const array = [1, 4, 5, 2, 5];

function uniqueVlaue(arr) {
  return [...new Set(arr)];
}

console.log(uniqueVlaue(array));
