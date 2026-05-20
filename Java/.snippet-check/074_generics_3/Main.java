import java.util.ArrayList;
import java.util.List;

public class Main {
    // T must implement Comparable — allows calling compareTo()
    public static <T extends Comparable<T>> T max(T a, T b) {
        return a.compareTo(b) >= 0 ? a : b;
    }

    // Generic method returning a new collection
    public static <T> List<T> repeat(T element, int times) {
        List<T> result = new ArrayList<>(times);
        for (int i = 0; i < times; i++) result.add(element);
        return result;
    }

    public static void main(String[] args) {
        String largest = max("apple", "banana");   // "banana"
        int    bigger  = max(10, 20);              // 20

        List<String>  words  = repeat("Java", 3);   // ["Java", "Java", "Java"]
        List<Integer> zeros  = repeat(0, 5);         // [0, 0, 0, 0, 0]
        System.out.println(largest + ", " + bigger + ", " + words + ", " + zeros);
    }
}