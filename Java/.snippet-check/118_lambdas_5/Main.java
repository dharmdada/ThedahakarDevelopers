import java.util.Optional;

public class Main {
    static Optional<String> findByName(String s) { return Optional.of(s); }
    static String computeDefault() { return "default"; }

    public static void main(String[] args) {
        // Creating Optionals
        Optional<String> full = Optional.of("Hello");       // Throws if null!
        Optional<String> maybe = Optional.ofNullable(null); // Safe for null
        Optional<String> empty = Optional.empty();

        // ❌ WRONG: defeats the purpose
        // if (opt.isPresent()) { return opt.get(); }

        // ✅ RIGHT: functional style
        maybe.orElse("default");                 // value or default
        maybe.orElseGet(() -> computeDefault()); // lazy default
        maybe.orElseThrow();                     // throw NoSuchElementException
        // maybe.orElseThrow(() -> new RuntimeException("Not found"));

        // Transform / chain
        maybe.map(String::toUpperCase);           // Optional<String>
        maybe.filter(s -> s.length() > 3);       // Optional<String> or empty
        maybe.flatMap(Main::findByName);          // Unwraps nested Optionals
        maybe.ifPresent(System.out::println);     // Only runs if present
        maybe.ifPresentOrElse(
            System.out::println,                   // If present
            () -> System.out.println("Empty!")    // If empty
        );
    }
}