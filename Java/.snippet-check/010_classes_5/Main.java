public class Main {
    public static void main(String[] args) {
        Outer outer = new Outer();
        Outer.Inner inner = outer.new Inner();        // Needs outer instance
        Outer.StaticNested sn = new Outer.StaticNested(); // No outer needed

        inner.show();
        sn.show();
        outer.demo();
    }
}

class Outer {
    private int x = 10;

    // Inner class (non-static) — can access outer's fields
    class Inner {
        void show() { System.out.println(x); } // Accesses outer x!
    }

    // Static nested class — cannot access outer's instance fields
    static class StaticNested {
        void show() { System.out.println("I'm static nested"); }
    }

    void demo() {
        // Anonymous inner class
        Runnable r = new Runnable() {
            @Override
            public void run() { System.out.println("Anonymous!"); }
        };
        r.run();

        // Local class (inside a method)
        class LocalClass {
            void greet() { System.out.println("I'm local"); }
        }
        new LocalClass().greet();
    }
}