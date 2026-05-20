import javax.sql.DataSource;
import java.sql.*;
import java.util.*;

record User(long id, String name, String email) {}

public class Main {
    static DataSource ds;

    public static void main(String[] args) {
        System.out.println("Inject a DataSource, then call getUsers(page, pageSize).");
    }

    public static List<User> getUsers(int page, int pageSize) throws SQLException {
        if (ds == null) return List.of();
        String sql = "SELECT id, name, email FROM users ORDER BY id LIMIT ? OFFSET ?";
        try (Connection con = ds.getConnection();
             PreparedStatement ps = con.prepareStatement(sql)) {
            ps.setInt(1, pageSize);
            ps.setInt(2, (page - 1) * pageSize);
            try (ResultSet rs = ps.executeQuery()) {
                List<User> users = new ArrayList<>();
                while (rs.next()) users.add(mapRow(rs));
                return users;
            }
        }
    }

    static User mapRow(ResultSet rs) throws SQLException {
        return new User(rs.getLong("id"), rs.getString("name"), rs.getString("email"));
    }
}