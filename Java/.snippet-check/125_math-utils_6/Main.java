import java.util.Objects;

public class Main {
    public static void main(String[] args) {
        User user = new User("Alice", "alice@example.com");

        // requireNonNullElse — default value when null
        String displayName = Objects.requireNonNullElse(user.nickname(), user.fullName());

        // Null-safe comparison
        Objects.equals(null, null);   // true  (safe — no NPE!)
        Objects.equals("a", null);    // false
        Objects.equals(null, "b");    // false
        Objects.equals("a", "a");     // true

        // Null-safe hashCode
        Objects.hashCode(null);       // 0 (safe)
        Objects.hash("Alice", 30, "alice@example.com"); // combine multiple fields

        // Null check
        Objects.isNull(null);         // true
        Objects.nonNull("hello");     // true  (useful as method reference: filter(Objects::nonNull))

        // Null-safe toString
        Objects.toString(null, "N/A");  // "N/A"

        // checkIndex, checkFromToIndex (Java 9+) — bounds checking
        Objects.checkIndex(5, 10);   // 5 (valid index into size-10 collection)
        try {
            Objects.checkIndex(10, 10);  // throws IndexOutOfBoundsException
        } catch (IndexOutOfBoundsException e) {}
    }

    public static class User {
        private final String name;
        private final String email;

        public User(String name, String email) {
            this.name  = Objects.requireNonNull(name,  "name must not be null");
            this.email = Objects.requireNonNull(email, "email must not be null");
        }

        public String nickname() { return null; }
        public String fullName() { return name; }
    }
}