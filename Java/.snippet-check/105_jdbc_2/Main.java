import javax.sql.DataSource;
import java.sql.*;
import java.util.*;

record User(long id, String name, String email) {}

class UserRepository {
    private final DataSource ds;

    UserRepository(DataSource ds) {
        this.ds = ds;
    }

    Optional<User> findById(long id) {
        String sql = "SELECT id, name, email FROM users WHERE id = ?";
        try (Connection con = ds.getConnection();
             PreparedStatement ps = con.prepareStatement(sql)) {
            ps.setLong(1, id);
            try (ResultSet rs = ps.executeQuery()) {
                if (!rs.next()) return Optional.empty();
                return Optional.of(new User(
                    rs.getLong("id"),
                    rs.getString("name"),
                    rs.getString("email")
                ));
            }
        } catch (SQLException e) {
            throw new DataAccessException("Could not load user " + id, e);
        }
    }

    void save(User user) {
        String sql = "INSERT INTO users(id, name, email) VALUES (?, ?, ?)";
        try (Connection con = ds.getConnection();
             PreparedStatement ps = con.prepareStatement(sql)) {
            ps.setLong(1, user.id());
            ps.setString(2, user.name());
            ps.setString(3, user.email());
            ps.executeUpdate();
        } catch (SQLException e) {
            throw new DataAccessException("Could not save user", e);
        }
    }
}

class DataAccessException extends RuntimeException {
    DataAccessException(String message, Throwable cause) { super(message, cause); }
}

public class Main {
    public static void main(String[] args) {
        System.out.println("Create a DataSource, then pass it to new UserRepository(dataSource).");
    }
}