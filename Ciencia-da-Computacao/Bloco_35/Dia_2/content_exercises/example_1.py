def sum_recursive(n):
    if n == 0:
        return 0
    return n + sum_recursive(n - 1)


if __name__ == "__main__":
    n = 4
    print(sum_recursive(n))
