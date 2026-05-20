public class Main {
    public static void main(String[] args) {
        // break: exits the ENTIRE loop
        for (int i = 0; i < 100; i++) {
            if (i == 5) break; // Stops at 5
        }

        // continue: skips CURRENT iteration
        for (int i = 0; i < 10; i++) {
            if (i % 2 == 0) continue; // Skip evens
            System.out.println(i); // 1,3,5,7,9
        }

        // Labels: break/continue an OUTER loop from inside a nested loop
        outer:
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                if (i * j > 6) break outer; // Breaks BOTH loops
            }
        }
    }
}