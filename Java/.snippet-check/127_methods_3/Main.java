import java.util.List;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        int x = 5;
        modifyPrimitive(x);
        System.out.println(x); // Still 5! (Caller's variable is untouched)

        List<String> list = new ArrayList<>(List.of("A"));
        modifyReference(list);
        System.out.println(list); // [A, B]! (The object was mutated)

        reassignReference(list);
        System.out.println(list); // Still [A, B]! (Reassignment failed)
    }

    static void modifyPrimitive(int val) {
        val = 99; // Only changes the local copy
    }

    static void modifyReference(List<String> ref) {
        ref.add("B"); // Modifies the object the reference points to
    }

    static void reassignReference(List<String> ref) {
        ref = new ArrayList<>(); // Changes local pointer only!
        ref.add("C");
    }
}