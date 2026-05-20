public class Main {
    public static void main(String[] args) {
        processData();
    }

    static class Point {
        int x, y;
        Point(int x, int y) { this.x = x; this.y = y; }
    }

    public static void processData() {
        // Point object is created, but never leaves this method.
        // It does not "escape".
        Point p = new Point(10, 20);
        int result = p.x + p.y;
        System.out.println(result);
    } // The JIT will optimize this to never use the Heap!
}