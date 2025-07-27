import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'src')))

import naesungmath.formulas as nmath

print(f"NaesungMath v{nmath.VERSION}")

a = 1
b = 2

result = nmath.plus(a, b)

print(f"{a} + {b} = {result}")
