/* Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
solution(inputArray) = ["aba", "vcd", "aba"] */

function AllLongestStrings
(array) {
  let longest = []
  const sortArray = array.sort((a, b) => b.length - a.length);
  let count=sortArray[0].length;
  for (let index = 0; index < sortArray.length; index++) {
        if(count===sortArray[index].length){
          longest.push(sortArray[index])
        }
  }
  console.log(count)
  console.log(sortArray)
  return longest
}
console.log(AllLongestStrings(["aba", "aa", "ad", "vcd", "aba"]))