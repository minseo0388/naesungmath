def matrix_multiply(matrixA: list[list[float]], matrixB: list[list[float]]) -> list[list[float]]:
    if len(matrixA[0]) != len(matrixB):
        raise Exception()
    result = []
    for i in range(len(matrixA)):
        result.append([])
        for j in range(len(matrixB[0])):
            sum_ = 0
            for k in range(len(matrixB)):
                if not (matrixA[i][k] != matrixA[i][k] or matrixB[k][j] != matrixB[k][j]):  # not NaN
                    sum_ += matrixA[i][k] * matrixB[k][j]
            result[i].append(sum_)
    return result
