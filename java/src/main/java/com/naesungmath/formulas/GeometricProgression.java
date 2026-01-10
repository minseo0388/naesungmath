package com.naesungmath.formulas;

import java.util.HashMap;
import java.util.Map;

public class GeometricProgression {
    public static Map<String, Double> solve(Double a, Double r, Double n, Double an, Double s, Double infinitySum) {
        Map<String, Double> result = new HashMap<>();
        result.put("a", a);
        result.put("r", r);
        result.put("n", n);
        result.put("an", an);
        result.put("s", s);
        result.put("infinity_sum", infinitySum);

        boolean changed = true;
        int loopCount = 0;

        while (changed && loopCount < 5) {
            changed = false;

            Double curA = result.get("a");
            Double curR = result.get("r");
            Double curN = result.get("n");
            Double curAn = result.get("an");
            Double curS = result.get("s");
            Double curInfSum = result.get("infinity_sum");

            // 1. an = a * r^n
            if (curAn == null && curA != null && curR != null && curN != null) {
                curAn = curA * Math.pow(curR, curN);
                result.put("an", curAn);
                changed = true;
            }

            // 2. s = a(1-r^n)/(1-r)
            if (curS == null && curA != null && curR != null && curN != null) {
                if (curR != 1) {
                    curS = curA * (1 - Math.pow(curR, curN)) / (1 - curR);
                    result.put("s", curS);
                    changed = true;
                }
            }

            // 3. infinity_sum = a / (1-r)
            if (curInfSum == null && curA != null && curR != null) {
                if (curR > -1 && curR < 1) {
                    curInfSum = curA / (1 - curR);
                    result.put("infinity_sum", curInfSum);
                    changed = true;
                }
            }

            // a from an, r, n
            if (curA == null && curAn != null && curR != null && curN != null) {
                curA = curAn / Math.pow(curR, curN);
                result.put("a", curA);
                changed = true;
            }

            loopCount++;
        }

        return result;
    }
}
