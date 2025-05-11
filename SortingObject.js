//Task-4: Sorting Objects
/*Create an array of objects representing cars with properties like make, model, and year.
Write a function to sort the array of cars by the year of manufacture in ascending order.
Print the sorted array.*/

const cars = [
  { make: "The Great Gatsby", model: "F. Scott Fitzgerald", year: 1985 },
  { make: "Toyota", model: "eeTo", year: 2015 },
  { make: "Tesla", model: "Sumbtoa", year: 2025 },
];

const assendingCars = (obj) => {
  return obj.sort((a, b) => {
    a.year - b.year;
  });
};

console.log(assendingCars(cars));
