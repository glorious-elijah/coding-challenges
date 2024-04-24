def cantor(nested_list):
    return [1-nested_list[y][y] for y in range(len(nested_list))]
