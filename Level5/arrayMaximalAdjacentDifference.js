/* Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

Example

For inputArray = [2, 4, 1, 0], the output should be
solution(inputArray) = 3. */
function arrayMaximalAdjacentDifference(array) {
   let min = Math.abs(array[1] - array[0])
   for (let i = 0; i < array.length; i++) {
      let a = Math.abs(array[i + 1] - array[i])
      if (a > min) {
         min = a
      }
   }
   return min
}
console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]))
/* function solution(arr) { return Math.max(...arr.slice(1).map((x,i)=>Math.abs(x-arr[i]))) explain the code? */