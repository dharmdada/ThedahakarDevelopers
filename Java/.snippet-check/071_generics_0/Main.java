import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        // What you write:
        List<String> list = new ArrayList<>();
        list.add("Hello");
        String s = list.get(0);

        // What the JVM actually runs (after erasure):
        // List list = new ArrayList();           // raw type
        // list.add("Hello");
        // String s = (String) list.get(0);      // compiler inserts invisible cast

        // Runtime type check — both print "class java.util.ArrayList":
        System.out.println(new ArrayList<String>().getClass());
        System.out.println(new ArrayList<Integer>().getClass()); // SAME class!
    }
}