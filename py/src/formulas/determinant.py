def determinant(matrix: list[list[float]]) -> float:
    if len(matrix) != len(matrix[0]):
        raise Exception()
    if len(matrix) > 2:
        result = 0
        for i in range(len(matrix[0])):
            K = matrix[0][i]
            mat = []
            for j in range(1, len(matrix)):
                mat.append([])
                for k in range(len(matrix[0])):
                    if k != i:
                        mat[j - 1].append(matrix[j][k])
            if i % 2 == 0:
                result += K * determinant(mat)
            else:
                result -= K * determinant(mat)
        return result
    else:
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]
