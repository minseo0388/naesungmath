from .matrixScalaMultiplation import matrix_scala_multiplation
from .sqrtDotProduct import sqrt_dot_product

def normailze(row: list[float]):
    return matrix_scala_multiplation([row], 1 / sqrt_dot_product(row, row))
