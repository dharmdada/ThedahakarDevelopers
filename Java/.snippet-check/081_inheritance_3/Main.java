public class Main {
    public static void main(String[] args) {
        // Parent reference → child object
        Shape s1 = new Circle(5);
        Shape s2 = new Rectangle(4, 6);

        // Java calls the OVERRIDDEN method based on actual object type
        System.out.println(s1.area()); // Circle's area: 78.54
        System.out.println(s2.area()); // Rectangle's area: 24.0

        Main demo = new Main();
        demo.printArea(new Circle(3));
        demo.printArea(new Rectangle(2, 5));
    }

    // Power of polymorphism: one method handles ALL shapes
    public void printArea(Shape shape) {
        System.out.println("Area: " + shape.area());
    }
}

class Shape {
    public double area() { return 0; }
}

class Circle extends Shape {
    private double radius;
    public Circle(double r) { this.radius = r; }

    @Override
    public double area() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    private double w, h;
    public Rectangle(double w, double h) { this.w = w; this.h = h; }

    @Override
    public double area() { return w * h; }
}