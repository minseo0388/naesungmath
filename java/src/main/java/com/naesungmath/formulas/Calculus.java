package com.naesungmath.formulas;

import java.util.function.Function;

public class Calculus {
    public static double diff(Function<Double, Double> f, double x) {
        return diff(f, x, 1e-5);
    }

    public static double diff(Function<Double, Double> f, double x, double h) {
        return (f.apply(x + h) - f.apply(x)) / h;
    }

    public static double infiniteSeries(int type) {
        return infiniteSeries(type, 0);
    }

    public static double infiniteSeries(int type, double x) {
        if (type == 4)
            return 1.0 / (1.0 - x);
        if (type == 1)
            return 2.0;
        if (type == 2)
            return 2.0 / 3.0;
        if (type == 3)
            return Math.exp(x);
        return 0;
    }

    public static double integral(Function<Double, Double> f, double start, double end) {
        return integral(f, start, end, 100);
    }

    public static double integral(Function<Double, Double> f, double start, double end, double density) {
        double step = (end - start) / density;
        double area = 0;
        for (int i = 0; i < (int) density; i++) {
            double x = start + i * step;
            area += f.apply(x) * step;
        }
        return area;
    }

    public static double maclaurin(Function<Double, Double> f, double x, int n) {
        return taylor(f, x, 0, n);
    }

    public static double sigma(int start, int end, Function<Integer, Double> func) {
        double sumVal = 0;
        for (int i = start; i <= end; i++) {
            sumVal += func.apply(i);
        }
        return sumVal;
    }

    public static double sigmaCubed(double n) {
        return Math.pow(n * (n + 1) / 2, 2);
    }

    public static double sigmaSquared(double n) {
        return n * (n + 1) * (2 * n + 1) / 6.0;
    }

    public static double taylor(Function<Double, Double> f, double x, double a, int n) {
        double sumVal = 0;
        for (int i = 0; i < n; i++) {
            sumVal += (diffN(f, a, i) / BasicMath.factorial(i)) * Math.pow(x - a, i);
        }
        return sumVal;
    }

    private static double diffN(Function<Double, Double> f, double x, int n) {
        if (n == 0)
            return f.apply(x);
        if (n == 1)
            return diff(f, x);
        double h = 1e-4;
        return (diffN(f, x + h, n - 1) - diffN(f, x - h, n - 1)) / (2 * h);
    }
}
