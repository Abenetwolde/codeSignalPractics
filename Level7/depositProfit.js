function alphabeticShift(inputString) {
    let result = "";
    for (let i = 0; i < inputString.length; i++) {
        let charCode = inputString.charCodeAt(i);
        if (charCode === 122) { // 'z'
            result += 'a';
        } else if (charCode === 90) { // 'Z'
            result += 'A';
        } else {
            result += String.fromCharCode(charCode + 1);
        }
    }
    return result;
}
console.log(alphabeticShift('jvdfgdfz'))
// const solution = inputString =>
//     inputString.split('').map(el => 
//         (el === 'z') ? 'a' : String.fromCharCode(el.charCodeAt() + 1)
//     ).join('')



// This function uses the charCodeAt method to get the Unicode value of each character in the input string. It then checks if the character is ‘z’ or ‘Z’ and replaces it with ‘a’ or ‘A’, respectively. Otherwise, it increments the Unicode value by 1 and converts it back to a character using the fromCharCode method. 
// The resulting characters are concatenated to form the output string.