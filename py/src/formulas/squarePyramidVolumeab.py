def square_pyramid_volume_ab(a: float, b: float) -> float:
    return (1 / 3) * (a ** 2) * (((b ** 2) - ((a ** 2) / 2)) ** 0.5)
