/* Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
solution(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c". */


function commonCharacterCount(s1, s2){
   var count = 0;
   let counts = {};
   

    s1 = Array.from(s1);
    s2 = Array.from(s2);
    const array=[]
    s1.forEach(e => {
      if (s2.includes(e)) {
        array.push(e)
        count++;
        s2.splice(s2.indexOf(e), 1);
      }
    });
    for (let i = 0; i < array.length; i++) {
    let num = array[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
}

      console.log(array)  
    for (let key in counts) {
    console.log(`The element ${key} is repeated ${counts[key]} times.`);

}
    return count;
}
/* function solution(s1, s2) {
var a=s1.split(""),r=0
while (a.length){
var t=a.pop()
if(s2.includes(t)){
r++
s2=s2.replace(t,"")
}
}
return r
} */
console.log(commonCharacterCount("aabcc", "adcaa"))