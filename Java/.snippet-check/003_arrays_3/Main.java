public class Main {
    public static void main(String[] args) {
        int[] src = {1, 2, 3, 4, 5};
        int[] dest = new int[10];
        // Copy 3 elements from src starting at index 1, to dest starting at index 5
        System.arraycopy(src, 1, dest, 5, 3);
        // dest is now: [0, 0, 0, 0, 0, 2, 3, 4, 0, 0]
    }
}