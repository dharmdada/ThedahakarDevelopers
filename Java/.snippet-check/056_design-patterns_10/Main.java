import java.util.*;

@FunctionalInterface
interface SortStrategy {
    void sort(List<Integer> data);
}

class NumberSorter {
    private final SortStrategy strategy;
    NumberSorter(SortStrategy strategy) { this.strategy = strategy; }
    void sort(List<Integer> data) { strategy.sort(data); }
}

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>(List.of(3, 1, 2));
        NumberSorter sorter = new NumberSorter(Collections::sort);
        sorter.sort(numbers);
        System.out.println(numbers);
    }
}