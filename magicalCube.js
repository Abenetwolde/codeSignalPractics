function magicalArray() {
    const array = [];
    for (let i = 0; i < 3; i++) {
      const row = [];
      for (let j = 0; j < 3; j++) {
        row.push(1 + (i * 3) + j);
      }
      array.push(row);
    }
  
    // Add the elements on all sides of the array to make it magical
    for (let i = 0; i < 3; i++) {
      array[i][0] += 15;
      array[i][2] += 15;
      array[0][i] += 15;
      array[2][i] += 15;
    }
  
    return array;
  }
  
  const array = magicalArray();
  console.log(array[0],array[1]);
  