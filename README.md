# Naesungmath

[![npm version](https://img.shields.io/npm/v/naesungmath.svg)](https://www.npmjs.com/package/naesungmath)
[![PyPI version](https://badge.fury.io/py/naesungmath.svg)](https://badge.fury.io/py/naesungmath)
[![NuGet](https://img.shields.io/nuget/v/NaesungMath.svg)](https://www.nuget.org/packages/NaesungMath/)
[![install size](https://packagephobia.com/badge?p=naesungmath)](https://packagephobia.com/result?p=naesungmath)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

> **"Science is Magic! Let's memorize spells <Math Formula>"**
>
> 대한수학회와 수학강사연구모임이 배포한 `과학은 마법이다! 주문을 외워보자 <수학공식>`을 기준으로 만든 수학 라이브러리입니다.

This project aims to implement essential mathematical formulas in **JavaScript/TypeScript**, **Python**, and **C#**.
Current Progress: **117 / 221** formulas completed (52.9%).

# Update 3.1
- **Refactoring & Consolidation**: All formulas have been refactored into consolidated "Smart Solver" classes (e.g., `Geometry`, `Calculus`).
- **Unified Logic**: 100% consistency across JavaScript, Python, and C# implementations.
- **Smart Solvers**: Introduced `solve` methods to automatically calculate missing variables.

# Update 3.0
- Switch to a Typescript to increase readability when using code.
- Modify code to work automatically.

## Table of Contents

- [Install & Usage](#-install--usage)
- [Contributing](#-contributing)
- [Maintainers](#-maintainers)
- [License](#-license)

---

## 📦 Install & Usage

### JavaScript / TypeScript

**Install:**
```bash
npm install naesungmath
# or
yarn add naesungmath
```

**Usage:**
```typescript
import Triangle from 'naesungmath/formulas/Triangle';

const area = Triangle.area({ baseSide: 10, height: 5 });
```

### Python

**Install:**
```bash
pip install naesungmath
```

**Usage:**
```python
from formulas.triangle import Triangle

area = Triangle.area(base_side=10, height=5)
```

### C# (.NET)

**Usage:**
```csharp
using NaesungMath.Formulas;

double area = Triangle.Area(baseSide: 10, height: 5);
```

---

## 🤝 Contributing

We welcome contributions! Please feel free to open issues or submit Pull Requests.
Review and accept Issue and Pull Request boldly.

For more information, contact **minseo0388@daum.net** or **129dot03@kakao.com**.

---

## 👤 Maintainers

- [@minseo0388(Choi Minseo)](https://github.com/minseo0388)

## 🌟 Contributors

Thanks to these wonderful people:
- [@pmh_only](https://github.com/pmh-only)
- [@AkiaCode](https://github.com/akiacode)
- [@DPS0340](https://github.com/dps0340)
- [@comjun04](https://github.com/comjun04)

---

## 📝 License

This project is licensed under the [GPLv3 License](LICENSE).

Copyright (c) 2020-2026 Choi Minseo
