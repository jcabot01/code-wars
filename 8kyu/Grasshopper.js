/*
DESCRIPTION:
Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
 */

//My Solution
var summation = function (num) {
  
  //have a value holder variable that we can add onto
  let result = 0
  for (let x = num; x > 0; x--){
    result += x
  }
  console.log(result)
  return result
}

//Best Practice
var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  
  return result;
}