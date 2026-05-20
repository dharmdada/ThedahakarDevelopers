import static java.util.stream.Collectors.*;
import java.util.IntSummaryStatistics;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        List<String> names = List.of("Alice", "Bob", "Charlie", "Alice");

        // To List, Set, Map
        List<String> list = names.stream().collect(toList());
        Set<String> set = names.stream().collect(toSet());
        Map<String, Integer> map = names.stream().distinct()
            .collect(toMap(n -> n, String::length));

        // Joining strings
        String joined = names.stream().collect(joining(", "));
        // "Alice, Bob, Charlie, Alice"

        // Grouping
        Map<Integer, List<String>> byLength = names.stream()
            .collect(groupingBy(String::length));
        // {3=[Bob], 5=[Alice, Alice], 7=[Charlie]}

        // Partitioning (split into two groups by a predicate)
        Map<Boolean, List<String>> partitioned = names.stream()
            .collect(partitioningBy(n -> n.length() > 4));

        // Statistics
        IntSummaryStatistics stats = names.stream()
            .collect(summarizingInt(String::length));
        // count=4, sum=20, min=3, average=5.0, max=7
        System.out.println(joined + " | " + stats);
    }
}