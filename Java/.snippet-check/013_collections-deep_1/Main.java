import java.util.*;

public class Main {
    public static void main(String[] args) {
        Set<String> a = new HashSet<>(Set.of("A", "B", "C"));
        Set<String> b = Set.of("B", "C", "D");

        Set<String> union = new HashSet<>(a);
        union.addAll(b);

        Set<String> intersection = new HashSet<>(a);
        intersection.retainAll(b);

        Set<String> difference = new HashSet<>(a);
        difference.removeAll(b);

        System.out.println("Union: " + union);
        System.out.println("Intersection: " + intersection);
        System.out.println("Difference: " + difference);
    }
}