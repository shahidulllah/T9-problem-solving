//Task-6: Leap Year Checker
/*Write a function that determines whether a given year is a leap year.
Example: Happy New Year*/

function isLeapYear(year) {
  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 !== 0) {
    return true;
  } else {
    return year % 400 === 0;
  }
}

console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
console.log(isLeapYear(2024));
