public class Main {
    public static void main(String[] args) {
        // ---- Basic arithmetic ----
        Math.abs(-42);            // 42        (absolute value)
        Math.abs(Integer.MIN_VALUE); // MIN_VALUE! Overflow trap — use Math.absExact() in Java 15+
        Math.max(10, 20);         // 20
        Math.min(10, 20);         // 10
        Math.signum(-5.0);        // -1.0  (sign: -1, 0, or 1)

        // ---- Overflow-safe integer math (Java 8+) ----
        try {
            Math.addExact(Integer.MAX_VALUE, 1);    // throws ArithmeticException — overflow detected!
        } catch (ArithmeticException e) {}
        Math.multiplyExact(100_000, 100_000);   // 10_000_000_000L — use long version
        try {
            Math.incrementExact(Integer.MAX_VALUE); // throws — safe increment
        } catch (ArithmeticException e) {}

        // ---- Powers and roots ----
        Math.pow(2, 10);          // 1024.0
        Math.sqrt(144);           // 12.0
        Math.cbrt(27);            // 3.0     (cube root)
        Math.log(Math.E);         // 1.0     (natural log)
        Math.log10(1000);         // 3.0

        // ---- Rounding (all return double unless noted) ----
        Math.round(3.5);          // 4L   (long — rounds half up)
        Math.round(-3.5);         // -3L  (rounds toward positive infinity)
        Math.floor(3.9);          // 3.0  (always rounds DOWN — toward -∞)
        Math.ceil(3.1);           // 4.0  (always rounds UP — toward +∞)
        Math.rint(3.5);           // 4.0  (rounds to nearest even — banker's rounding)
        Math.rint(2.5);           // 2.0  (2 is even — rounds DOWN!)

        // ---- Trigonometry (input/output in radians) ----
        Math.sin(Math.PI / 2);    // 1.0
        Math.cos(0);              // 1.0
        Math.atan2(1, 1);         // 0.785... (π/4 radians = 45 degrees)
        Math.toRadians(90);       // 1.570... (π/2)
        Math.toDegrees(Math.PI);  // 180.0

        // ---- Useful constants ----
        System.out.println(Math.PI);   // 3.141592653589793
        System.out.println(Math.E);    // 2.718281828459045

        // ---- Hypotenuse (avoids overflow in a²+b²) ----
        Math.hypot(3, 4);         // 5.0  (√(3²+4²), numerically stable)
    }
}