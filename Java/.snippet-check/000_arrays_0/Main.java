public class Main {
    public static void main(String[] args) {
        // Declaration + initialization
        int[] numbers = {10, 20, 30, 40, 50};

        // Declaration with size (default values: 0 for int, null for objects)
        int[] scores = new int[5];

        // Accessing elements (0-indexed)
        System.out.println(numbers[0]); // 10
        System.out.println(numbers[4]); // 50
        // numbers[5] → ArrayIndexOutOfBoundsException!

        // Modifying elements
        numbers[2] = 99;

        // Array length (it's a FIELD, not a method!)
        int len = numbers.length; // 5 (no parentheses!)

        // Iterating
        for (int i = 0; i < numbers.length; i++) {
            System.out.println(numbers[i]);
        }
        for (int num : numbers) {
            System.out.println(num);
        }
    }
}