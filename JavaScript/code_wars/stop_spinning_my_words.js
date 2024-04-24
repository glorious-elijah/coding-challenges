function spinWords(string) {
  return string
    .split(" ")
    .map((value) =>
      value.length >= 5 ? value.split("").reverse().join("") : value
    )
    .join(" ");
}
