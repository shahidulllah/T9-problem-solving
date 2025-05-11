// Task 1: Array Filtering and Mapping

const ArrayOfpeople = [
  { name: "Sabbir", age: 25, gender: "male" },
  { name: "Rokibul", age: 30, gender: "male" },
  { name: "Sadia", age: 28, gender: "female" },
  { name: "Sumaiya", age: 22, gender: "female" },
];

const getMaleNames = (peopleArray) => {
  return ArrayOfpeople.filter((person) => person.gender !== "female").map(
    (person) => person.name
  );
};

console.log(getMaleNames(ArrayOfpeople));
