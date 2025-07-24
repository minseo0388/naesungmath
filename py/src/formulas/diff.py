def diff(f, density=5):
    dx = 2 * (10 ** (-density))
    def dy(x):
        return f(x + (10 ** (-density))) - f(x - (10 ** (-density)))
    return lambda x: dy(x) / dx
