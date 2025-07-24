def circular_sector_areart(r: float, t: float = None, l: float = None) -> float:
    if r is not None:
        if t is not None or l is not None:
            if t is not None:
                return 0.5 * r * (t ** 2)
            else:
                return 0.5 * r * l
