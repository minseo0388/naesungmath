import math

def polyarea(n: float, a: float) -> float:
    return n * (a ** 2) / (4 * math.tan(a / math.pi))
