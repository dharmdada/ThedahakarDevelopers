import java.util.List;
import java.util.Optional;

public class Main {
    public static void main(String[] args) {
        List<Integer> nums = List.of(1, 2, 3, 4, 5);

        // collect: gather results into a collection
        List<Integer> evens = nums.stream().filter(n -> n % 2 == 0).toList();

        // reduce: combine all elements into one value
        int sum = nums.stream().reduce(0, Integer::sum); // 15

        // count
        long count = nums.stream().filter(n -> n > 3).count(); // 2

        // min / max
        Optional<Integer> max = nums.stream().max(Integer::compare);

        // forEach
        nums.stream().forEach(System.out::println);

        // anyMatch / allMatch / noneMatch
        boolean hasEven = nums.stream().anyMatch(n -> n % 2 == 0); // true

        // findFirst / findAny
        Optional<Integer> first = nums.stream().filter(n -> n > 3).findFirst();

        // toArray
        int[] arr = nums.stream().mapToInt(i -> i).toArray();
        System.out.println("Sum: " + sum + ", evens: " + evens);
    }
}