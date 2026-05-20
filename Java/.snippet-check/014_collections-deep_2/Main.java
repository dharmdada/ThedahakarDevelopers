import java.util.*;

public class Main {
    public static void main(String[] args) {
        Map<String, Integer> map = new HashMap<>();
        map.put("Alice", 25);
        map.put("Bob", 30);

        int age = map.getOrDefault("Charlie", 0);
        map.putIfAbsent("Alice", 99);
        map.computeIfAbsent("Dave", key -> key.length());
        map.merge("Alice", 5, Integer::sum);

        map.forEach((key, value) -> System.out.println(key + ": " + value));
        System.out.println("Charlie age: " + age);

        Map<String, Integer> immutable = Map.of("A", 1, "B", 2);
        Map<String, Integer> immutable2 = Map.ofEntries(Map.entry("A", 1), Map.entry("B", 2));
        System.out.println(immutable);
        System.out.println(immutable2);
    }
}