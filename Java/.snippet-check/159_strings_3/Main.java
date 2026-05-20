public class Main {
    public static void main(String[] args) {
        // ❌ DISASTER: Creates 10,000 abandoned String objects. O(N^2) memory copy.
        String s = "";
        for (int i = 0; i < 10000; i++) {
            s += i; 
        }

        // ✅ PERFECT: Modifies a single internal char[] buffer. O(N) complexity.
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 10000; i++) {
            sb.append(i);
        }
        String result = sb.toString(); // Only creates the final String once
    }
}