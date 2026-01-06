const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../web/data.json');
let rawData = fs.readFileSync(dataPath, 'utf8');
// Strip BOM if present
if (rawData.charCodeAt(0) === 0xFEFF) {
    rawData = rawData.slice(1);
}
let data = JSON.parse(rawData);

// Mapping legacy names to [Class, Method, Description]
// Description is generic to allow merging of multiple legacy functions into one Smart Solver method.
const mapping = {
    // Solid3D
    'cubeArea': ['Solid3D', 'cubeArea', 'Surface area of a cube'],
    'cubeVolume': ['Solid3D', 'cubeVolume', 'Volume of a cube'],
    'cuboidArea': ['Solid3D', 'cuboidArea', 'Surface area of a cuboid'],
    'cuboidDiagonal': ['Solid3D', 'cuboidDiagonal', 'Diagonal length of a cuboid'],
    'cuboidVolume': ['Solid3D', 'cuboidVolume', 'Volume of a cuboid'],
    'coneArea': ['Solid3D', 'coneArea', 'Surface area of a cone'],
    'coneVolume': ['Solid3D', 'coneVolume', 'Volume of a cone'],
    'cylinderArea': ['Solid3D', 'cylinderArea', 'Surface area of a cylinder'],
    'cylinderVolume': ['Solid3D', 'cylinderVolume', 'Volume of a cylinder'],
    'sphereArea': ['Solid3D', 'sphereArea', 'Surface area of a sphere'],
    'sphereVolume': ['Solid3D', 'sphereVolume', 'Volume of a sphere'],
    'squarePyramidAreaAB': ['Solid3D', 'squarePyramidArea', 'Surface area of a square pyramid'],
    'squarePyramidAreaAH': ['Solid3D', 'squarePyramidArea', 'Surface area of a square pyramid'],
    'squarePyramidHeight': ['Solid3D', 'squarePyramidHeight', 'Height of a square pyramid'],
    'squarePyramidVolumeAB': ['Solid3D', 'squarePyramidVolume', 'Volume of a square pyramid'],
    'squarePyramidVolumeAH': ['Solid3D', 'squarePyramidVolume', 'Volume of a square pyramid'],
    'tetrahedronArea': ['Solid3D', 'tetrahedronArea', 'Surface area of a regular tetrahedron'],
    'tetrahedronHeight': ['Solid3D', 'tetrahedronHeight', 'Height of a regular tetrahedron'],
    'tetrahedronVolume': ['Solid3D', 'tetrahedronVolume', 'Volume of a regular tetrahedron'],
    'triangularPyramidVolume': ['Solid3D', 'triangularPyramidVolume', 'Volume of a triangular pyramid'],

    // Triangle
    'triangleAreaSide': ['Triangle', 'area', 'Area of a triangle'],
    'triangleAreaAngle': ['Triangle', 'area', 'Area of a triangle'],
    'heron': ['Triangle', 'area', 'Area of a triangle'],
    'equilateralTriangleArea': ['Triangle', 'area', 'Area of a triangle'],
    'equilateralTriangleHeight': ['Triangle', 'equilateralHeight', 'Height of an equilateral triangle'],
    'rightTriangleArea': ['Triangle', 'area', 'Area of a triangle'],
    'pytagoras': ['Triangle', 'pythagoras', 'Pythagorean theorem'],
    'circumscribedCircleTriangleAreaAngle': ['Triangle', 'area', 'Area of a triangle'],
    'circumscribedCircleTriangleAreaSide': ['Triangle', 'area', 'Area of a triangle'],
    'inscribedCircleTriangleArea': ['Triangle', 'area', 'Area of a triangle'],

    // Quadrilateral
    'squareArea': ['Quadrilateral', 'squareArea', 'Area of a square'],
    'rectangleArea': ['Quadrilateral', 'rectangleArea', 'Area of a rectangle'],
    'rectangleDiagonal': ['Quadrilateral', 'rectangleDiagonal', 'Diagonal of a rectangle'],
    'rectanglePerimeter': ['Quadrilateral', 'rectanglePerimeter', 'Perimeter of a rectangle'],
    'rhombusArea': ['Quadrilateral', 'rhombusArea', 'Area of a rhombus'],
    'parallelogramArea': ['Quadrilateral', 'parallelogramArea', 'Area of a parallelogram'],
    'trapezoidArea': ['Quadrilateral', 'trapezoidArea', 'Area of a trapezoid'],

    // Polygon
    'pentagonArea': ['Polygon', 'pentagonArea', 'Area of a regular pentagon'],
    'pentagonDiagonal': ['Polygon', 'pentagonDiagonal', 'Diagonal of a regular pentagon'],
    'pentagonHeight': ['Polygon', 'pentagonHeight', 'Height of a regular pentagon'],
    'hexagonArea': ['Polygon', 'hexagonArea', 'Area of a regular hexagon'],
    'polyarea': ['Polygon', 'area', 'Area of a regular polygon'],
    'polydiag': ['Polygon', 'diagonalCount', 'Number of diagonals in a polygon'],
    'polyAngleDeg': ['Polygon', 'interiorAngleDeg', 'Interior angle of a polygon (degrees)'],
    'polyAngleRad': ['Polygon', 'interiorAngleRad', 'Interior angle of a polygon (radians)'],
    'polyAngleSumDeg': ['Polygon', 'interiorAngleSumDeg', 'Sum of interior angles (degrees)'],
    'polyAngleSumRad': ['Polygon', 'interiorAngleSumRad', 'Sum of interior angles (radians)'],
    'eulerPolyhedronTheorem': ['Polygon', 'eulerTheorem', 'Euler\'s Polyhedron Theorem'],

    // Circle
    'circleArea': ['Circle', 'area', 'Area of a circle'],
    'circlePerimeter': ['Circle', 'perimeter', 'Circumference of a circle'],
    'arcLength': ['Circle', 'arcLength', 'Arc length of a circle sector'],
    'circumference': ['Circle', 'perimeter', 'Circumference of a circle'],
    'circularSectorAngle': ['Circle', 'sectorAngle', 'Angle of a circular sector'],
    'circularSectorAreart': ['Circle', 'sectorArea', 'Area of a circular sector'],
    'ovalArea': ['AnalyticGeometry', 'ellipseArea', 'Area of an ellipse'],

    // BasicMath
    'plus': ['BasicMath', 'add', 'Addition'],
    'minus': ['BasicMath', 'subtract', 'Subtraction'],
    'multiply': ['BasicMath', 'multiply', 'Multiplication'],
    'divide': ['BasicMath', 'divide', 'Division'],
    'pow': ['BasicMath', 'pow', 'Exponentiation'],
    'sqrt': ['BasicMath', 'sqrt', 'Square root'],
    'round': ['BasicMath', 'round', 'Round to nearest integer'],
    'factorial': ['BasicMath', 'factorial', 'Factorial of a number'],
    'gcd': ['BasicMath', 'gcd', 'Greatest Common Divisor'],
    'caret': ['BasicMath', 'pow', 'Exponentiation (caret)'],

    // Equation
    'cubicEquationFirst': ['Equation', 'cubicRoots', 'Roots of a cubic equation'],
    'newtonsMethod': ['Equation', 'newton', 'Newton\'s Method for roots'],
    'rootAndCoefficient': ['Equation', 'rootAndCoefficient', 'Relation between roots and coefficients'],
    'rootFormulaPlus': ['Equation', 'quadraticRoots', 'Quadratic formula (positive root)'],
    'rootFormulaMinus': ['Equation', 'quadraticRoots', 'Quadratic formula (negative root)'],
    'rootFormulaEvenPlus': ['Equation', 'quadraticRoots', 'Quadratic formula even (positive)'],
    'rootFormulaEvenMinus': ['Equation', 'quadraticRoots', 'Quadratic formula even (negative)'],
    'rootFormulaplus': ['Equation', 'quadraticRoots', 'Quadratic formula (positive)'],
    'rootFormulaminus': ['Equation', 'quadraticRoots', 'Quadratic formula (negative)'],

    // Calculus
    'diff': ['Calculus', 'diff', 'Numerical Differentiation'],
    'integral': ['Calculus', 'integral', 'Numerical Integration'],
    'taylor': ['Calculus', 'taylor', 'Taylor Series expansion'],
    'maclaurin': ['Calculus', 'maclaurin', 'Maclaurin Series expansion'],
    'sigma': ['Calculus', 'sigma', 'Summation (Sigma)'],
    'sigmaSquare': ['Calculus', 'sigmaSquared', 'Sum of squares'],
    'sigmaCube': ['Calculus', 'sigmaCubed', 'Sum of cubes'],
    'infiniteSeries1': ['Calculus', 'infiniteSeries', 'Infinite Series Type 1'],
    'infiniteSeries2': ['Calculus', 'infiniteSeries', 'Infinite Series Type 2'],
    'infiniteSeries3': ['Calculus', 'infiniteSeries', 'Infinite Series Type 3'],
    'infiniteSeries4': ['Calculus', 'infiniteSeries', 'Infinite Series Type 4'],

    // LinearAlgebra
    'matrixAdd': ['LinearAlgebra', 'add', 'Matrix Addition'],
    'matrixSub': ['LinearAlgebra', 'subtract', 'Matrix Subtraction'],
    'MatrixSub': ['LinearAlgebra', 'subtract', 'Matrix Subtraction'],
    'matrixMultiply': ['LinearAlgebra', 'multiply', 'Matrix Multiplication'],
    'matrixScalaMultiplation': ['LinearAlgebra', 'multiplyScalar', 'Matrix Scalar Multiplication'],
    'transpose': ['LinearAlgebra', 'transpose', 'Matrix Transpose'],
    'trace': ['LinearAlgebra', 'trace', 'Matrix Trace'],
    'determinant': ['LinearAlgebra', 'determinant', 'Matrix Determinant'],
    'inverse': ['LinearAlgebra', 'inverse', 'Matrix Inverse'],
    'IdentityMatrix': ['LinearAlgebra', 'identity', 'Identity Matrix'],
    'outterProductmatrix': ['LinearAlgebra', 'outerProduct', 'Vector Outer Product'],
    'sqrtDotProduct': ['LinearAlgebra', 'sqrtDotProduct', 'Square root of Dot Product'],
    'normailze': ['LinearAlgebra', 'normalize', 'Vector Normalization'],
    'randomVector': ['LinearAlgebra', 'randomVector', 'Generates a random vector'],
    'gaussian': ['LinearAlgebra', 'gaussian', 'Gaussian Elimination'],
    'Cramer': ['LinearAlgebra', 'cramer', 'Cramer\'s Rule'],

    // AnalyticGeometry
    'centerGravity': ['AnalyticGeometry', 'centerGravity', 'Center of Gravity (Triangle)'],
    'evalEccentricity': ['AnalyticGeometry', 'eccentricity', 'Eccentricity of a conic section'],
    'isinrange': ['AnalyticGeometry', 'isInRange', 'Check if value is in range'],

    // Trigonometry
    'degreeToRad': ['Trigonometry', 'degreeToRad', 'Degrees to Radians conversion'],
    'radToDegree': ['Trigonometry', 'radToDegree', 'Radians to Degrees conversion'],
    'radian': ['Trigonometry', 'degreeToRad', 'Degrees to Radians'],

    // Sequences
    'arithmeticProgression': ['ArithmeticProgression', 'solve', 'Arithmetic Progression Solver'],
    'arithmeticProgressionSum': ['ArithmeticProgression', 'solve', 'AP Sum'],
    'arithmeticProgressionSumterm': ['ArithmeticProgression', 'solve', 'AP Term from Sum'],
    'arithmeticProgressiond': ['ArithmeticProgression', 'solve', 'AP Common Difference'],
    'arithmeticProgressionn': ['ArithmeticProgression', 'solve', 'AP Number of Terms'],
    'geometricProgression': ['GeometricProgression', 'solve', 'Geometric Progression Solver'],
    'geometricProgressionSum': ['GeometricProgression', 'solve', 'GP Sum'],
    'geometricProgressionan': ['GeometricProgression', 'solve', 'GP Nth Term'],
    'geometricProgressionn': ['GeometricProgression', 'solve', 'GP Number of Terms'],
    'geometricProgressiona': ['GeometricProgression', 'solve', 'GP First Term'],
    'geometricProgressr': ['GeometricProgression', 'solve', 'GP Common Ratio'],
    'geometricProgressionInfinitySum': ['GeometricProgression', 'solve', 'GP Infinite Sum'],
    'ACORN': ['BasicMath', 'acorn', 'ACORN PRNG'],
    'random': ['LinearAlgebra', 'randomVector', 'Generates a random vector'],
};

