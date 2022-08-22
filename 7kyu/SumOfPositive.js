//Details
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//My Solution
function positiveSum(arr) {
  let positives = arr.filter((num) => num > 0)
  let sum = positives.reduce((v1, v2) => v1 + v2, 0)

  if (positives.length == 0){
    return 0
  } else {
    return sum
  }
}