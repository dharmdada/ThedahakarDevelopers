import javax.sql.DataSource;
import java.sql.*;
import java.math.BigDecimal;

public class Main {
    static DataSource ds;

    public static void main(String[] args) throws Exception {
        transfer(1001L, 1002L, new BigDecimal("250.00"));
    }

    public static void transfer(long fromId, long toId, BigDecimal amount) throws SQLException {
        try (Connection con = ds.getConnection()) {
            con.setAutoCommit(false);  // Start manual transaction

            try {
                // Debit
                try (PreparedStatement debit = con.prepareStatement(
                        "UPDATE accounts SET balance = balance - ? WHERE id = ? AND balance >= ?")) {
                    debit.setBigDecimal(1, amount);
                    debit.setLong(2, fromId);
                    debit.setBigDecimal(3, amount);       // optimistic check
                    int rows = debit.executeUpdate();
                    if (rows == 0) throw new IllegalStateException("Insufficient balance");
                }

                // Credit
                try (PreparedStatement credit = con.prepareStatement(
                        "UPDATE accounts SET balance = balance + ? WHERE id = ?")) {
                    credit.setBigDecimal(1, amount);
                    credit.setLong(2, toId);
                    credit.executeUpdate();
                }

                con.commit();  // ✅ Both succeeded — commit atomically

            } catch (SQLException | IllegalStateException e) {
                con.rollback(); // ❌ Any failure — undo everything
                throw new RuntimeException(e);
            }
            // Connection auto-closed by try-with-resources, returns to pool
        }
    }
}