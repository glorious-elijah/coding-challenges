"""
    a module inverse_slice that takes three arguments: a list items, an integer a and an integer b. 
    The function should return a new list with the slice specified by items[a:b] excluded
"""


def inverse_slice(items, a, b):
    """
    a function inverse_slice takes three arguments: a list items, an integer a and an integer b.
    The function should return a new list with the slice specified by items[a:b] excluded
    """
    return [item for index, item in enumerate(items) if index < a or index >= b]


inverse_slice([12, 14, 63, 72, 55, 24], 2, 4)
inverse_slice([12, 14, 63, 72, 55, 24], 0, 3)
inverse_slice(
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
    13,
)
