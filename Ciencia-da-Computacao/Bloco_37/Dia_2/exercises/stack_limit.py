from stack import Stack


class StackOverflow(Exception):
    ...


class LimitStack(Stack):
    def __init__(self, limit):
        super().__init__()
        self._limit = limit

    def push(self, value):
        if self.size() == self._limit:
            raise StackOverflow
        super().push(value)


if __name__ == "__main__":
    stack = LimitStack(2)
    stack.push(1)
    stack.push(-2)
    try:
        stack.push(5)
    except StackOverflow:
        print('The Stack is full')
