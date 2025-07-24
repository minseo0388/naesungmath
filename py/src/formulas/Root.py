class Root:
    def __init__(self):
        self.data = [None] * 11
        for i in range(2, 11):
            self.data[i] = self.get(i, 10)

    def get(self, val: float, digit_: int = 10) -> float:
        digit = digit_ or 10
        return float(f"{val ** 0.5:.{digit}f}")
