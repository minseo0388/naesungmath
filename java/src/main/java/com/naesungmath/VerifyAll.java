package com.naesungmath;

import com.naesungmath.formulas.*;
import java.util.Map;

public class VerifyAll {

    public static void main(String[] args) {
        System.out.println("Verifying Java Ported Formulas...");

        try {
            // 1. BasicMath
            assertAlmostEqual(BasicMath.add(2, 3), 5.0, "BasicMath.add");
            assertAlmostEqual(BasicMath.subtract(5, 3), 2.0, "BasicMath.subtract");

            // 2. Equation
            double[] roots = Equation.quadraticRoots(1, -3, 2);
            // Roots could be (2, 1) or (1, 2). Check if contains 2.
            // Python check was roots[0] == 2. Let's loosen to check if set contains 2.
            // Actually Python `quadratic_roots` returns x1, x2 where x1 uses +discriminant.
            // sqrt(9-8)=1. (-(-3)+1)/2 = 2. So first element 2.
            assertAlmostEqual(roots[0], 2.0, "Equation.quadraticRoots x1");

            // 3. Calculus
            // sigma(1, 5, x -> x) = 1+2+3+4+5 = 15
            assertAlmostEqual(Calculus.sigma(1, 5, x -> (double) x), 15.0, "Calculus.sigma");

            // 4. LinearAlgebra (Just basic check)
            // Python: matA = [[1, 2], [3, 4]] ... (test not fully detailed there)
            // Let's add a simple Det check. Det([[1, 2], [3, 4]]) = 4-6 = -2.
            double[][] mat = { { 1, 2 }, { 3, 4 } };
            assertAlmostEqual(LinearAlgebra.determinant(mat), -2.0, "LinearAlgebra.determinant");

            // 5. Triangle
            assertAlmostEqual(Triangle.area(10.0, 5.0, null, null, null, null, null, null, null), 25.0,
                    "Triangle.area");
            assertAlmostEqual(Triangle.pythagoras(3, 4), 5.0, "Triangle.pythagoras");

            // 6. Quadrilateral
            assertAlmostEqual(Quadrilateral.squareArea(5.0), 25.0, "Quadrilateral.squareArea");
            assertAlmostEqual(Quadrilateral.rectangleArea(5.0, 10.0), 50.0, "Quadrilateral.rectangleArea");
            assertAlmostEqual(Quadrilateral.trapezoidArea(2.0, 4.0, 5.0), 15.0, "Quadrilateral.trapezoidArea");

            // 7. Polygon
            assertAlmostEqual(Polygon.pentagonArea(5), 43.0119, "Polygon.pentagonArea");

            // 8. Solid3D
            assertAlmostEqual(Solid3D.cubeArea(5), 150.0, "Solid3D.cubeArea");
            assertAlmostEqual(Solid3D.squarePyramidVolume(5.0, null, 10.0), 77.9512, "Solid3D.squarePyramidVolume");

            // 9. Circle
            assertAlmostEqual(Circle.area(10.0), 314.159, "Circle.area");
            assertAlmostEqual(Circle.sectorAngle(10.0, 5.0), 28.6479, "Circle.sectorAngle");

            // 10. AnalyticGeometry
            double[] cg = AnalyticGeometry.centerGravity(0, 0, 4, 0, 2, 3);
            assertAlmostEqual(cg[0], 2.0, "AnalyticGeometry.centerGravity X");

            // 11. Sequences (AP/GP)

            // AP: a=2, d=2, n=3 => an=6, s=12
            Map<String, Double> apRes = ArithmeticProgression.solve(2.0, 2.0, 3.0, null, null);
            assertAlmostEqual(apRes.get("an"), 6.0, "ArithmeticProgression.solve -> an");
            assertAlmostEqual(apRes.get("s"), 12.0, "ArithmeticProgression.solve -> s");

            // GP: a=2, r=2, n=3 => an=16, s=14 (per Python verification)
            Map<String, Double> gpRes = GeometricProgression.solve(2.0, 2.0, 3.0, null, null, null);
            assertAlmostEqual(gpRes.get("an"), 16.0, "GeometricProgression.solve -> an");
            assertAlmostEqual(gpRes.get("s"), 14.0, "GeometricProgression.solve -> s");

            System.out.println("All Java Tests Passed!");

        } catch (Exception e) {
            e.printStackTrace();
            System.exit(1);
        }
    }

    private static void assertAlmostEqual(double actual, double expected, String testName) {
        if (Math.abs(actual - expected) > 0.001) {
            System.out.println("[FAIL] " + testName + ". Expected ~" + expected + ", Got " + actual);
            System.exit(1);
        } else {
            System.out.println("[PASS] " + testName);
        }
    }
}
