def trace(matrix: list[list[float]]) -> float:
    res = 0
    for i in range(len(matrix)):
        res += matrix[i][i]
    return res
