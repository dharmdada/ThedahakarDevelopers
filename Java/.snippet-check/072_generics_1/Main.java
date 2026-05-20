import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> strings = new ArrayList<>();
        List rawList = strings; // Allowed for legacy code
        rawList.add(42); // We just put an Integer into a List<String>!

        // The compiler doesn't stop this, but at runtime:
        try {
            String s = strings.get(0); // 💥 ClassCastException! Integer cannot be cast to String
        } catch (ClassCastException e) {
            System.out.println("Caught: " + e.getMessage());
        }
    }
}