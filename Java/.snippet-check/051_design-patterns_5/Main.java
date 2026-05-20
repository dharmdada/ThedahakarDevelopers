import java.util.*;

record Order(long id) {}
interface OrderRepository {
    void save(Order order);
    Optional<Order> findById(long id);
}

class InMemoryOrderRepository implements OrderRepository {
    private final Map<Long, Order> orders = new HashMap<>();
    public void save(Order order) { orders.put(order.id(), order); }
    public Optional<Order> findById(long id) { return Optional.ofNullable(orders.get(id)); }
}

class OrderService {
    private final OrderRepository repo;
    OrderService(OrderRepository repo) { this.repo = repo; }
    void create(Order order) { repo.save(order); }
}

public class Main {
    public static void main(String[] args) {
        OrderRepository repo = new InMemoryOrderRepository();
        OrderService service = new OrderService(repo);
        service.create(new Order(101));
        System.out.println(repo.findById(101));
    }
}