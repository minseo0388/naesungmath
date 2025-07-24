from .matrixScalaMultiplation import matrix_scala_multiplation
from .MatrixSub import matrix_sub
from .transpose import transpose

def QRDecomposition(mat: list[list[float]]) -> dict:
    def sqrt_dot_product(row1: list[float], row2: list[float]) -> float:
        res = 0
        for i in range(len(row1)):
            res += row1[i] * row2[i]
        return res ** 0.5

    def dot_product(row1: list[float], row2: list[float]) -> float:
        res = 0
        for i in range(len(row1)):
            res += row1[i] * row2[i]
        return res

    def normalize_memoi(row: list[list[float]], K: float) -> list[list[float]]:
        return matrix_scala_multiplation(row, 1 / K)

    X = transpose(mat)

    r = []
    for i in range(len(X)):
        r.append([0] * len(X[0]))
    Q = []
    for i in range(len(X)):
        Q.append([0] * len(X[0]))

    k = 0

    while True:
        r[k][k] = sqrt_dot_product(X[k], X[k])
        Q[k] = normalize_memoi([X[k]], r[k][k])[0]

        for j in range(k + 1, len(X)):
            r[k][j] = dot_product(Q[k], X[j])

        for j in range(k + 1, len(X)):
            X[j] = matrix_sub([X[j]], matrix_scala_multiplation([Q[k]], r[k][j]))[0]

        k += 1

        if k == len(X):
            return {
                'Q': transpose(Q),
                'R': r
            }