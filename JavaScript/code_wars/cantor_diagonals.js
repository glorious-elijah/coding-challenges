function cantor(nestedList) {
  return nestedList.map((value, index) => 1 - value[index]);
}
