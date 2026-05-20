import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> names = List.of("Alice", "Bob", "Alice", "Charlie", "Bob");
        // The exact same logic, using Streams
        List<String> results = names.stream()
            .filter(name -> name.startsWith("A"))
            .map(String::toUpperCase)
            .distinct()
            .toList(); // Automatically creates the final list
        // It reads like plain English: "Stream names, filter A's, map to upper, keep distinct, to list."
        System.out.println(results);
    }
}