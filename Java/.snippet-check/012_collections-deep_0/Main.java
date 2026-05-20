import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<String> mutable = new ArrayList<>(List.of("a", "b"));
        List<String> immutable = List.of("x", "y");
        List<String> copy = List.copyOf(mutable);

        mutable.add("c");
        mutable.add(0, "first");
        mutable.set(1, "replaced");
        mutable.remove("c");
        mutable.remove(0);

        System.out.println("Contains a? " + mutable.contains("a"));
        System.out.println("Index of a: " + mutable.indexOf("a"));
        System.out.println("Immutable: " + immutable);
        System.out.println("Copy: " + copy);

        mutable.sort(Comparator.naturalOrder());
        mutable.sort(Comparator.comparing(String::length).reversed());
        System.out.println(mutable);
    }
}