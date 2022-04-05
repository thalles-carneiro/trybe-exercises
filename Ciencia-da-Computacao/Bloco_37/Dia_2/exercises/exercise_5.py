from stack import Stack


def reverse_letters(string):
    result = ""
    stack = Stack()
    inside_parentheses = False

    for char in string:
        if char == "(":
            inside_parentheses = True
        if char == ")":
            inside_parentheses = False

        if inside_parentheses:
            stack.push(char)
        else:
            result += char

    while not stack.is_empty():
        result += stack.pop()

    return result


"""
GABARITO

def reverse_word(stack):
    char = ')'
    reversed_word = []
    while char != '(':
        char = stack.pop()
        if char != '(':
            reversed_word.append(char)

    for letter in reversed_word:
        stack.push(letter)


def reverse_letters(phrase):
    stack = Stack()
    for char in phrase:
        if char != ')':
            stack.push(char)
        else:
            reverse_word(stack)

    reversed_phrase = []
    while not stack.is_empty():
        reversed_phrase.append(stack.pop())

    return ''.join(reversed(reversed_phrase))

"""


if __name__ == "__main__":
    print(reverse_letters('teste(lagel)'))
    print(reverse_letters('(abcd)'))
    print(reverse_letters('(u(love)i)'))
    print(reverse_letters('(ed(et(oc))el)'))
    print(reverse_letters('a(bcdefghijkl(mno)p)q'))
