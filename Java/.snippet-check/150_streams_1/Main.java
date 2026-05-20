import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> names = List.of("Alice", "Bob", "Alice", "Charlie", "Bob");

        // Goal: Find all unique names starting with 'A', converted to uppercase
        List<String> results = new ArrayList<>();
        for (String name : names) {
            if (name.startsWith("A")) {
                String upper = name.toUpperCase();
                if (!results.contains(upper)) { // Check for duplicates
                    results.add(upper);
                }
            }
        }
        // State management, if-statements, and temporary collections clutter the logic.
        System.out.println(results);
    }
}