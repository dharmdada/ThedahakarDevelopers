public class Main {
    public static void main(String[] args) {
        Object obj = "Hello Java";

        if (obj instanceof String) {
            String s = (String) obj;
            System.out.println(s.length());
        }

        if (obj instanceof String s && s.length() > 5) {
            System.out.println("Long string: " + s);
        }
    }
}