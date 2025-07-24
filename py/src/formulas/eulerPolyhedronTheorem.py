def euler_polyhedron_theorem(v: float, e: float, f: float) -> bool:
    if (v - e + f) == 2:
        return True
    if (v - e + f) != 2:
        return False
