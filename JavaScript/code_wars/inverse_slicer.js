function inverseSlice(items, a, b) {
  return items
    .map((value, index) => {
      if (index < a || index >= b) return value;
    })
    .filter((value) => !!value);
}

console.log(inverseSlice([12, 14, 63, 72, 55, 24], 2, 4));
con(inverseSlice([12, 14, 63, 72, 55, 24], 0, 3));
inverseSlice(
  [
    "Intuition",
    "is",
    "a",
    "poor",
    "guide",
    "when",
    "facing",
    "probabilistic",
    "evidence",
  ],
  5,
  13
);
