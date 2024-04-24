"""A module to check if a number can be divided into two even parts"""


def can_divide_into_two_even_parts(weight: int) -> str:
    """A function to check if a number can be divided into two even parts"""
    temp = weight - 2
    if weight % 2 == 0 and temp % 2 == 0 and temp > 0:
        print("YES")
        return "YES"
    else:
        print("NO")
        return "NO"


def main() -> None:
    """Main Function"""
    can_divide_into_two_even_parts(8)


if __name__ == "__main__":
    main()
