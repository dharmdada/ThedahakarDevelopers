import java.util.Map;
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        // Called on the CLASS, not an object
        int result = MathUtils.max(5, 10);
    }
}

class MathUtils {
    // Static field — one copy shared by all instances
    public static final double PI = 3.14159265;

    // Static method — no need to create an object
    public static int max(int a, int b) {
        return (a > b) ? a : b;
    }

    // Static initializer block — runs once when class loads
    private static Map<String, Integer> cache;
    static {
        cache = new HashMap<>();
        cache.put("default", 0);
    }
}