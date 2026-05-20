import javax.sql.DataSource;
import java.sql.*;
import java.util.*;

record Event(String type, String payload) {}

public class Main {
    static DataSource ds;

    public static void main(String[] args) throws SQLException {
        bulkInsert(List.of(new Event("LOGIN", "alice"), new Event("LOGOUT", "alice")));
    }

    public static void bulkInsert(List<Event> events) throws SQLException {
        if (ds == null) {
            System.out.println("Inject a DataSource before running against a database.");
            return;
        }
        String sql = "INSERT INTO event_log(type, payload) VALUES (?, ?)";
        try (Connection con = ds.getConnection();
             PreparedStatement ps = con.prepareStatement(sql)) {
            con.setAutoCommit(false);
            for (Event event : events) {
                ps.setString(1, event.type());
                ps.setString(2, event.payload());
                ps.addBatch();
            }
            ps.executeBatch();
            con.commit();
        }
    }
}