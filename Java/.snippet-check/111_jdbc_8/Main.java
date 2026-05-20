import javax.sql.DataSource;
import java.math.BigDecimal;
import java.sql.*;
import java.util.*;

record Item(long id, String productName, int quantity, BigDecimal price) {}
class Order {
    private final long id;
    private final long customerId;
    private final BigDecimal total;
    private final List<Item> items = new ArrayList<>();
    Order(long id, long customerId, BigDecimal total) {
        this.id = id;
        this.customerId = customerId;
        this.total = total;
    }
    void addItem(Item item) { items.add(item); }
    public String toString() { return "Order " + id + " items=" + items; }
}

public class Main {
    static DataSource ds;

    public static void main(String[] args) throws SQLException {
        System.out.println(fetchOrdersWithItems());
    }

    public static List<Order> fetchOrdersWithItems() throws SQLException {
        if (ds == null) return List.of();
        String sql = """
            SELECT o.id, o.customer_id, o.total,
                   i.id AS item_id, i.product_name, i.quantity, i.price
            FROM orders o
            LEFT JOIN order_items i ON i.order_id = o.id
            ORDER BY o.id
            """;
        try (Connection con = ds.getConnection();
             PreparedStatement ps = con.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {
            Map<Long, Order> orderMap = new LinkedHashMap<>();
            while (rs.next()) {
                long orderId = rs.getLong("id");
                Order order = orderMap.computeIfAbsent(orderId,
                    id -> new Order(id, getLongQuietly(rs, "customer_id"), getBigDecimalQuietly(rs, "total")));
                long itemId = rs.getLong("item_id");
                if (!rs.wasNull()) {
                    order.addItem(new Item(itemId, rs.getString("product_name"), rs.getInt("quantity"), rs.getBigDecimal("price")));
                }
            }
            return new ArrayList<>(orderMap.values());
        }
    }

    private static long getLongQuietly(ResultSet rs, String column) {
        try { return rs.getLong(column); } catch (SQLException e) { throw new RuntimeException(e); }
    }

    private static BigDecimal getBigDecimalQuietly(ResultSet rs, String column) {
        try { return rs.getBigDecimal(column); } catch (SQLException e) { throw new RuntimeException(e); }
    }
}