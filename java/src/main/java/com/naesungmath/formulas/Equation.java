package com.naesungmath.formulas;

import java.util.function.Function;

public class Equation {
    public static double cubicRoots(double a, double b, double c, double d) {
        double term1 = 2 * Math.pow(b, 3) - (9 * a * b * c) + (27 * Math.pow(a, 2) * d);
        double term2 = Math.pow(b, 2) - 3 * a * c;
        double discriminantRoot = Math.sqrt(Math.pow(term1, 2) - 4 * Math.pow(term2, 3));

        double x = Math.pow(0.5 * (term1 + discriminantRoot), 1.0/3.0);
        double y = Math.pow(0.5 * (term1 - discriminantRoot), 1.0/3.0);

        return -(b / (3 * a)) - ((1 / (3 * a)) * x) - ((1 / (3 * a)) * y);
    }

    public static double newton(Function<Double, Double> f, int count) {
        return newton(f, count, 2);
    }

    public static double newton(Function<Double, Double> f, int count, double initx) {
        double xCurr = initx;
        for (int i = 0; i < count; i++) {
            xCurr = xCurr - f.apply(xCurr) / diff(f, xCurr);
        }
        return xCurr;
    }

    private static double diff(Function<Double, Double> func, double x) {
        double density = 5;
        double dx = 2 * Math.pow(10, -density);
        double dy = func.apply(x + Math.pow(10, -density)) - func.apply(x - Math.pow(10, -density));
        return dy / dx;
    }

    public static double[] quadraticRoots(double a, double b, double c) {
        double discriminant = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
        double x1 = (-b + discriminant) / (2 * a);
        double x2 = (-b - discriminant) / (2 * a);
        return new double[]{x1, x2};
    }

    public static Double rootAndCoefficient(double a, double b, double c, int type) {
        if (type == 1) {
            return -(b / a);
        }
        if (type == 2) {
            return (b / c);
        }
        return null;
    }
}
