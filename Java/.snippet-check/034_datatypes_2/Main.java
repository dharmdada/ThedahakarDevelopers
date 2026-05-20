import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        // ❌ BAD: Floating point rounding error
        double total = 0.1 + 0.2;
        System.out.println(total); // Prints: 0.30000000000000004

        // ✅ GOOD: BigDecimal precision
        BigDecimal b1 = new BigDecimal("0.1"); // ALWAYS use String constructor
        BigDecimal b2 = new BigDecimal("0.2");
        BigDecimal result = b1.add(b2);
        System.out.println(result); // Prints: 0.3
    }
}