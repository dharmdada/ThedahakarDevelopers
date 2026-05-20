import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        int[] arr = {5, 3, 8, 1, 9};

        // Sort
        Arrays.sort(arr); // [1, 3, 5, 8, 9]

        // Binary Search (array MUST be sorted first!)
        int idx = Arrays.binarySearch(arr, 5); // 2

        // Fill
        int[] filled = new int[5];
        Arrays.fill(filled, 42); // [42, 42, 42, 42, 42]

        // Copy
        int[] copy = Arrays.copyOf(arr, 3); // [1, 3, 5]
        int[] range = Arrays.copyOfRange(arr, 1, 4); // [3, 5, 8]

        // Compare
        boolean eq = Arrays.equals(arr, copy); // false
        
        int[][] matrix1 = {{1, 2}, {3, 4}};
        int[][] matrix2 = {{1, 2}, {3, 4}};
        Arrays.deepEquals(matrix1, matrix2); // For 2D arrays

        // Print (don't use toString on arrays!)
        System.out.println(Arrays.toString(arr)); // [1, 3, 5, 8, 9]
        
        int[][] matrix = {{1, 2}, {3, 4}};
        System.out.println(Arrays.deepToString(matrix)); // For 2D

        // Convert to List
        List<Integer> list = Arrays.asList(1, 2, 3);

        // Stream from array
        Arrays.stream(arr).sum(); // 26
    }
}