import java.util.*;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.function.Consumer;

record Order(long id) {}

class OrderEventBus {
    private final List<Consumer<Order>> listeners = new CopyOnWriteArrayList<>();

    public void subscribe(Consumer<Order> listener) { listeners.add(listener); }
    public void publish(Order order) { listeners.forEach(listener -> listener.accept(order)); }
}

public class Main {
    public static void main(String[] args) {
        OrderEventBus bus = new OrderEventBus();
        bus.subscribe(order -> System.out.println("Audit order " + order.id()));
        bus.subscribe(order -> System.out.println("Email for order " + order.id()));
        bus.publish(new Order(42));
    }
}