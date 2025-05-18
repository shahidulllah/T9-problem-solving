//Task-8: Find Maximum Value:
/*Write a function that takes an array of numbers and returns the maximum value.*/

const array = [1, 4, 5, 2, 5, 2, 5];

function maxNum(arr) {
  return Math.max(...arr);
}

//minimum
function minimum(arr) {
  return Math.min(arr);
}

// console.log(maxNum(array));
// console.log(maxNum(array));

//average
function average(arr) {
  const sum = arr.reduce((s, num) => {
    return s + num;
  }, 0);

  return sum / arr.length;
}

console.log(average(array));
