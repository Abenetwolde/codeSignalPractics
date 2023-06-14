/* Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
solution(n) = true;
For n = 239017, the output should be
solution(n) = false. */

function isLucky(num){
    const array=num.toString().split('').map(Number);
    const total= array.length
    let part1=null
    let sumofPart1=null
    let message=""
 if(array.length%2!==0){
  console.log("the number is not even")
 } else{
    const half=total/2
     part1=array.slice(0, half)
     sumofPart1= part1.reduce((a,b)=>a+b,0)
     part2=array.slice(half, total)
     sumofPart2= part2.reduce((a,b)=>a+b,0)
     if(sumofPart1==sumofPart2)
     {
        message="You are Lucky"
     }else{
        message="You are not Lucky"
     }
 }
 return message
}
/* function solution(n) {
    var s = n.toString();
    var sum1 = 0;
    var sum2 = 0;
    for(var i = 0; i < s.length/2; i++){
        sum1 += parseInt(s[i]);
        sum2 += parseInt(s[s.length-i-1]);        
    }    
    return sum1 == sum2;
}
 */
console.log(isLucky(7318))