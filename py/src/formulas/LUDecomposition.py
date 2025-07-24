def lu_decomposition(matrix: list[list[float]]):
    if len(matrix) != len(matrix[0]):
        raise Exception()
    length = len(matrix)
    L = [[0 for _ in range(length)] for _ in range(length)]
    U = [[0 for _ in range(length)] for _ in range(length)]
    for i in range(length):
        for k in range(i, length):
            sum_ = 0
            for j in range(i):
                sum_ += L[i][j] * U[j][k]
            U[i][k] = matrix[i][k] - sum_
        for k in range(i, length):
            if i == k:
                L[i][i] = 1
            else:
                sum_ = 0
                for j in range(i):
                    sum_ += L[k][j] * U[j][i]
                L[k][i] = (matrix[k][i] - sum_) / U[i][i]
    return {
        "Lower": L,
        "Upper": U
    }
