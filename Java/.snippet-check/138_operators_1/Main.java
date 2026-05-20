public class Main {
    public static void main(String[] args) {
        System.out.println(5 + 5 + " = 10");  // "10 = 10" (Math first, then String)
        System.out.println("10 = " + 5 + 5);  // "10 = 55" (String first, forces 5+5 into String concatenation)
        System.out.println("10 = " + (5 + 5));// "10 = 10" (Parentheses force Math first)
    }
}