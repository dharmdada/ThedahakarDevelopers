public class Main {
    public static void main(String[] args) {
        // Syntax: condition ? valueIfTrue : valueIfFalse
        int age = 20;
        String status = (age >= 18) ? "Adult" : "Minor";

        // Nested ternary (use sparingly!)
        int score = 85;
        String grade = (score >= 90) ? "A"
                     : (score >= 80) ? "B"
                     : (score >= 70) ? "C" : "F";
    }
}