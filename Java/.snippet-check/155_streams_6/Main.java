import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> names = List.of("Alice", "Bob", "Charlie", "Alice");

        // Process elements in parallel using multiple threads
        long count = names.parallelStream()
            .filter(n -> n.length() > 3)
            .count();

        // Convert sequential to parallel
        names.stream().parallel().forEach(System.out::println);
        System.out.println("Count: " + count);
    }
}