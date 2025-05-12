//Task-8: Find Maximum Value:
/*Write a function that takes an array of numbers and returns the maximum value.*/

const array = [1, 4, 5, 2, 5, 2, 5, 6, 8, 7, 9];

function maxNum(arr) {
  return Math.max(...arr);
}
console.log(maxNum(array));
