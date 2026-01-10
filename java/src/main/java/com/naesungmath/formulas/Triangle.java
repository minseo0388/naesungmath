package com.naesungmath.formulas;

public class Triangle {
    public static double area(Double baseSide, Double height, Double sideA, Double sideB, Double sideC, Double angle,
            Double equilateralSide, Double circumRadius, Double inRadius) {

        // 1. Base and Height
        if (baseSide != null && height != null) {
            return 0.5 * baseSide * height;
        }

        // 2. SAS
        if (sideA != null && sideB != null && angle != null) {
            return 0.5 * sideA * sideB * Math.sin(angle);
        }

        // 3. Equilateral
        if (equilateralSide != null) {
            return (Math.sqrt(3) / 4) * Math.pow(equilateralSide, 2);
        }

        // 4. Heron
        if (sideA != null && sideB != null && sideC != null && circumRadius == null && inRadius == null) {
            double a = sideA;
            double b = sideB;
            double c = sideC;
            double cosTheta = (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b);
            double sinTheta = Math.sqrt(1 - Math.pow(cosTheta, 2));
            return (a * b * sinTheta) / 2;
        }

        // 5. Circumscribed
        if (circumRadius != null) {
            if (sideA != null && sideB != null && sideC != null) {
                return (sideA * sideB * sideC) / (4 * circumRadius);
            }
        }

        // 6. Inscribed
        if (inRadius != null && sideA != null && sideB != null && sideC != null) {
            return (sideA + sideB + sideC) / 2 * inRadius;
        }

        throw new IllegalArgumentException("Insufficient or ambiguous parameters for Triangle area.");
    }

    public static double areaFromAngles(double angleA, double angleB, double angleC, double circumRadius) {
        return 2 * Math.pow(circumRadius, 2) * Math.sin(angleA) * Math.sin(angleB) * Math.sin(angleC);
    }

    public static double equilateralHeight(double side) {
        return (Math.sqrt(3) / 2) * side;
    }

    public static double pythagoras(double a, double b) {
        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    }
}
