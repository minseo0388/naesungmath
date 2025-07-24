def matrix_sub(matrixA: list[list[float]], matrixB: list[list[float]]) -> list[list[float]]:
    if len(matrixA) != len(matrixB) or len(matrixA[0]) != len(matrixB[0]):
        raise Exception()
    result = []
    for i in range(len(matrixA)):
        result.append([])
        for j in range(len(matrixA[0])):
            result[i].append(matrixA[i][j] - matrixB[i][j])
    return result
