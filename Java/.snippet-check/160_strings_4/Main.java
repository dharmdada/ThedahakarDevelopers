import java.util.StringJoiner;

public class Main {
    public static void main(String[] args) {
        // Fast and clean joining
        String csv = String.join(", ", "Apple", "Banana", "Cherry");
        // Result: "Apple, Banana, Cherry"

        // For complex structures with prefixes and suffixes
        StringJoiner joiner = new StringJoiner(", ", "[", "]");
        joiner.add("Java").add("Python").add("C++");
        // Result: "[Java, Python, C++]"
    }
}