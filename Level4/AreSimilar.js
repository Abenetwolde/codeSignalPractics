function AreSimilar(a, b) {
    let diff = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      diff.push(i);
    }
  }
  if (diff.length === 0) {
    return true;
  } else if (diff.length === 2) {
    return a[diff[0]] === b[diff[1]] && a[diff[1]] === b[diff[0]];
  } else {
    return false;
  }

}

console.log(AreSimilar([2, 9, 5], [5, 9, 2]))