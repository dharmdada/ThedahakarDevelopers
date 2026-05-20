import java.util.*;

interface Repository<T, ID> {
    Optional<T> findById(ID id);
    List<T> findAll();
    T save(T entity);
    void delete(ID id);
}

record User(Long id, String name) {}
record Product(UUID id, String name) {}
record Order(Long id, Long customerId) {}

interface UserRepository extends Repository<User, Long> {}
interface ProductRepository extends Repository<Product, UUID> {}
interface OrderRepository extends Repository<Order, Long> {
    List<Order> findByCustomerId(Long customerId);
}

class InMemoryUserRepository implements UserRepository {
    private final Map<Long, User> users = new HashMap<>();

    public Optional<User> findById(Long id) { return Optional.ofNullable(users.get(id)); }
    public List<User> findAll() { return new ArrayList<>(users.values()); }
    public User save(User user) { users.put(user.id(), user); return user; }
    public void delete(Long id) { users.remove(id); }
}

public class Main {
    public static void main(String[] args) {
        UserRepository repo = new InMemoryUserRepository();
        repo.save(new User(1L, "Alice"));
        System.out.println(repo.findById(1L).orElseThrow());
    }
}