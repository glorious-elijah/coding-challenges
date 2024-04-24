function build_alphabet_dictionary() {
  return Object.fromEntries(
    "abcdefghijklmnopqrstuvwxyz"
      .split("")
      .map((alphabet, index) => [alphabet, index + 1])
  );
}

console.log(build_alphabet_dictionary());

function find_the_key(message, code) {
  alphabet_dict = build_alphabet_dictionary();
  cipher_key = "";

  for (const [index, letter] of message) {
    cipher_key += str(code[index] - alphabet_dict[letter]);
  }
  key = find_key(cipher_key);
  console.log({ key });
  return key;
}

function find_key(sequence){
     for ( let i =2; i <= sequence.length; i++){
        if (sequence.split("").every((value) => sequence[0] === value)) return Number(sequence[0])
        if (sequence.slice(i,).startsWith(sequence.slice(,i)) return int(sequence[:i])

        if sequence.count(sequence[:i]) == 1:
            sequence_restart_point = sequence[i:].rfind(sequence[0])
            if sequence[0] in sequence[i:] and sequence[i:].count(sequence[0]) >= 1:
                if (
                    sequence[(i + sequence_restart_point) - 1]
                    == sequence[i + sequence_restart_point]
                ):
                    return int(sequence[: i + sequence_restart_point])
                return int(sequence[: i + sequence[i:].index(sequence[0])])
            return int(sequence)}
}
