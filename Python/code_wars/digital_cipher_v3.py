"""Module to find the key of an encrypted message"""


def build_alphabet_dictionary():
    """Function to create a dictionary of alphabet"""
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    alphabet_dict = {}

    for index, alphabet in enumerate(alphabet):
        alphabet_dict[alphabet] = index + 1

    return alphabet_dict


def find_the_key(message: str, code: list[int]):
    """Find the cipher key"""
    alphabet_dict = build_alphabet_dictionary()
    cipher_key: str = ""

    for index, letter in enumerate(message):
        cipher_key += str(abs(code[index] - alphabet_dict[letter]))

    key = find_key(cipher_key)
    print({"key": key})
    return key


def find_key(sequence: str):
    """
    Find a repeating sequence in the sequence passed as argument
    """
    for i in range(2, len(sequence)):
        if sequence.count(sequence[0]) == len(sequence):
            return int(sequence[0])

        if sequence[i:].startswith(sequence[:i]):
            return int(sequence[:i])

        if sequence.count(sequence[:i]) == 1:
            sequence_restart_point = sequence[i:].rfind(sequence[0])
            if sequence[0] in sequence[i:] and sequence[i:].count(sequence[0]) >= 1:
                if (
                    sequence[(i + sequence_restart_point) - 1]
                    == sequence[i + sequence_restart_point]
                ):
                    return int(sequence[: i + sequence_restart_point])
                return int(sequence[: i + sequence[i:].index(sequence[0])])
            return int(sequence)
