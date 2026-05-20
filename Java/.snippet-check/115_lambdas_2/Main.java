@FunctionalInterface  // Optional but recommended — compiler enforces the rule
interface Transformer<T, R> {
    R transform(T input);
}

public class Main {
    public static void main(String[] args) {
        Transformer<String, Integer> lengthOf = s -> s.length();
        System.out.println(lengthOf.transform("Hello")); // 5
    }
}