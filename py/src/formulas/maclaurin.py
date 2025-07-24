from .taylor import taylor

def maclaurin(f, count):
    return taylor(f, 0, count)
