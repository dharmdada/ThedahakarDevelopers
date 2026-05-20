public class Main {
    public static void main(String[] args) {
        boolean a = true, b = false;

        // AND — both must be true
        boolean res1 = a && b;   // false

        // OR — at least one must be true
        boolean res2 = a || b;   // true

        // NOT — flips the value
        boolean res3 = !a;       // false

        // Short-circuit evaluation:
        // With &&, if left is false, right is NEVER evaluated
        // With ||, if left is true, right is NEVER evaluated
        String s = null;
        if (s != null && s.length() > 0) { // Safe! s.length() won't run if s is null
            System.out.println(s);
        }
    }
}