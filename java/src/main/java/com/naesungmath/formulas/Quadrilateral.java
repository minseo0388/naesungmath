package com.naesungmath.formulas;

public class Quadrilateral {
    public static double parallelogramArea(Double baseSide, Double height) {
        if (baseSide != null && height != null) {
            return baseSide * height;
        }
        throw new IllegalArgumentException("Insufficient parameters.");
    }

    public static double rectangleArea(Double width, Double height) {
        if (width != null && height != null) {
            return width * height;
        }
        throw new IllegalArgumentException("Insufficient parameters.");
    }

    public static double rectangleDiagonal(Double width, Double height) {
        if (width != null && height != null) {
            return Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
        }
        throw new IllegalArgumentException("Insufficient parameters.");
    }

    public static double rectanglePerimeter(Double width, Double height) {
        if (width != null && height != null) {
            return 2 * (width + height);
        }
        throw new IllegalArgumentException("Insufficient parameters.");
    }

    public static double rhombusArea(Double diagonal1, Double diagonal2) {
        if (diagonal1 != null && diagonal2 != null) {
            return 0.5 * diagonal1 * diagonal2;
        }
        throw new IllegalArgumentException("Insufficient parameters.");
    }

    public static double squareArea(Double side) {
        if (side != null) {
            return Math.pow(side, 2);
        }
        throw new IllegalArgumentException("Insufficient parameters.");
    }

    public static double trapezoidArea(Double a, Double b, Double h) {
        if (a != null && b != null && h != null) {
            return 0.5 * (a + b) * h;
        }
        throw new IllegalArgumentException("Insufficient parameters.");
    }
}
