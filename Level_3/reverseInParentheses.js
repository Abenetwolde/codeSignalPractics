function reverseInParentheses(inputString){
let stringArray=inputString.split("").reverse()
for (let index = 0; index < stringArray.length; index++) {
    if(stringArray[index]=="("||")"){
        const element = stringArray[index];
        console.log(element)
        // stringArray.splice(indexOf(stringArray[index]) ,1)
    }
    
}
return stringArray
}
console.log(reverseInParentheses("foo(bar)baz"))