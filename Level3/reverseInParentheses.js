function reverseInParentheses(inputString){
    const closeIndex = inputString.indexOf(')');
  
    // If there is no closing parenthesis, return the input string
    if (closeIndex === -1) {
      return inputString;
    }
    
    // Find the last opening parenthesis before the first closing parenthesis
    const openIndex = inputString.substring(0, closeIndex).lastIndexOf('(');
    
    // Reverse the characters between the opening and closing parentheses
    const start = inputString.substring(0, openIndex);
    const middle = inputString.substring(openIndex + 1, closeIndex).split('').reverse().join('');
    const end = inputString.substring(closeIndex + 1);
    
    // Recursively call the function with the updated string
    return reverseInParentheses(start + middle + end);
  
  
}
console.log(reverseInParentheses("foo(bar)baz"))