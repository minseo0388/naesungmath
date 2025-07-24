import math

def circumscribed_circle_triangle_area_angle(a: float, b: float, c: float, r: float) -> float:
    return 2 * r * r * math.sin(a) * math.sin(b) * math.sin(c)
