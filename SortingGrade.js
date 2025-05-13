//Task-9: Advanced Sorting
/*Create an array of objects representing students with 'name' and 'grades' properties.
Write a function to sort the students by average grade in descending order.*/

const students = [
  { name: "Kulsum", grades: [85, 90, 92] },
  { name: "Rabbil Hasan", grades: [78, 80, 75] },
  { name: "Al-Amin", grades: [90, 95, 88] },
  { name: "Dina", grades: [92, 88, 95] },
];

function sortByAverageGrade(studentsArray) {
  return [...studentsArray].sort((a, b) => {
    const avgA =
      a.grades.reduce((sum, grade) => sum + grade, 0) / a.grades.length;
    const avgB =
      b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length;
    return avgB - avgA;
  });
}

console.log(sortByAverageGrade(students));
