record User(String name, String email, int age) {
    public User {
        if (name == null || name.isBlank()) {
            throw new IllegalArgumentException("name is required");
        }
        if (email == null || !email.contains("@")) {
            throw new IllegalArgumentException("valid email is required");
        }
        if (age < 0) {
            throw new IllegalArgumentException("age cannot be negative");
        }
    }

    public boolean isAdult() {
        return age >= 18;
    }
}

public class Main {
    public static void main(String[] args) {
        User user = new User("Alice", "alice@example.com", 25);
        System.out.println(user);
        System.out.println("Adult? " + user.isAdult());
    }
}