import java.util.function.Predicate;
import java.util.function.Function;

public class Main {
    public static void main(String[] args) {
        // Full syntax:         (parameters) -> { statements; }
        // Single expression:   (parameters) -> expression
        // Single param:        param -> expression
        // No params:           () -> expression

        // Examples with Predicate<String>
        Predicate<String> isEmpty = s -> s.isEmpty();
        Predicate<String> isLong = s -> s.length() > 10;

        // Chaining predicates
        Predicate<String> isShortAndNotEmpty = isEmpty.negate().and(s -> s.length() < 5);

        // Function composition
        Function<String, String> trim = String::trim;
        Function<String, String> upper = String::toUpperCase;
        Function<String, String> pipeline = trim.andThen(upper);
        System.out.println(pipeline.apply("  hello  ")); // "HELLO"

        // Multi-line lambda body
        Function<Integer, String> classify = n -> {
            if (n < 0) return "negative";
            if (n == 0) return "zero";
            return "positive";
        };
        System.out.println(classify.apply(42));
    }
}