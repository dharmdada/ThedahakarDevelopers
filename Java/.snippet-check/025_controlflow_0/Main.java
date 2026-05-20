public class Main {
    public static void main(String[] args) {
        int score = 85;

        if (score >= 90) {
            System.out.println("Grade: A");
        } else if (score >= 80) {
            System.out.println("Grade: B");
        } else if (score >= 70) {
            System.out.println("Grade: C");
        } else {
            System.out.println("Grade: F");
        }

        // Nested if
        int age = 20;
        boolean hasLicense = true;
        if (age >= 18) {
            if (hasLicense) {
                System.out.println("Can drive");
            }
        }
    }
}