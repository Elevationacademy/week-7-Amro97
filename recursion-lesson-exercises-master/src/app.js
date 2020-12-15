/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function (n) {
  if (n == 0)
    return 1
  return n * findFactorial(n - 1);

}

//Exercise 2
const reverseString = function (str) {
  if (str === "")
    return "";
  return reverseString(str.substr(1)) + str.charAt(0);

}

//Exercise 3
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function (arr1, arr2) {
  if (arr1.length === 0)
    return arr2
  let temp = arr1[0]
  arr2.push(temp)
  arr1.shift()
  return swap(arr1, arr2)
}

console.log(findFactorial(5))
console.log(reverseString("watupyo!"))
console.log(swap(arr1, arr2))

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }