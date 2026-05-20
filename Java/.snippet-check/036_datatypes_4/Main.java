import java.util.List;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        final int MAX_USERS = 100;
        final double TAX_RATE = 0.18;
        final String APP_NAME = "JavaMaster";

        // MAX_USERS = 200;  →  Compile Error! Cannot reassign final variable

        // final with reference types: the reference can't change, but the object CAN
        final List<String> list = new ArrayList<>();
        list.add("Hello");  // ✅ OK: modifying the object
        // list = new ArrayList<>();  →  ❌ Error: reassigning the reference
    }
}