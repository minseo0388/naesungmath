const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../web/data.json');
let rawData = fs.readFileSync(dataPath, 'utf8');
// Strip BOM if present
if (rawData.charCodeAt(0) === 0xFEFF) {
    rawData = rawData.slice(1);
}
let data = JSON.parse(rawData);

// Mapping legacy names to [Class, Method, JS_Method, PY_Method, CS_Method]
// Smart Solver Consolidations
const mapping = {
    // Solid3D Consolidations
    'squarePyramidVolumeab': ['Solid3D', 'squarePyramidVolume'],
    'squarePyramidVolumeah': ['Solid3D', 'squarePyramidVolume'],
    'squarePyramidAreaab': ['Solid3D', 'squarePyramidArea'],
    'squarePyramidAreaah': ['Solid3D', 'squarePyramidArea'],

    // Triangle Consolidations
    'triangleAreaSide': ['Triangle', 'area'],
    'triangleAreaAngle': ['Triangle', 'area'],
    'heron': ['Triangle', 'area'],
    'equilateralTriangleArea': ['Triangle', 'area'], // merged into area
    // 'equilateralTriangleHeight': ['Triangle', 'equilateralHeight'], // generic method

    // Equation Consolidations
    'rootFormulaPlus': ['Equation', 'quadraticRoots'],
    'rootFormulaMinus': ['Equation', 'quadraticRoots'],
    'rootFormulaEvenPlus': ['Equation', 'quadraticRoots'],
    'rootFormulaEvenMinus': ['Equation', 'quadraticRoots'],
    'quadraticEquation': ['Equation', 'quadraticRoots'],

    // Sequences (Arithmetic/Geometric)
    'arithmeticProgression': ['ArithmeticProgression', 'solve'],
    'arithmeticProgressionSum': ['ArithmeticProgression', 'solve'], // merged
    'arithmeticProgressionSumterm': ['ArithmeticProgression', 'solve'], // merged
    'geometricProgression': ['GeometricProgression', 'solve'],
    'geometricProgressionSum': ['GeometricProgression', 'solve'],
    'geometricProgressionan': ['GeometricProgression', 'solve'],

    // Others
    'pentagonArea': ['Polygon', 'pentagonArea'],
    'hexagonArea': ['Polygon', 'hexagonArea'],
    'circleArea': ['Circle', 'area'],
    'circlePerimeter': ['Circle', 'perimeter'],

    // Generic fallbacks (attempt to map simple names to Class.method)
    // Most names are already processed or fit the pattern.
};

// Helper to convert camelCase to PascalCase
function toPascalCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Helper to convert PascalCase to snake_case
function toSnakeCase(str) {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`).replace(/^_/, '');
}

data = data.map(func => {
    let oldName = func.name.split('.').pop(); // e.g. "squarePyramidVolumeab" or "Solid3D.squarePyramidVolumeab" -> "squarePyramidVolumeab"
    // If it was already refactored (contains dot), handle that vs legacy pure name
    if (func.name.includes('.')) {
        oldName = func.name.split('.')[1];
    }

    if (mapping[oldName]) {
        const [className, methodName] = mapping[oldName];

        // Update function name
        func.name = `${className}.${methodName}`;

        // Update signatures and files if they exist
        // C#
        if (func.cs) {
            func.cs.file = `${className}.cs`;
            // C# Signature: PascalCase Method
            const csMethod = toPascalCase(methodName);
            // We can't easily regenerate the exact arguments string without parsing logical intent, 
            // but we can update the METHOD name in the signature string.
            // Old: "SquarePyramidVolumeAB(double a, double b)"
            // New: "SquarePyramidVolume(double? baseSide, double? height, double? slantEdge)"... 
            // For now, let's just update the Method Name prefix, user can inspect params in code.
            // Or better: set a generic "Smart Solver" signature?
            // "SquarePyramidVolume(...)"
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
            // JS Signature usually parameter list.
            // We kept method name in `name` field.
            // The signature field in data.json is usually just arguments "a: number, b: number".
            // We might leave it or try to update parameter names if possible.
        }

        // Update Example
        // "Solid3D.squarePyramidVolumeab(5, 5)" -> "Solid3D.squarePyramidVolume(5, 5)"
        // Note: The parameters might not match new Smart Solver logic (named args).
        // But for web display, updated Name is the most critical.
        if (func.example) {
            const exArgs = func.example.substring(func.example.indexOf('('));
            func.example = `${className}.${methodName}${exArgs}`;
        }
    }
    return func;
});

fs.writeFileSync(dataPath, JSON.stringify(data, null, 4));
console.log('Updated data.json with Smart Solver mappings');
