public class Main {
    public static void main(String[] args) {
        doSomething();
    }

    public static void doSomething() {
        int x = 10;                 // Primitive: Stored on the Stack
        String name = new String("A"); // Object: Stored on the Heap. Reference 'name' is on the Stack.
    } // Method ends: Stack frame is popped, 'x' and 'name' reference destroyed. Object "A" becomes eligible for GC.
}