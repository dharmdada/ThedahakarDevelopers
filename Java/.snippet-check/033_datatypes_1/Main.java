import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Primitive: holds actual value
        int a = 10;
        int b = a;  // b gets a COPY of the value
        b = 20;     // a is still 10

        // Reference: holds a pointer to an object
        int[] arr1 = {1, 2, 3};
        int[] arr2 = arr1;  // arr2 points to the SAME array
        arr2[0] = 99;       // arr1[0] is NOW 99 too!

        // Common reference types
        String name = "Alice";           // String object
        int[] numbers = new int[5];      // Array object
        Scanner sc = new Scanner(System.in); // Scanner object

        // null means "points to nothing"
        String nothing = null;
        // nothing.length()  →  NullPointerException!
    }
}