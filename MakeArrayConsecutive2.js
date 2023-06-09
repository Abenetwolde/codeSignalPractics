function MakeArrayConsecutive2(array){
const max= Math.max(...array)
const min= Math.min(...array)
const result =MissingNumber(max,min,array)
console.log(result)
return max-min-array.length+1;

}
function MissingNumber(max,min,array){
    let missingStatues = [];
    for (let i = min + 1; i < max; i++) {
        if (!array.includes(i)) {
            missingStatues.push(i);
        }
    }
    return missingStatues;
}
console.log(MakeArrayConsecutive2([3,5,7,9]))