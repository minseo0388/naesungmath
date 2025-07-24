def integral(f, density=5):
    def g(a, b):
        sum_ = 0
        k = a
        while k < b:
            sum_ += (f(k + 10 ** (-density)) + f(k)) / 2 * 10 ** (-density)
            k += 10 ** (-density)
        return sum_
    return g
