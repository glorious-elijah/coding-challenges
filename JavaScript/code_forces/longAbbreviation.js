const abbreviateWord = (word) => {
  if (Number.isFinite(word)) return;
  let text = String(word);
  if (text.length <= 10) {
    console.log(text);
    return text;
  }

  console.log(
    text[0] + text.slice(1, text.length - 1).length + text[text.length - 1]
  );
  return (
    text[0] + text.slice(1, text.length - 1).length + text[text.length - 1]
  );
};

abbreviateWord(4);
abbreviateWord("word");
abbreviateWord("localization");
abbreviateWord("internationalization");
abbreviateWord("pneumonoultramicroscopicsilicovolcanoconiosis");
