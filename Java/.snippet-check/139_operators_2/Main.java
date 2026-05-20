public class Main {
    public static void main(String[] args) {
        int x = 10;
        x += 5;  // x = x + 5  → 15
        x -= 3;  // x = x - 3  → 12
        x *= 2;  // x = x * 2  → 24
        x /= 4;  // x = x / 4  → 6
        x %= 4;  // x = x % 4  → 2
        x &= 3;  // x = x & 3  (bitwise AND)
        x |= 5;  // x = x | 5  (bitwise OR)
        x ^= 2;  // x = x ^ 2  (bitwise XOR)
        x <<= 1; // x = x << 1 (left shift)
        x >>= 1; // x = x >> 1 (right shift)
    }
}