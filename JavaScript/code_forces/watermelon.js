const canDivideIntoTwoEvenParts = (weight) => {
  let temp = weight - 2;
  if (weight % 2 === 0 && temp % 2 === 0 && temp > 0) {
    console.log("YES");
    return "YES";
  } else {
    console.log("NO");
    return "NO";
  }
};

canDivideIntoTwoEvenParts(8);
