public class Main {
    public static void main(String[] args) {
        Shape s1 = new Circle(5.0);
        Shape s2 = new Rectangle(4.0, 6.0);
        System.out.println("Circle area: " + s1.area());
        System.out.println("Rectangle area: " + s2.area());
    }
}

class Shape {
    public double area() { return 0; }
}

class Circle extends Shape {
    private double radius;
    public Circle(double r) { this.radius = r; }

    @Override  // Always use this annotation — catches typos at compile time
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