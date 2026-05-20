class Rectangle {
    protected int width;
    protected int height;
    void setWidth(int width) { this.width = width; }
    void setHeight(int height) { this.height = height; }
    int area() { return width * height; }
}

class Square extends Rectangle {
    @Override void setWidth(int width) { this.width = width; this.height = width; }
    @Override void setHeight(int height) { this.width = height; this.height = height; }
}

public class Main {
    static void resize(Rectangle rectangle) {
        rectangle.setWidth(5);
        rectangle.setHeight(4);
        System.out.println("Area: " + rectangle.area());
    }

    public static void main(String[] args) {
        resize(new Rectangle());
        resize(new Square());
    }
}