import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        // ❌ WRONG: float arithmetic for money
        double a = 0.1, b = 0.2;
        System.out.println(a + b);         // 0.30000000000000004 — WRONG!
        System.out.println(a + b == 0.3);  // false — comparing is broken!

        // ✅ CORRECT: BigDecimal with String constructor
        BigDecimal price    = new BigDecimal("19.99");
        BigDecimal taxRate  = new BigDecimal("0.18"); // 18% GST
        BigDecimal taxAmt   = price.multiply(taxRate);
        BigDecimal total    = price.add(taxAmt);

        // ❌ BAD: double constructor — already has float error!
        BigDecimal bad = new BigDecimal(0.1); // = 0.1000000000000000055511...

        // ✅ GOOD: String constructor or valueOf
        BigDecimal good = new BigDecimal("0.1");       // exactly 0.1
        BigDecimal also = BigDecimal.valueOf(0.1);      // also exact (uses canonical string form)
    }
}