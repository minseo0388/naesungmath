import math

def geometric_progression_n(an: float, a: float, r: float) -> float:
    return math.log(an / a) / math.log(r)
