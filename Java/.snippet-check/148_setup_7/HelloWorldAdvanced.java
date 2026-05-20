public class HelloWorldAdvanced {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.printf("Java Version: %s%n", System.getProperty("java.version"));
        System.out.printf("Arguments Count: %d%n", args.length);
        for (int i = 0; i < args.length; i++) {
            System.out.printf("  → arg[%d]: %s%n", i, args[i]);
        }
    }
}