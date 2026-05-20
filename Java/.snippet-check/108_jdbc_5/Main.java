import javax.sql.DataSource;
import java.sql.*;

public class Main {
    static DataSource ds;

    public static void main(String[] args) throws SQLException {
        try (Connection con = ds.getConnection()) {
            // Prevent Dirty Reads and Non-Repeatable Reads for this specific transaction
            con.setTransactionIsolation(Connection.TRANSACTION_REPEATABLE_READ);
            con.setAutoCommit(false);

            // Execute critical queries with guaranteed isolation
            try (PreparedStatement ps = con.prepareStatement("SELECT balance FROM accounts WHERE id = ?")) {
                ps.setLong(1, 1001);
                try (ResultSet rs = ps.executeQuery()) {
                    if (rs.next()) {
                        System.out.println("Balance locked and read: " + rs.getBigDecimal("balance"));
                    }
                }
            }

            con.commit();
        }
    }
}