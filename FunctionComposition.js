//Task-3: Function Composition
/*Write three functions: one to square a number, one to double a number, and one to add
5 to a number. Compose these functions to create a new function that squares a
number, doubles the result, and then adds 5.*/

function square(num) {
  return num * num;
}

function double(num) {
  return num * 2;
}

function add5(num) {
  return num + 5;
}

const functionCompsition = (num) => {
  const squared = square(num);
  const doubled = double(squared);
  return add5(doubled);
};

console.log(functionCompsition(2));
