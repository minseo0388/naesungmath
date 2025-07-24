def taylor(f, a, count):
    diffs = [lambda x: f(a)]
    taylors = []
    fact = [1]

    def diff(fun, density=5):
        dx = 2 * (10 ** -density)
        def dy(x):
            return fun(x + (10 ** -density)) - fun(x - (10 ** -density))
        return lambda x: dy(x) / dx

    taylors.append(lambda x: diffs[0](x))

    for i in range(1, count + 1):
        diffs.append(diff(diffs[i - 1]))
        factorial = 1
        for j in range(1, i + 1):
            factorial *= j
        fact.append(factorial)
        taylors.append(lambda x, i=i: diffs[i](a) / fact[i] * ((x - a) ** i))

    def res(x):
        result = 0
        for i in range(count + 1):
            result += taylors[i](x)
        return result

    return res
