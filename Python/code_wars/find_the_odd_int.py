""" Code Wars"""


def find_it(seq):
    """Find the number appearing the odd number of times in the sequence"""
    seq_set = set(seq)

    for number in seq_set:
        if seq.count(number) % 2 == 1:
            return number
