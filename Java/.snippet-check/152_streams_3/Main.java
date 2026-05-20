import java.util.Comparator;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> names = List.of("Alice", "Bob", "Alice", "Charlie", "Bob");

        // filter: keep elements matching a condition
        names.stream().filter(n -> n.startsWith("A")); // Alice, Alice

        // map: transform each element
        names.stream().map(String::toUpperCase); // ALICE, BOB, ...

        // flatMap: flatten nested structures
        List<List<Integer>> nested = List.of(List.of(1,2), List.of(3,4));
        nested.stream().flatMap(List::stream); // 1, 2, 3, 4

        // distinct: remove duplicates
        names.stream().distinct(); // Alice, Bob, Charlie

        // sorted
        names.stream().sorted(); // Natural order
        names.stream().sorted(Comparator.reverseOrder());

        // peek: debug/inspect without modifying
        names.stream().peek(System.out::println).count();

        // limit & skip
        names.stream().skip(2).limit(2); // Skip first 2, take next 2
    }
}