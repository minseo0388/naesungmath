def gaussian(matrix: list[list[float]], m: int, n: int) -> list[list[float]]:
    X = [row[:] for row in matrix]
    for i in range(n):
        k = X[i][i]
        for j in range(m):
            X[i][j] /= k
        for j in range(n):
            if i != j:
                ratio = X[j][i]
                for l in range(len(matrix[j])):
                    X[j][l] -= ratio * X[i][l]
    return X
