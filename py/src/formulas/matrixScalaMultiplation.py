def matrix_scala_multiplation(matrix: list[list[float]], k: float) -> list[list[float]]:
    res = []
    for i in range(len(matrix)):
        res.append([])
        for j in range(len(matrix[0])):
            res[i].append(matrix[i][j] * k)
    return res
