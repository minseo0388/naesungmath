package com.naesungmath.formulas;

import java.util.HashMap;
import java.util.Map;

public class ArithmeticProgression {
    public static Map<String, Double> solve(Double a, Double d, Double n, Double an, Double s) {
        Map<String, Double> result = new HashMap<>();
        result.put("a", a);
        result.put("d", d);
        result.put("n", n);
        result.put("an", an);
        result.put("s", s);

        boolean changed = true;
        int loopCount = 0;

        while (changed && loopCount < 5) {
            changed = false;

            Double curA = result.get("a");
            Double curD = result.get("d");
            Double curN = result.get("n");
            Double curAn = result.get("an");
            Double curS = result.get("s");

            // 1. an = a + (n-1)d
            if (curAn == null && curA != null && curN != null && curD != null) {
                curAn = curA + (curN - 1) * curD;
                result.put("an", curAn);
                changed = true;
            }

            // 2. s = n(a + an)/2
            if (curS == null && curN != null && curA != null && curAn != null) {
                curS = curN * (curA + curAn) / 2;
                result.put("s", curS);
                changed = true;
            }

            // 3. s = n(2a + (n-1)d)/2
            if (curS == null && curN != null && curA != null && curD != null) {
                curS = curN * (2 * curA + (curN - 1) * curD) / 2;
                result.put("s", curS);
                changed = true;
            }

            // Inverses
            // a from an, n, d
            if (curA == null && curAn != null && curN != null && curD != null) {
                curA = curAn - (curN - 1) * curD;
                result.put("a", curA);
                changed = true;
            }

            // Sync local vars for next iteration logic if needed, though map handles it

            loopCount++;
        }

        // Add "sum" alias to match Python
        result.put("sum", result.get("s"));

        return result;
    }
}
