from .matrixMultiply import matrix_multiply
from .transpose import transpose

def outter_product_matrix(u: list[list[float]], v: list[list[float]]):
    return matrix_multiply(u, transpose(v))
