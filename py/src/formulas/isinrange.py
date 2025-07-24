def isinrange(a: float, b: float):
    def g(x: float):
        return a <= x <= b
    return g
