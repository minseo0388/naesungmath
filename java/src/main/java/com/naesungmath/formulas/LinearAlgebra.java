package com.naesungmath.formulas;

import java.util.Random;

public class LinearAlgebra {

    // Helper to print matrix for debugging if needed, strictly not part of original
    // but useful.

    public static double[][] add(double[][] matrixA, double[][] matrixB) {
        int rows = matrixA.length;
        int cols = matrixA[0].length;
        double[][] result = new double[rows][cols];
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                result[i][j] = matrixA[i][j] + matrixB[i][j];
            }
        }
        return result;
    }

    public static double determinant(double[][] matrix) {
        int n = matrix.length;
        if (n == 1)
            return matrix[0][0];
        if (n == 2)
            return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];

        double det = 0;
        for (int p = 0; p < n; p++) {
            det += Math.pow(-1, p) * matrix[0][p] * determinant(subMatrix(matrix, 0, p));
        }
        return det;
    }

    public static double[][] gaussian(double[][] matrix) {
        // Placeholder as per Python source
        return matrix;
    }

    public static double[][] identity(int n) {
        double[][] result = new double[n][n];
        for (int i = 0; i < n; i++) {
            result[i][i] = 1.0;
        }
        return result;
    }

    public static double[][] inverse(double[][] matrix) {
        double det = determinant(matrix);
        if (Math.abs(det) < 1e-9)
            throw new IllegalArgumentException("Matrix is singular");
        int n = matrix.length;
        double[][] result = new double[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                result[i][j] = Math.pow(-1, i + j) * determinant(subMatrix(matrix, i, j)) / det;
            }
        }
        return transpose(result);
    }

    public static double[][] multiply(double[][] matrixA, double[][] matrixB) {
        int rowsA = matrixA.length;
        int colsA = matrixA[0].length;
        int colsB = matrixB[0].length;

        double[][] result = new double[rowsA][colsB];
        for (int i = 0; i < rowsA; i++) {
            for (int j = 0; j < colsB; j++) {
                for (int k = 0; k < colsA; k++) {
                    result[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
        return result;
    }

    public static double[][] multiplyScalar(double[][] matrix, double k) {
        int rows = matrix.length;
        int cols = matrix[0].length;
        double[][] result = new double[rows][cols];
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                result[i][j] = matrix[i][j] * k;
            }
        }
        return result;
    }

    public static double[] normalize(double[] vector) {
        double sumSq = 0;
        for (double v : vector)
            sumSq += v * v;
        double mag = Math.sqrt(sumSq);

        double[] result = new double[vector.length];
        for (int i = 0; i < vector.length; i++) {
            result[i] = vector[i] / mag;
        }
        return result;
    }

    public static double[][] outerProduct(double[] u, double[] v) {
        int n = u.length;
        int m = v.length;
        double[][] result = new double[n][m];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                result[i][j] = u[i] * v[j];
            }
        }
        return result;
    }

    public static double[] randomVector(int length) {
        Random rand = new Random();
        double[] result = new double[length];
        for (int i = 0; i < length; i++) {
            result[i] = rand.nextDouble();
        }
        return result;
    }

    public static double sqrtDotProduct(double[] u, double[] v) {
        double dot = 0;
        for (int i = 0; i < u.length; i++) {
            dot += u[i] * v[i];
        }
        return Math.sqrt(dot);
    }

    public static double[][] subtract(double[][] matrixA, double[][] matrixB) {
        int rows = matrixA.length;
        int cols = matrixA[0].length;
        double[][] result = new double[rows][cols];
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                result[i][j] = matrixA[i][j] - matrixB[i][j];
            }
        }
        return result;
    }

    public static double trace(double[][] matrix) {
        double traceVal = 0;
        for (int i = 0; i < matrix.length; i++) {
            traceVal += matrix[i][i];
        }
        return traceVal;
    }

    public static double[][] transpose(double[][] matrix) {
        int rows = matrix.length;
        int cols = matrix[0].length;
        double[][] result = new double[cols][rows];
        for (int i = 0; i < cols; i++) {
            for (int j = 0; j < rows; j++) {
                result[i][j] = matrix[j][i];
            }
        }
        return result;
    }

    private static double[][] subMatrix(double[][] matrix, int rowToRemove, int colToRemove) {
        int rows = matrix.length;
        int cols = matrix[0].length;
        double[][] result = new double[rows - 1][cols - 1];

        int r = 0;
        for (int i = 0; i < rows; i++) {
            if (i == rowToRemove)
                continue;
            int c = 0;
            for (int j = 0; j < cols; j++) {
                if (j == colToRemove)
                    continue;
                result[r][c] = matrix[i][j];
                c++;
            }
            r++;
        }
        return result;
    }
}
