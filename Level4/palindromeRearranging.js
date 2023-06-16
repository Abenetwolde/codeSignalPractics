/* Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
solution(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome */

function palindromeRearranging(inputString) {
//     let arr = str.split('');

//     let scrambleArray = []
//     let stringLenght = str.length
//     for (let index = 0; index < stringLenght * stringLenght; index++) {
//         for (let i = arr.length - 1; i > 0; i--) {
//             let j = Math.floor(Math.random() * (i + 1));
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//             scrambleArray.push(arr.join(''))
//         }
//     }
//     for (let index = 0; index < scrambleArray.length; index++) {
//         const element = scrambleArray[index];
//         if(element===str){
//   return true
//         }
        
//     }
//     return false;
let charCounts = {};
for (let char of inputString) {
  if (charCounts[char]) {
    charCounts[char]++;
  } else {
    charCounts[char] = 1;
  }
}
let oddCount = 0;
for (let key in charCounts) {
  if (charCounts[key] % 2 !== 0) {
    oddCount++;
  }
}
return oddCount <= 1 
// return oddCount <= 1;
}
console.log(palindromeRearranging("assj"))


/* function solution(inputString) {
    return inputString.split('').sort().join('').replace(/(\w)\1/g,'').length < 2; 
    The regular expression /(\w)\1/g used in the replace() method matches any word character 
    (i.e., any alphanumeric character or underscore) that is immediately followed by the same character. 
    The \w in the regular expression matches any word character, and the \1 matches the same character as the first captured group (i.e., the character matched by \w). The g flag at the end of the regular 
    expression indicates that all matches should be replaced, not just the first one.
}
 */