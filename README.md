# NaesungMath 3.0
> **"Don't build equations. Use functions."**
> **"식을 세우지 마세요. 함수로 대체하세요."**

![Version 3.1.0](https://img.shields.io/badge/version-3.1.0-blue.svg)
![License](https://img.shields.io/badge/license-GPLv3-green.svg)

NaesungMath is a multi-language mathematical library (C#, Python, JavaScript) designed to eliminate raw formulas from your business logic. It provides **Smart Solvers** that strictly follow verified logic and ensure consistent results across all platforms.

---

## 🚀 Key Features

### 1. Smart Solver (스마트 솔버)
No need to memorize different variations of a formula. Identify the variables you have, and the **Smart Solver** will automatically apply the correct logic.

**Example: Square Pyramid Volume**
Instead of choosing between `SquarePyramidVolumeAB` (Base/Slant) or `SquarePyramidVolumeAH` (Base/Height), just pass what you know.

```python
# python example
from formulas.solid_3d import Solid3D

# Case 1: Know Base Side (a) and Height (h)
vol1 = Solid3D.square_pyramid_volume(base_side=5, height=10)

# Case 2: Know Base Side (a) and Slant Edge (b)
vol2 = Solid3D.square_pyramid_volume(base_side=5, slant_edge=10)
```

### 2. 100% Cross-Language Consistency
Whether your backend is C#, your data science is Python, or your frontend is JavaScript, `NaesungMath` guarantees:
*   **Identical Logic**: Formulas are 1:1 ported.
*   **Identical Naming**: `PascalCase` (C#), `snake_case` (Py), `camelCase` (JS).
*   **Identical Output**: Verified by cross-language test suites.

---

## 📦 Installation & Usage

### C# (.NET)
```csharp
using NaesungMath.Formulas;

double area = Triangle.Area(baseSide: 10, height: 5);
```

### Python
```bash
pip install naesungmath
```
```python
from formulas.triangle import Triangle

area = Triangle.area(base_side=10, height=5)
```

### JavaScript / TypeScript
```bash
npm install naesungmath
```
```typescript
import Triangle from 'naesungmath/formulas/Triangle';

const area = Triangle.area({ baseSide: 10, height: 5 });
```

---

## 📚 Function Index (Alphabetical)

### A - Analytic & Algebra
*   **AnalyticGeometry**: `CenterGravity`, `Eccentricity`, `IsInRange`
*   **BasicMath**: `Add`, `Divide`, `Factorial`, `Gcd`, `Multiply`, `Pow`, `Round`, `Sqrt`, `Subtract`
*   **LinearAlgebra**: `Add`, `Determinant`, `Identity`, `Inverse`, `Multiply`, `MultiplyScalar`, `Normalize`, `OuterProduct`, `RandomVector`, `SqrtDotProduct`, `Subtract`, `Trace`, `Transpose`

### C - Calculus & Core
*   **Calculus**: `Diff`, `InfiniteSeries`, `Integral`, `Maclaurin`, `Sigma`, `SigmaCubed`, `SigmaSquared`, `Taylor`

### E - Equation
*   **Equation**: `CubicRoots`, `Newton`, `QuadraticRoots`, `RootAndCoefficient`

### G - Geometry (2D)
*   **Circle**: `Area`, `ArcLength`, `Perimeter`, `SectorAngle`, `SectorArea`
*   **Polygon**: `Area`, `DiagonalCount`, `EulerTheorem`, `HexagonArea`, `InteriorAngleDeg`, `InteriorAngleRad`, `InteriorAngleSumDeg`, `InteriorAngleSumRad`, `PentagonArea`, `PentagonDiagonal`, `PentagonHeight`
*   **Quadrilateral**: `ParallelogramArea`, `RectangleArea`, `RectangleDiagonal`, `RectanglePerimeter`, `RhombusArea`, `SquareArea`, `TrapezoidArea`
*   **Triangle**: `Area` (Smart), `AreaFromAngles`, `EquilateralHeight`, `Pythagoras`

### S - Solid Geometry (3D)
*   **Solid3D**: `ConeArea`, `ConeVolume`, `CubeArea`, `CubeVolume`, `CuboidArea`, `CuboidDiagonal`, `CuboidVolume`, `CylinderArea`, `CylinderVolume`, `SphereArea`, `SphereVolume`, `SquarePyramidArea`, `SquarePyramidHeight`, `SquarePyramidVolume`, `TetrahedronArea`, `TetrahedronHeight`, `TetrahedronVolume`, `TriangularPyramidVolume`

### T - Trigonometry
*   **Trigonometry**: `DegreeToRad`, `Radian`, `RadToDegree`

---

## 🌍 Language Symmetry Guide

| C# (PascalCase) | Python (snake_case) | JavaScript (camelCase) |
| :--- | :--- | :--- |
| `Solid3D.SquarePyramidVolume` | `Solid3D.square_pyramid_volume` | `Solid3D.squarePyramidVolume` |
| `Triangle.Area` | `Triangle.area` | `Triangle.area` |
| `BasicMath.Gcd` | `BasicMath.gcd` | `BasicMath.gcd` |

---

*Verified Zero-Omission Logic as of v3.1.0*
