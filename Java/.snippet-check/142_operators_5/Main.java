public class Main {
    public static void main(String[] args) {
        Object obj = "Hello";

        // Classic instanceof
        if (obj instanceof String) {
            String s = (String) obj; // Manual cast needed
            System.out.println(s.toUpperCase());
        }

        // Modern Pattern Matching instanceof (no cast needed!)
        if (obj instanceof String s) {
            System.out.println(s.toUpperCase()); // s is already typed!
        }

        // Works with negation too
        // (Note: we wrap negation logic in an if statement)
        if (!(obj instanceof String s)) {
            System.out.println("Not a string");
        } else {
            System.out.println("String length: " + s.length());
        }
    }
}