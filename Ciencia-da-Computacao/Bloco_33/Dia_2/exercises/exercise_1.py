class TV:
    def __init__(self, size):
        self.__volume = 50
        self.__channel = 1
        self.__size = size
        self.__on = False

    def increase_volume(self):
        self.__volume += 1 if self.__volume < 99 else 0

    def decrease_volume(self):
        self.__volume -= 1 if self.__volume > 0 else 0

    def change_channel(self, new_channel):
        if (1 <= new_channel <= 99):
            self.__channel = new_channel
        else:
            raise ValueError("Invalid channel")

    def turn_on_off(self):
        self.__on = not self.__on
