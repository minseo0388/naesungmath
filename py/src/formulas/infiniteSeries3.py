def infinite_series_3(x: float):
    if x > 1 or x < -1 or x == 1 or x == -1:
        print('Check |x| < 1')
    else:
        return 1 / (1 - x)
