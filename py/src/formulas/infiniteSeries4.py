def infinite_series_4(x: float):
    if x > 1 or x < -1 or x == 1 or x == -1:
        print('Check |x| < 1')
    else:
        return x / ((1 - x) ** 2)
