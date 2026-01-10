package com.naesungmath.formulas;

public class Circle {
    public static double arcLength(Double radius, Double angle) {
        if (radius != null && angle != null) {
            return 2 * Math.PI * radius * (angle / 360.0);
        }
        throw new IllegalArgumentException("Insufficient parameters.");
    }

    public static double area(Double radius) {
        if (radius != null) {
            return Math.PI * Math.pow(radius, 2);
        }
        throw new IllegalArgumentException("Insufficient parameters.");
    }

    public static double perimeter(Double radius) {
        if (radius != null) {
            return 2 * Math.PI * radius;
        }
        throw new IllegalArgumentException("Insufficient parameters.");
    }

    public static double sectorAngle(Double radius, Double arcLength) {
        if (radius != null && arcLength != null) {
            return (arcLength * 180.0) / (Math.PI * radius);
        }
        throw new IllegalArgumentException("Insufficient parameters.");
    }

    public static double sectorArea(Double radius, Double angle) {
        if (radius != null && angle != null) {
            return Math.PI * Math.pow(radius, 2) * (angle / 360.0);
        }
        throw new IllegalArgumentException("Insufficient parameters.");
    }
}
