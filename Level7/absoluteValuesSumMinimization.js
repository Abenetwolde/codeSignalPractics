function absoluteValuesSumMinimization(a) {
    let minSum = Infinity;
    let result;
    for (let i = 0; i < a.length; i++) {
        let sum = 0;
        for (let j = 0; j < a.length; j++) {
            sum += Math.abs(a[i] - a[j]);
        }
        if (sum < minSum) {
            minSum = sum;
            result = a[i];
        }
    }
    return result;
}
console.log(absoluteValuesSumMinimization([2, 14, 7]))

/* Given a sorted array of integers a, your task is to determine which element of a is closest to all other values of a. In other words, find the element x in a, which minimizes the following sum:

abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
(where abs denotes the absolute value)

If there are several possible answers, output the smallest one. */