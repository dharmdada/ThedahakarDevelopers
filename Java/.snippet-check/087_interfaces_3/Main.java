@FunctionalInterface
interface MathOperation {
    int operate(int a, int b); // The single abstract method
}

public class Main {
    public static void main(String[] args) {
        // Now you can instantiate it using a Lambda instead of a class!
        MathOperation addition = (a, b) -> a + b;
        System.out.println(addition.operate(5, 5)); // 10
    }
}