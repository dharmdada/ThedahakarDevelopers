public class Main {
    public static void main(String[] args) {
        // While: checks BEFORE each iteration
        int count = 5;
        while (count > 0) {
            System.out.println(count--);
        }

        // Do-While: runs AT LEAST ONCE
        int x = 0;
        do {
            System.out.println("Runs once even though x is 0");
        } while (x > 0);
    }
}