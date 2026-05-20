sealed interface Result<T> permits Result.Success, Result.Failure {
    record Success<T>(T value) implements Result<T> {}
    record Failure<T>(String error) implements Result<T> {}

    static <T> Result<T> ok(T value) { return new Success<>(value); }
    static <T> Result<T> err(String msg) { return new Failure<>(msg); }

    default T getOrElse(T fallback) {
        return this instanceof Success<T> s ? s.value() : fallback;
    }
}

record User(String email) {}

public class Main {
    static Result<User> findByEmail(String email) {
        return email.endsWith("@example.com")
            ? Result.ok(new User(email))
            : Result.err("User not found");
    }

    public static void main(String[] args) {
        Result<User> result = findByEmail("alice@example.com");
        switch (result) {
            case Result.Success<User> s -> System.out.println("Found: " + s.value());
            case Result.Failure<User> f -> System.out.println("Error: " + f.error());
        }
    }
}