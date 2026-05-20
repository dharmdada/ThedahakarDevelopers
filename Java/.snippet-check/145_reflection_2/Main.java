@FunctionalInterface
interface Converter {
    String convert(int value);
}

class Parent {
    void run() { System.out.println("Parent"); }
}

class Child extends Parent {
    @Override
    void run() { System.out.println("Child"); }

    @Deprecated(since = "1.5", forRemoval = false)
    void oldApi() { System.out.println("Deprecated API"); }

    @SuppressWarnings("unchecked")
    void uncheckedExample() {
        java.util.List raw = new java.util.ArrayList();
        java.util.List<String> typed = raw;
    }
}

public class Main {
    public static void main(String[] args) {
        new Child().run();
        Converter converter = value -> "#" + value;
        System.out.println(converter.convert(42));
    }
}