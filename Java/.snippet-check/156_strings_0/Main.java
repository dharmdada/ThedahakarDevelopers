public class Main {
    public static void main(String[] args) {
        // Both point to the exact same object in the String Pool
        String s1 = "Hello";
        String s2 = "Hello";
        System.out.println(s1 == s2); // true (same reference!)

        // Forces the creation of a brand new object OUTSIDE the pool
        String s3 = new String("Hello");
        System.out.println(s1 == s3); // false (different objects in memory)
        System.out.println(s1.equals(s3)); // true (same text value)

        // You can push an outside string into the pool manually
        String s4 = s3.intern();
        System.out.println(s1 == s4); // true
    }
}