function findOdd(A) {
  const setA = new Set(A);
  for (let number of setA.keys()) {
    let count = 0;
    for (let j = 0; j < A.length; j++) {
      if (number === A[j]) {
        count += 1;
      }
    }

    if (count % 2 === 1) return number;
  }

  return 0;
}
