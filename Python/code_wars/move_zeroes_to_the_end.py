def move_zeros(lst):
    return [val for val in lst if val != 0] + [val for val in lst if val == 0]


move_zeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])
