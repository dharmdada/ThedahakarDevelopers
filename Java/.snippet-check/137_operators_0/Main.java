public class Main {
    public static void main(String[] args) {
        // Integer division truncates!
        System.out.println(10 / 3);     // 3, NOT 3.333
        System.out.println(10.0 / 3);   // 3.333... (use double!)

        // Pre-increment vs Post-increment
        int a = 5;
        int b = a++;  // b = 5, a = 6  (assign THEN increment)
        int c = ++a;  // c = 7, a = 7  (increment THEN assign)

        // Integer overflow (silent!)
        int max = Integer.MAX_VALUE;  // 2,147,483,647
        System.out.println(max + 1);  // -2,147,483,648 (wraps!)
    }
}