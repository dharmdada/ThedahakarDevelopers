import java.util.List;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // Autoboxing: primitive → Wrapper (automatic)
        Integer boxed = 42;   // int → Integer automatically

        // Unboxing: Wrapper → primitive (automatic)
        int unboxed = boxed;   // Integer → int automatically

        // Why it matters: Collections need objects
        List<Integer> nums = new ArrayList<>();
        nums.add(10);  // Autoboxing: int 10 → Integer.valueOf(10)
        int first = nums.get(0); // Unboxing: Integer → int

        // Useful Wrapper methods
        int max = Integer.MAX_VALUE;         // 2,147,483,647
        int parsed = Integer.parseInt("123"); // String → int
        String binary = Integer.toBinaryString(255); // "11111111"
    }
}