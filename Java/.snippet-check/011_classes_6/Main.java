public class Main {
    public static void main(String[] args) {
        final int x = 10;
        // x = 20;  →  ❌ Compile error!
        System.out.println("Final variable x: " + x);

        Base base = new Base();
        base.important();
    }
}

// Final class: CANNOT be subclassed
final class Constants {
    public static final int MAX = 100;
}
// class Sub extends Constants {}  →  ❌ Compile error!

// Final method: CANNOT be overridden by subclasses
class Base {
    public final void important() {
        System.out.println("Cannot change me");
    }
}