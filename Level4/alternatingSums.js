       /* Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

Example

For a = [50, 60, 60, 45, 70], the output should be
solution(a) = [180, 105]. */
function alternatingSums(array){
    let team1=[]
    let team2=[]

for (let index = 0; index < array.length; index++) {
    if(index%2==0){team1.push(array[index])}
    else{team2.push(array[index]) }
}
const sum1=team1.reduce((a,b)=>a+b,0)
const sum2=team2.reduce((a,b)=>a+b,0)
return [sum1,sum2]
}

console.log(alternatingSums([2,3,5,6,4,9]))