import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class Main {
    public static void main(String[] args) {
        // Simple validation
        boolean isValidPhone = "555-1234".matches("\\d{3}-\\d{4}"); // true

        // Split by multiple delimiters (space, comma, or period)
        String[] words = "Java, Python. C++".split("[ ,.]+"); 
        // ["Java", "Python", "C++"]

        // High performance complex parsing using Pattern and Matcher
        Pattern pattern = Pattern.compile("Price: \\$(\\d+\\.\\d{2})");
        Matcher matcher = pattern.matcher("Item A Price: $42.99, Item B Price: $12.50");

        while (matcher.find()) {
            System.out.println("Found price: " + matcher.group(1)); 
        }
        // Prints: 42.99
        // Prints: 12.50
    }
}