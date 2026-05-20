import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] arr = {5, 3, 8, 1, 9};

        // Find max value
        int max = arr[0];
        for (int n : arr) { if (n > max) max = n; }

        // Reverse an array
        for (int i = 0, j = arr.length - 1; i < j; i++, j--) {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

        // Check if array contains value
        boolean found = Arrays.stream(arr).anyMatch(x -> x == 5);

        // Remove duplicates (using a Set)
        int[] unique = Arrays.stream(arr).distinct().toArray();
    }
}