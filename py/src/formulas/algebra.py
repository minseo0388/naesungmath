def solve_linear(a, b):
    if a == 0:
        raise ValueError("Coefficient 'a' cannot be zero.")
    return -b / a

def quadratic_roots(a, b, c):
    import math
    discriminant = b ** 2 - 4 * a * c
    if discriminant < 0:
        raise ValueError("No real roots.")
    root1 = (-b + math.sqrt(discriminant)) / (2 * a)
    root2 = (-b - math.sqrt(discriminant)) / (2 * a)
    return root1, root2
