public class Main {
    private int instanceVar = 10;
    private static int staticVar = 20;

    public void demonstrateScope() {
        int localVar = 30;

        if (true) {
            int blockVar = 40;
            System.out.println("Block: " + blockVar);
        }

        for (int i = 0; i < 3; i++) {
            System.out.println("Loop index: " + i);
        }

        System.out.println("Instance: " + instanceVar);
        System.out.println("Static: " + staticVar);
        System.out.println("Local: " + localVar);
    }

    public static void main(String[] args) {
        new Main().demonstrateScope();
    }
}