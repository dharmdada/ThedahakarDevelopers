public class Main {
    public static void main(String[] args) {
        String input = getUserInput(); // Let's pretend user typed "admin"

        // ❌ DANGEROUS: Checks memory address
        if (input == "admin") {
            System.out.println("Address match");
        }

        // ✅ SAFE: Checks character content
        if ("admin".equals(input)) {
            System.out.println("Content match");
        } // Yoda condition prevents NullPointerException!

        // Other comparison methods
        boolean match = "admin".equalsIgnoreCase("ADMIN"); // true

        // compareTo returns: negative (before), 0 (equal), positive (after)
        int res1 = "apple".compareTo("banana");  // negative (-1)
        int res2 = "banana".compareTo("apple");  // positive (1)
    }

    private static String getUserInput() {
        return "admin";
    }
}