record Point(int x, int y) {}
record Circle(Point center, int radius) {}

public class Main {
    public static void main(String[] args) {
        Object shape = new Circle(new Point(10, 20), 5);

        if (shape instanceof Circle circle) {
            Point center = circle.center();
            int radius = circle.radius();
            System.out.println("Circle at " + center.x() + "," + center.y());
            System.out.println("Radius: " + radius);
        }
    }
}