import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'src')))

import naesungmath

print(f"NaesungMath v{naesungmath.VERSION}")

a = 1
b = 2

result = naesungmath.plus(a, b)

print(f"{a} + {b} = {result}")
