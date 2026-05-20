import java.util.List;
import java.util.ArrayList;
import java.util.function.Supplier;

public class Main {
    public static void main(String[] args) {
        List<String> names = List.of("Alice", "Bob", "Charlie");

        // Instead of: names.forEach(n -> System.out.println(n))
        names.forEach(System.out::println);

        // Instead of: names.stream().map(s -> s.toUpperCase())
        names.stream().map(String::toUpperCase).toList();

        // Constructor reference
        Supplier<List<String>> factory = ArrayList::new;
        List<String> newList = factory.get();

        // Parse strings to integers
        List<Integer> nums = List.of("1", "2", "3")
            .stream()
            .map(Integer::parseInt)
            .toList();
        System.out.println(nums);
    }
}