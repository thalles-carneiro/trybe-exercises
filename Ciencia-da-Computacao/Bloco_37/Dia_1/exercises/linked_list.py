from node import Node


class LinkedList:
    def __init__(self):
        self.head_value = None
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head_value})"

    def __len__(self):
        return self.__length

    def insert_first(self, value):
        first_value = Node(value)
        first_value.next = self.head_value
        self.head_value = first_value
        self.__length += 1

    def insert_last(self, value):
        if self.is_empty():
            return self.insert_first(value)

        last_value = Node(value)
        actual_last_value = self.__get_node_at(len(self) - 1)
        actual_last_value.next = last_value
        self.__length += 1

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)
        current_value = self.__get_node_at(position - 1)
        next_value = Node(value)
        next_value.next = current_value.next
        current_value.next = next_value
        self.__length += 1

    def remove_first(self):
        value_to_be_removed = self.head_value
        if value_to_be_removed:
            self.head_value = self.head_value.next
            value_to_be_removed.next = None
            self.__length -= 1
        return value_to_be_removed

    def remove_last(self):
        if len(self) <= 1:
            return self.remove_first()

        previous_to_be_removed = self.__get_node_at(len(self) - 2)
        value_to_be_removed = previous_to_be_removed.next

        previous_to_be_removed.next = None
        self.__length -= 1
        return value_to_be_removed

    def remove_at(self, position):
        if position < 1:
            return self.remove_first()
        if position >= len(self):
            return self.remove_last()

        previous_to_be_removed = self.__get_node_at(position - 1)

        value_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = value_to_be_removed.next
        value_to_be_removed.next = None
        self.__length -= 1

        return value_to_be_removed

    def get_element_at(self, position):
        value_returned = None
        value_to_be_returned = self.__get_node_at(position)
        if value_to_be_returned:
            value_returned = Node(value_to_be_returned.value)
        return value_returned

    def is_empty(self):
        return not self.__length

    def clear(self):
        while not self.is_empty():
            self.remove_first()

    def __get_node_at(self, position):
        value_to_be_returned = self.head_value
        if value_to_be_returned:
            while position > 0 and value_to_be_returned.next:
                value_to_be_returned = value_to_be_returned.next
                position -= 1
        return value_to_be_returned

    def index_of(self, value):
        index_of_value = 0
        current_value = self.head_value

        while index_of_value < len(self):
            if current_value.value == value:
                return index_of_value
            current_value = current_value.next
            index_of_value += 1

        return -1

    def delete_duplicates(self):
        list_with_unique_elements = self.__class__()

        while self:
            current_node = self.remove_first()
            if list_with_unique_elements.index_of(current_node.value) == -1:
                list_with_unique_elements.insert_last(current_node.value)

        return list_with_unique_elements


# Para testar, apenas rode o arquivo com: `python3 linked_list_content.py` :)
if __name__ == "__main__":
    linked_list = LinkedList()

    print(linked_list.is_empty())  # sa??da: True
    linked_list.insert_first(1)
    print(linked_list)
    # sa??da: LinkedList(len=1 value=Node(value=1 next=None))

    linked_list.insert_first(2)
    print(linked_list)
    # sa??da: LinkedList(len=2 value=Node(value=2 next=Node(value=1 next=None)))

    linked_list.insert_last(3)
    print(linked_list)
    """
    sa??da: LinkedList(
        len=3 value=Node(
            value=2 next=Node(
                value=1 next=Node(value=3 next=None)
            )
        )
    )
    """

    linked_list.remove_last()
    print(linked_list)
    # sa??da: LinkedList(len=2 value=Node(value=2 next=Node(value=1 next=None)))

    linked_list.remove_first()
    print(linked_list)
    # sa??da: LinkedList(len=1 value=Node(value=1 next=None))

    linked_list.insert_at(5, 1)
    print(linked_list)
    # sa??da: LinkedList(len=2 value=Node(value=1 next=Node(value=5 next=None)))

    linked_list.remove_at(0)
    print(linked_list)
    # sa??da: LinkedList(len=1 value=Node(value=5 next=None))

    linked_list.insert_at(6, 1)
    linked_list.insert_at(7, 2)
    linked_list.insert_at(7, 3)
    linked_list.insert_at(8, 4)
    linked_list.insert_at(8, 5)
    linked_list.insert_at(9, 6)
    print(linked_list.get_element_at(4))
    print(linked_list.index_of(8))
    # sa??da: Node(value=8 next=None)

    new_linked_list_no_duplicates = linked_list.delete_duplicates()
    print(new_linked_list_no_duplicates)

    # linked_list.clear()
    # print(linked_list)
    # sa??da: LinkedList(len=0 value=None)
