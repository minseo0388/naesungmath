def geometric_progression_sum(a: float, r: float, n: float) -> float:
    return a * (1 - (r ** n)) / (1 - r)
