def square_pyramid_area_ah(a: float, h: float) -> float:
    return (a * ((4 * (h ** 2) - (a ** 2)) ** 0.5)) + (a ** 2)
