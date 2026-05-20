import java.util.ArrayList;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        var name = "Alice";      // Compiler infers String
        var count = 42;           // Compiler infers int
        var prices = new ArrayList<Double>(); // Infers ArrayList<Double>
        var map = Map.of("a", 1); // Infers Map<String, Integer>

        // Where you CANNOT use var:
        // ❌ var x;              (no initializer)
        // ❌ var x = null;       (can't infer type from null)
    }
}