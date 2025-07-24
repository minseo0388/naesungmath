def sqrt_dot_product(row1: list[float], row2: list[float]) -> float:
    res = 0
    for i in range(len(row1)):
        res += row1[i] * row2[i]
    return res ** 0.5
