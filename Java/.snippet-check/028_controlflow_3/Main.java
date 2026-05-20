public class Main {
    public static void main(String[] args) {
        // Standard
        for (int i = 0; i < 10; i++) { System.out.println(i); }

        // Counting down
        for (int i = 10; i >= 0; i--) { }

        // Multiple variables
        for (int i = 0, j = 10; i < j; i++, j--) { }

        // Infinite loop
        for (;;) { break; }
    }
}