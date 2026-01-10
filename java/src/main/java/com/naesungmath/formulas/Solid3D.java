package com.naesungmath.formulas;

public class Solid3D {
    // --- Cone ---

    public static double coneArea(Double radius, Double height) {
        if (radius != null && height != null) {
            return Math.PI * radius * (radius + Math.sqrt(Math.pow(height, 2) + Math.pow(radius, 2)));
        }
        throw new IllegalArgumentException("Insufficient parameters for coneArea(radius, height).");
    }

    public static double coneVolume(Double radius, Double height) {
        if (radius != null && height != null) {
            return (1.0 / 3.0) * Math.PI * Math.pow(radius, 2) * height;
        }
        throw new IllegalArgumentException("Insufficient parameters for coneVolume(radius, height).");
    }

    // --- Cube ---

    public static double cubeArea(double side) {
        return 6 * Math.pow(side, 2);
    }

    public static double cubeVolume(double side) {
        return Math.pow(side, 3);
    }

    // --- Cuboid ---

    public static double cuboidArea(double length, double width, double height) {
        return 2 * ((length * width) + (width * height) + (height * length));
    }

    public static double cuboidDiagonal(double length, double width, double height) {
        return Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2) + Math.pow(height, 2));
    }

    public static double cuboidVolume(double length, double width, double height) {
        return length * width * height;
    }

    // --- Cylinder ---

    public static double cylinderArea(Double radius, Double height) {
        if (radius != null && height != null) {
            return (2 * Math.PI * radius * height) + (2 * Math.PI * Math.pow(radius, 2));
        }
        throw new IllegalArgumentException("Insufficient parameters for cylinderArea(radius, height).");
    }

    public static double cylinderVolume(Double radius, Double height) {
        if (radius != null && height != null) {
            return Math.PI * Math.pow(radius, 2) * height;
        }
        throw new IllegalArgumentException("Insufficient parameters for cylinderVolume(radius, height).");
    }

    // --- Sphere ---

    public static double sphereArea(double radius) {
        return 4 * Math.PI * Math.pow(radius, 2);
    }

    public static double sphereVolume(double radius) {
        return (4.0 / 3.0) * Math.PI * Math.pow(radius, 3);
    }

    // --- SquarePyramid ---

    public static double squarePyramidArea(Double baseSide, Double height, Double slantEdge) {
        // Case 1: base_side (a) and slant_edge (b) known
        if (baseSide != null && slantEdge != null) {
            double a = baseSide;
            double b = slantEdge;
            return (a * Math.sqrt(4 * Math.pow(b, 2) - Math.pow(a, 2))) + Math.pow(a, 2);
        }

        // Case 2: base_side (a) and height (h) known
        if (baseSide != null && height != null) {
            double a = baseSide;
            double h = height;
            return (a * Math.sqrt(4 * Math.pow(h, 2) - Math.pow(a, 2))) + Math.pow(a, 2); // Wait, logic check: 4h^2 +
                                                                                          // a^2 inside sqrt for slant
                                                                                          // height?
            // Python original: return (a * math.sqrt(4 * (h**2) - (a**2))) + (a**2) //
            // Wait, -a^2?
            // Slant height s = sqrt(h^2 + (a/2)^2) = sqrt(h^2 + a^2/4) = 0.5 * sqrt(4h^2 +
            // a^2)
            // Area = a^2 + 4 * (0.5 * a * s) = a^2 + 2 * a * s = a^2 + 2a * 0.5 * sqrt(4h^2
            // + a^2) = a^2 + a * sqrt(4h^2 + a^2).
            // Python code had: (a * math.sqrt(4 * (h**2) - (a**2))) + (a**2) which seems to
            // have a typo or I am misremembering.
            // Wait, looking at python code: `(a * math.sqrt(4 * (h**2) - (a**2)))` -> This
            // implies 4h^2 - a^2.
            // If h is height, and a is base side.
            // Let's stick to strict porting as per instructions, even if it looks weird.
            // Copying exact logic.
        }

        throw new IllegalArgumentException("Insufficient parameters for squarePyramidArea.");
    }

    public static double squarePyramidHeight(Double baseSide, Double slantEdge) {
        if (baseSide != null && slantEdge != null) {
            double a = baseSide;
            double b = slantEdge;
            return Math.sqrt(Math.pow(b, 2) - (Math.pow(a, 2) / 2));
        }
        throw new IllegalArgumentException("Insufficient parameters for squarePyramidHeight.");
    }

    public static double squarePyramidVolume(Double baseSide, Double height, Double slantEdge) {
        if (baseSide != null && height != null) {
            return (1.0 / 3.0) * Math.pow(baseSide, 2) * height;
        }

        if (baseSide != null && slantEdge != null) {
            double a = baseSide;
            double b = slantEdge;
            return (1.0 / 3.0) * Math.pow(a, 2) * Math.sqrt(Math.pow(b, 2) - (Math.pow(a, 2) / 2));
        }

        throw new IllegalArgumentException("Insufficient parameters for squarePyramidVolume.");
    }

    // --- Tetrahedron ---

    public static double tetrahedronArea(double side) {
        return Math.sqrt(3) * Math.pow(side, 2);
    }

    public static double tetrahedronHeight(double side) {
        return Math.sqrt(2.0 / 3.0) * side;
    }

    public static double tetrahedronVolume(double side) {
        return (Math.sqrt(2) / 12) * Math.pow(side, 3);
    }

    // --- Triangular Pyramid ---

    public static double triangularPyramidVolume(Double baseArea, Double height) {
        if (baseArea != null && height != null) {
            return (1.0 / 3.0) * baseArea * height;
        }
        throw new IllegalArgumentException("Insufficient parameters for triangularPyramidVolume.");
    }
}
