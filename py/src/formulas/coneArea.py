import math

def cone_area(r: float, h: float) -> float:
    return (math.pi * r * ((r ** 2 + h ** 2) ** 0.5)) + (math.pi * (r ** 2))
