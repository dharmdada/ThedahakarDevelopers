import java.util.*;

record Order(long id) {}
record Item(long id, long orderId) {}
interface OrderRepository { List<Order> findAll(); }
interface ItemRepository { List<Item> findByOrderId(long orderId); }

public class Main {
    static OrderRepository orderRepo = () -> List.of(new Order(1), new Order(2));
    static ItemRepository itemRepo = orderId -> List.of(new Item(orderId * 10, orderId));

    public static void main(String[] args) {
        List<Order> orders = orderRepo.findAll();
        for (Order order : orders) {
            List<Item> items = itemRepo.findByOrderId(order.id());
            System.out.println(order + " -> " + items);
        }
    }
}