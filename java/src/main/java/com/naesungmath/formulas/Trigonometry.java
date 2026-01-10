package com.naesungmath.formulas;

public class Trigonometry {
    public static double degreeToRad(double degrees) {
        return degrees * (Math.PI / 180.0);
    }

    public static double radian(double a) {
        return degreeToRad(a);
    }

    public static double radToDegree(double radians) {
        return radians * (180.0 / Math.PI);
    }
}
