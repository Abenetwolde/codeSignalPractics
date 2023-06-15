/* Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190]. */

function SortbyHeight(array){
    let result=[]
 result =array.filter((arr)=>arr!==-1).sort((a,b)=>a-b)
 for (let i = 0; i < array.length; i++) {
    // If the current element is a tree, push it to the result array
    if (array[i] === -1) {
      result.push(array[i]);
    } else {
      // Otherwise, push the next resultone from the sorted result array to the result array
      result.push(result.shift());
    }
  }
    // const element = array[index];
    

return result
}

console.log(SortbyHeight([2,3,5,-1,6,4,-1,5,-1,9]))