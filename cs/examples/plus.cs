using System;
using static NaesungMath.CS.Formulas;

class Program
{
    static void Main(string[] args)
    {
        int a = 1;
        int b = 2;

        var result = plus(a, b);

        Console.WriteLine($"{a} + {b} = {result}");
    }
}
