let maxNUmber
function adjacentElementsProduct(array) {
    maxNUmber = array[0] * array[1]
    for (let index = 0; index < array.length-1; index++) {
        maxNUmber = Math.max(maxNUmber, array[index] * array[index + 1]);

    }

    return maxNUmber

}
console.log(adjacentElementsProduct([2, 4, 5, 6, 7, 3, 9]))
console.log("largest number is" + maxNUmber)