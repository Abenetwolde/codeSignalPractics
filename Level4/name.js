function addBorder(picture) {
    // Determine the length of the strings in the input matrix
    const length = picture[0].length;

    // Create the top and bottom borders
    const border = '*'.repeat(length + 2);

    // Add the top border to the output matrix
    let output = [border];

    // Add each string from the input matrix to the output matrix, surrounded by asterisks
    for (let i = 0; i < picture.length; i++) {
        output.push('*' + picture[i] + '*');
    }

    // Add the bottom border to the output matrix
    output.push(border);

    return output;
}

console.log(addBorder( ["abc",
"ded"]))