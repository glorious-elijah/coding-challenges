def unique_in_order(sequence):
    unique = []
    if len(sequence) == 0:
        return []

    for val in sequence:
        print(len(unique))
        if len(unique) > 0 and val == unique[len(unique) - 1]:
            continue
        unique.append(val)

    return unique
