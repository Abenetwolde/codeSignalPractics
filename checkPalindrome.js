function solution(inputString) {
    let reversedString = inputString.split('').reverse().join('');
    return inputString === reversedString;
}
console.log(solution("aass"))