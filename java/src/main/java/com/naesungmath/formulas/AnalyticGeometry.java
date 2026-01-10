package com.naesungmath.formulas;

public class AnalyticGeometry {
    public static double[] centerGravity(double x1, double y1, double x2, double y2, double x3, double y3) {
        return new double[] { (x1 + x2 + x3) / 3.0, (y1 + y2 + y3) / 3.0 };
    }

    public static double eccentricity(double a, double b) {
        if (a == 0)
            throw new ArithmeticException("a cannot be zero");
        return Math.sqrt(1 - Math.pow(b, 2) / Math.pow(a, 2));
    }

    public static boolean isInRange(double value, double minVal, double maxVal) {
        return value >= minVal && value <= maxVal;
    }
}
