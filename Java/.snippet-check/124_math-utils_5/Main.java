import java.util.UUID;

public class Main {
    public static void main(String[] args) {
        // Version 4: random UUID (most common)
        UUID id = UUID.randomUUID();
        System.out.println(id); // e.g., 550e8400-e29b-41d4-a716-446655440000

        // As string
        String s = id.toString();  // standard format with dashes
        String compact = s.replace("-", ""); // 32 hex chars, no dashes

        // Parse from string
        UUID parsed = UUID.fromString("550e8400-e29b-41d4-a716-446655440000");

        // Compare
        UUID a = UUID.randomUUID();
        UUID b = UUID.randomUUID();
        a.equals(b);         // false (different random values)
        a.compareTo(b);      // -1, 0, or 1

        // UUID probability of collision:
        // 2^122 possible values. At 1 billion UUIDs/second, expected first collision: 86 years.
    }
}