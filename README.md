# Naesungmath

[![npm version](https://img.shields.io/npm/v/naesungmath.svg)](https://www.npmjs.com/package/naesungmath)
[![install size](https://packagephobia.com/badge?p=naesungmath)](https://packagephobia.com/result?p=naesungmath)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> A collection of mathematical formulas based on "Science is Magic! Let's memorize spells <Math Formula>" distributed by the Korean Mathematical Society and the Math Instructor Research Group.
> 
> 대한수학회와 수학강사연구모임이 배포한 `과학은 마법이다! 주문을 외워보자 <수학공식>`을 기준으로 만든 수학 라이브러리입니다.

This project aims to implement essential mathematical formulas in multiple programming languages (**JavaScript/TypeScript**, **C#**, **Python**).
Current Progress: **117 / 221** formulas completed (52.9%).

---

## 🌍 Languages (Supported Modules)

This repository serves as the central hub for:
- [**JavaScript / TypeScript**](https://github.com/minseo0388/naesungmath_js) (`js/`)
- [**C#**](https://github.com/minseo0388/naesungmath_cs) (`cs/`)
- [**Python**](https://github.com/minseo0388/naesungmath_py) (`py/`)

## 📒 Table of Contents

- [Install](#-install)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [Maintainers](#-maintainers)
- [License](#-license)

---

## 📦 Install

### JavaScript / TypeScript
Using npm:
```bash
npm install naesungmath
```
Using yarn:
```bash
yarn add naesungmath
```

### Python / C#
Currently, these modules are managed as submodules. You can clone this repository to access the source code directly.

```bash
git clone --recursive https://github.com/minseo0388/naesungmath.git
```

---

## 🚀 Usage

### JavaScript
```javascript
import { geometricProgressionSum } from 'naesungmath';

console.log(geometricProgressionSum(1, 2, 10));
```

### For Developers (Submodules)
To set up the development environment with all languages:
```bash
# Clone with submodules
git clone --recursive https://github.com/minseo0388/naesungmath.git

# Or if you already cloned:
bash scripts/init_submodules.sh
```

---

## 🤝 Contributing

We welcome contributions! Please feel free to open issues or submit Pull Requests.
Review and accept Issue and Pull Request boldly.

For more information, contact **minseo0388@daum.net** or **129dot03@kakao.com**.

---

## 👤 Maintainers

- [@minseo0388 (Choi Minseo)](https://github.com/minseo0388)

## 🌟 Contributors

Thanks to these wonderful people:
- [@pmh_only](https://github.com/pmh-only)
- [@AkiaCode](https://github.com/akiacode)
- [@DPS0340](https://github.com/dps0340)
- [@comjun04](https://github.com/comjun04)

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

Copyright (c) 2020-2026 Choi Minseo
