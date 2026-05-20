public class Main {
    public static void main(String[] args) {
        Child c = new Child();
        c.demo();
    }
}

class Parent {
    protected int x = 10;
    public void show() { System.out.println("Parent"); }
}

class Child extends Parent {
    private int x = 20; // Hides parent's x

    public void demo() {
        System.out.println(x);        // 20 (own field)
        System.out.println(super.x);  // 10 (parent's field)
        super.show();                // Call parent's method
    }
}