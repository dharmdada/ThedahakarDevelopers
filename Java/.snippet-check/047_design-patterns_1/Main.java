record User(String email) {}
interface UserRepository { void save(User user); }
interface EmailService { void sendWelcome(User user); }
interface AuditLogger { void log(String event); }

class UserRegistrationService {
    private final UserRepository repo;
    private final EmailService email;
    private final AuditLogger audit;

    UserRegistrationService(UserRepository repo, EmailService email, AuditLogger audit) {
        this.repo = repo;
        this.email = email;
        this.audit = audit;
    }

    void register(User user) {
        repo.save(user);
        email.sendWelcome(user);
        audit.log("registered " + user.email());
    }
}

public class Main {
    public static void main(String[] args) {
        var service = new UserRegistrationService(
            user -> System.out.println("Saved " + user.email()),
            user -> System.out.println("Welcome " + user.email()),
            System.out::println
        );
        service.register(new User("alice@example.com"));
    }
}