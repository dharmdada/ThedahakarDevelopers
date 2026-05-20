import java.lang.reflect.Field;

class Secret {
    private String password = "12345";
}

public class Main {
    public static void main(String[] args) throws Exception {
        Secret obj = new Secret();
        Class<?> clazz = obj.getClass();

        // Access private field
        Field field = clazz.getDeclaredField("password");
        field.setAccessible(true); // BYPASS PRIVATE MODIFIER!

        // Read value
        String val = (String) field.get(obj);
        System.out.println("Old: " + val);

        // Change value
        field.set(obj, "hacked!");
    }
}