// Helper to convert camelCase to PascalCase
function toPascalCase(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Helper to convert PascalCase to snake_case
function toSnakeCase(str) {
    if (!str) return str;
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`).replace(/^_/, '');
}

// Deduplication
const uniqueData = [];
const seenNames = new Set();

data.forEach(func => {
    let oldName = func.name.split('.').pop();
    // If it was already refactored (contains dot), handle that vs legacy pure name
    if (func.name.includes('.')) {
        oldName = func.name.split('.')[1];
    }

    if (mapping[oldName]) {
        const [className, methodName, description] = mapping[oldName];

        // Update to new logical name
        const newName = `${className}.${methodName}`;
        func.name = newName;

        // Simplify description to be generic if it's being consolidated
        if (description) {
            func.description = description;
        }

        // C#
        if (func.cs) {
            func.cs.file = `${className}.cs`;
            const csMethod = toPascalCase(methodName);
            // Replace legacy method name in signature with new PascalCase one if possible
            func.cs.signature = func.cs.signature.replace(/^\w+/, csMethod);
        }

        // Python
        if (func.py) {
            func.py.file = `${toSnakeCase(className)}.py`;
            const pyMethod = toSnakeCase(methodName);
            func.py.signature = func.py.signature.replace(/^\w+/, pyMethod);
        }

        // JS
        if (func.js) {
            func.js.file = `${className}.ts`;
        }

        // Update Example to match new name
        // Legacy example: "Solid3D.squarePyramidVolumeab(5, 5)"
        // New: "Solid3D.squarePyramidVolume(5, 5)"
        if (func.example) {
            const exArgs = func.example.substring(func.example.indexOf('('));
            func.example = `${className}.${methodName}${exArgs}`;
        }
    }

    // Deduplication Logic
    // We use a composite key of Name + Signature to allow overloads
    const key = `${func.name}|${JSON.stringify(func.js?.signature)}`;

    if (!seenNames.has(key)) {
        seenNames.add(key);
        uniqueData.push(func);
    }
});

fs.writeFileSync(dataPath, JSON.stringify(uniqueData, null, 4));
console.log('Updated data.json with Smart Solver mappings, generic descriptions, and deduplication.');
