import java.util.Arrays;
import java.util.List;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class Main {
    public static void main(String[] args) {
        // From a Collection
        List<String> names = List.of("Alice", "Bob", "Charlie");
        Stream<String> stream = names.stream();

        // From values directly
        Stream<String> s = Stream.of("A", "B", "C");

        // From an array
        int[] arr = {1, 2, 3};
        IntStream is = Arrays.stream(arr);

        // Generate / Iterate
        Stream.generate(Math::random).limit(5);  // 5 random numbers
        Stream.iterate(0, n -> n + 2).limit(5); // 0, 2, 4, 6, 8
        IntStream.range(1, 6);                   // 1, 2, 3, 4, 5
        IntStream.rangeClosed(1, 5);              // 1, 2, 3, 4, 5
    }
}