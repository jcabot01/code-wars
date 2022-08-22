/*
DESCRIPTION:
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
 */

//My Solution
function getAverage(marks){
  let total = marks.reduce((v1,v2) => v1 + v2, 0);
  let average = total / (marks.length)
  let result = Math.floor(average)
  return result
}

//Best Practice
function getAverage(marks){
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}