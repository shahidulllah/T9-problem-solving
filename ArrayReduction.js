//Task-5: Array Reduction
/*Create an array of numbers. Write a function that uses the reduce method to calculate
the sum of all even numbers in the array.*/

const arrayOfNum = [2, 4, 5, 6, 7];

function someOfEvenNum(arr) {
  return arr.reduce((sum, num) => {
    if (num % 2 === 0) {
      return sum + num;
    }
    return sum;
  }, 0);
}

console.log(someOfEvenNum(arrayOfNum));

