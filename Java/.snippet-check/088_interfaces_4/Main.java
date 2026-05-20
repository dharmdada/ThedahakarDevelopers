// Only Circle, Rectangle, and Triangle can extend Shape
sealed class Shape
    permits Circle, Rectangle, Triangle {}

// Subclass options:
final class Circle extends Shape {}        // Cannot be extended further
sealed class Rectangle extends Shape
    permits Square {}                       // Can only be extended by Square
final class Square extends Rectangle {}
non-sealed class Triangle extends Shape {} // Open to any subclass

public class Main {
    public static void main(String[] args) {
        Shape shape = new Circle();
        // Exhaustive switch (compiler checks all cases)
        String desc = switch (shape) {
            case Circle c    -> "Circle";
            case Rectangle r -> "Rectangle";
            case Triangle t  -> "Triangle";
            default -> "Unknown shape";
        };
        System.out.println(desc);
    }
}