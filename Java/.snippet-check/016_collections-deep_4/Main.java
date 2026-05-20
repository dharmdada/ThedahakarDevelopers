import java.util.*;

public class Main {
    public static double sum(List<? extends Number> list) {
        return list.stream().mapToDouble(Number::doubleValue).sum();
    }

    public static void addNumbers(List<? super Integer> list) {
        list.add(1);
        list.add(2);
    }

    public static <T extends Comparable<T>> T max(T a, T b) {
        return a.compareTo(b) >= 0 ? a : b;
    }

    public static void main(String[] args) {
        System.out.println(sum(List.of(1, 2, 3)));
        System.out.println(sum(List.of(1.5, 2.5)));

        List<Number> numbers = new ArrayList<>();
        addNumbers(numbers);
        System.out.println(numbers);

        System.out.println(max("apple", "banana"));
    }
}