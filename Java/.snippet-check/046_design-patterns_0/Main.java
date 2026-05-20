record User(String email) {}

class UserService {
    void register(User user) {
        if (user.email() == null || !user.email().contains("@")) {
            throw new IllegalArgumentException("Invalid email");
        }
        System.out.println("Saving " + user.email());
        System.out.println("Sending welcome email");
        System.out.println("Writing audit log");
    }
}

public class Main {
    public static void main(String[] args) {
        new UserService().register(new User("alice@example.com"));
    }
}