// ❌ Old way: ~30 lines of boilerplate
class PointClass {
    private final int x, y;
    public PointClass(int x, int y) { this.x = x; this.y = y; }
    public int x() { return x; }
    public int y() { return y; }
    // + equals, hashCode, toString...
}

// ✅ Record: ONE LINE does it all
record Point(int x, int y) {}

public class Main {
    public static void main(String[] args) {
        // Auto-generated:
        Point p = new Point(3, 5);
        System.out.println(p.x());          // 3 (accessor, no 'get' prefix!)
        System.out.println(p.y());          // 5
        System.out.println(p.toString());   // "Point[x=3, y=5]"
        System.out.println(p.equals(new Point(3, 5))); // true
    }
}