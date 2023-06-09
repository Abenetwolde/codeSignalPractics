function MakeArrayConsecutive2(array){
const max= Math.max(...array)
const min= Math.min(...array)
const result =MissingNumber(max,min,array)
console.log(result)
return max-min-array.length+1;

}

console.log(MakeArrayConsecutive2([3,5,7,9]))