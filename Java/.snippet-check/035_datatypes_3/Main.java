public class Main {
    public static void main(String[] args) {
        // Widening: byte → short → int → long → float → double
        int myInt = 9;
        double myDouble = myInt;  // Automatic: 9.0

        // Narrowing: double → float → long → int → short → byte
        double pi = 3.14159;
        int truncated = (int) pi;  // Manual cast: 3 (decimal part lost!)

        // Be careful with overflow!
        int big = 130;
        byte small = (byte) big; // -126! (wraps around because byte max is 127)

        // String to Number conversions
        String numStr = "42";
        int num = Integer.parseInt(numStr);
        double dbl = Double.parseDouble("3.14");

        // Number to String
        String str = String.valueOf(42);
        String str2 = 42 + ""; // Quick trick
    }
}