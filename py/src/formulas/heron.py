import math

def heron(a: float, b: float, c: float) -> float:
    cos_theta = ((a * a) + (b * b) - (c * c)) / (2 * a * b)
    sin_theta = math.sqrt(1 - (cos_theta ** 2))
    return (a * b * sin_theta) / 2
