import java.math.BigDecimal;
import java.math.RoundingMode;

public class Main {
    public static void main(String[] args) {
        BigDecimal price    = new BigDecimal("10.005");
        BigDecimal quantity = new BigDecimal("3");

        // Basic operations (all return new BigDecimal — IMMUTABLE)
        BigDecimal total   = price.multiply(quantity);                   // 30.015
        BigDecimal discount= total.subtract(new BigDecimal("1.50"));    // 28.515
        BigDecimal half    = total.divide(new BigDecimal("2"), 2, RoundingMode.HALF_UP); // 15.01

        // Rounding modes (critical for financial code)
        BigDecimal v = new BigDecimal("2.335");
        v.setScale(2, RoundingMode.HALF_UP);    // 2.34 (commercial rounding)
        v.setScale(2, RoundingMode.HALF_EVEN);  // 2.34 (banker's rounding — less biased)
        v.setScale(2, RoundingMode.DOWN);       // 2.33 (truncate toward zero)
        v.setScale(2, RoundingMode.CEILING);    // 2.34 (toward +∞)
        v.setScale(2, RoundingMode.FLOOR);      // 2.33 (toward -∞)

        // Comparison — NEVER use equals() for value equality!
        BigDecimal a = new BigDecimal("2.0");
        BigDecimal b = new BigDecimal("2.00");
        a.equals(b);        // false! (scale 1 vs scale 2)
        a.compareTo(b);     // 0 ✅ correct numeric equality
        boolean eq = a.compareTo(b) == 0; // true ✅ USE THIS

        // Useful constants
        BigDecimal zero = BigDecimal.ZERO;   // 0
        BigDecimal one = BigDecimal.ONE;    // 1
        BigDecimal ten = BigDecimal.TEN;    // 10
    }
}