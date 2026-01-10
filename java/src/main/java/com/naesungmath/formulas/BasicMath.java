package com.naesungmath.formulas;

public class BasicMath {
    public static double add(double a, double b) {
        return a + b;
    }

    public static double divide(double a, double b) {
        if (b == 0) {
            throw new IllegalArgumentException("Cannot divide by zero.");
        }
        return a / b;
    }

    public static long factorial(long n) {
        if (n < 0) throw new IllegalArgumentException("Factorial must be non-negative.");
        long result = 1;
        for (long i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    public static long gcd(long a, long b) {
        if (b == 0) return a;
        return gcd(b, a % b);
    }

    public static double minus(double a, double b) {
        return a - b;
    }

    public static double multiply(double a, double b) {
        return a * b;
    }

    public static double plus(double a, double b) {
        return a + b;
    }

    public static double pow(double a, double b) {
        return Math.pow(a, b);
    }

    public static double round(double a) {
        return Math.round(a);
    }

    public static double sqrt(double a) {
        return Math.sqrt(a);
    }

    public static double subtract(double a, double b) {
        return a - b;
    }
}
