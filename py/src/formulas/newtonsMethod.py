def newtons_method(f, count, initx=2):
    def diff(f, x, density=5):
        dx = 2 * (10 ** -density)
        dy = f(x + (10 ** -density)) - f(x - (10 ** -density))
        return dy / dx

    def newton_go(f, x, go=0):
        next_ = x - f(x) / diff(f, x)
        if go == count - 1:
            return next_
        return newton_go(f, next_, go + 1)

    return newton_go(f, initx, 0)
