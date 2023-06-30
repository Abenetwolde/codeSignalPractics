function evenDigitsOnly(n) {
    let str = n.toString();
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        // If the character is not even, return false
        if (parseInt(str[i]) % 2 !== 0) {
            return false;
        }
    }
    // If all characters are even, return true
    return true;
    /* function solution(n) {
return !(n+'').match(/[13579]/)
} */
}
console.log(evenDigitsOnly(13224343))
/* Check if all digits of the given integer are even.

Example

For n = 248622, the output should be
solution(n) = true;
For n = 642386, the output should be
solution(n) = false. */