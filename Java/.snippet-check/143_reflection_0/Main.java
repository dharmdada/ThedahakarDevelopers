import java.lang.reflect.*;

public class Main {
    public static void main(String[] args) throws Exception {
        Class<?> clazz = String.class;

        System.out.println("Name: " + clazz.getName());
        System.out.println("Is interface? " + clazz.isInterface());

        Method[] methods = clazz.getMethods();
        for (int i = 0; i < Math.min(5, methods.length); i++) {
            System.out.println("Method: " + methods[i].getName());
        }

        Field[] fields = clazz.getDeclaredFields();
        System.out.println("Declared field count: " + fields.length);
    }
}