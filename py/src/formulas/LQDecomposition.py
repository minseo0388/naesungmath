from QRDecomposition import QRDecomposition
from transpose import transpose

def LQDecomposition(mat):
    AT = transpose(mat)

    AT2 = QRDecomposition(AT)

    return {
        'L': transpose(AT2['R']),
        'Q': transpose(AT2['Q'])
    }