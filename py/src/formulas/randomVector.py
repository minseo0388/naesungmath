import random

def random_vector(length: int, norm: float = 1):
    x = []
    current_norm = 0
    for i in range(length):
        x.append(random.random())
        current_norm += abs(x[i]) ** 2
    current_norm = current_norm ** 0.5
    for i in range(length):
        x[i] *= norm / current_norm
    return x
