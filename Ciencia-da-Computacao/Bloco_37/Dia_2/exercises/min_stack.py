from stack import Stack


class MinStack(Stack):
    def __init__(self):
        super().__init__()

    def min_value(self):
        if self.is_empty():
            return None

        min_value = self._data[0]
        for num in self._data[1:]:
            if num < min_value:
                min_value = num
        return min_value


if __name__ == "__main__":
    elements = [2, 1, 5, 4, 10, 6, 8, 22, 11, 10]
    content_stack = MinStack()

    for elem in elements:
        content_stack.push(elem)

    # saída: 1
    print(content_stack.min_value())
    content_stack.push(-5)
    # saída: -5
    print(content_stack.min_value())
