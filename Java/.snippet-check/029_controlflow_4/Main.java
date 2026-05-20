import java.util.List;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        String[] fruits = {"Apple", "Banana", "Cherry"};
        for (String fruit : fruits) {
            System.out.println(fruit);
        }

        // Works with any Iterable (List, Set, etc.)
        List<Integer> nums = List.of(10, 20, 30);
        for (int n : nums) { System.out.println(n); }

        // Map iteration
        Map<String, Integer> ages = Map.of("Alice", 25);
        for (var entry : ages.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}