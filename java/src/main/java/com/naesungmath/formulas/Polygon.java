package com.naesungmath.formulas;

public class Polygon {
    public static double area(double n, double sideLength) {
        return (n * Math.pow(sideLength, 2)) / (4 * Math.tan(Math.PI / n));
    }

    public static double diagonalCount(double n) {
        return n * (n - 3) / 2;
    }

    public static boolean eulerTheorem(int v, int e, int f) {
        return (v - e + f) == 2;
    }

    public static double hexagonArea(double side) {
        return (3 * Math.sqrt(3) * Math.pow(side, 2)) / 2;
    }

    public static double interiorAngleDeg(double n) {
        return 180 * (n - 2) / n;
    }

    public static double interiorAngleRad(double n) {
        return Math.PI * (n - 2) / n;
    }

    public static double interiorAngleSumDeg(double n) {
        return 180 * (n - 2);
    }

    public static double interiorAngleSumRad(double n) {
        return Math.PI * (n - 2);
    }

    public static double pentagonArea(double side) {
        return (Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * Math.pow(side, 2)) / 4;
    }

    public static double pentagonDiagonal(double side) {
        return (1 + Math.sqrt(5)) / 2 * side;
    }

    public static double pentagonHeight(double side) {
        return (Math.sqrt(5 + 2 * Math.sqrt(5)) * side) / 2;
    }
}
