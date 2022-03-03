from abc import ABC, abstractmethod


class PngInterface(ABC):
    @abstractmethod
    def draw(self):
        raise NotImplementedError


class PngImage(PngInterface):
    def __init__(self, png_path):
        self.png_path = png_path
        self.format = "raster"

    def draw(self):
        print(f"Drawing PNG {self.png_path} with {self.format}")


class SvgImage:
    def __init__(self, svg_path):
        self.svg_path = svg_path
        self.format = "vector"

    def get_image(self):
        return f"SVG {self.svg_path} with {self.format}"


class SvgAdapter(PngInterface):
    def __init__(self, adaptee):
        self.__adaptee = adaptee

    def draw(self):
        print(f"Drawing {self.__adaptee.get_image()}")


# SvgAdapter(SvgImage("svg_path")).draw()
# PngImage("png_path").draw()
