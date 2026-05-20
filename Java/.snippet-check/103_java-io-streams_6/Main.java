import java.io.*;

class User implements Serializable {
    private static final long serialVersionUID = 1L;
    private final String name;
    private final int age;
    private transient String password;

    User(String name, int age) {
        this.name = name;
        this.age = age;
        this.password = "default123";
    }

    String name() { return name; }
    String password() { return password; }

    @Override public String toString() { return name + " (" + age + ")"; }
}

public class Main {
    public static void main(String[] args) throws Exception {
        User user = new User("Alice", 30);
        try (var oos = new ObjectOutputStream(
                new BufferedOutputStream(new FileOutputStream("user.ser")))) {
            oos.writeObject(user);
        }

        try (var ois = new ObjectInputStream(
                new BufferedInputStream(new FileInputStream("user.ser")))) {
            User loaded = (User) ois.readObject();
            System.out.println(loaded);
            System.out.println("Password after deserialize: " + loaded.password());
        }
    }
}