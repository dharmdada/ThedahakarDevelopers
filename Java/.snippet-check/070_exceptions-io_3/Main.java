import java.sql.*;

// DataAccessException — unchecked wrapper for JDBC exceptions
class DataAccessException extends RuntimeException {
    public DataAccessException(String msg, Throwable cause) { super(msg, cause); }
}

public class Main {

    // ❌ BAD: leaking JDBC internals through the service layer
    static String findUserBad(long id) throws SQLException {  // caller knows it's JDBC!
        throw new SQLException("Simulated DB error");
    }

    // ✅ GOOD: translate at the repository boundary
    static String findUser(long id) {
        try {
            throw new SQLException("DB error");
        } catch (SQLException e) {
            throw new DataAccessException("Failed to load user: " + id, e);
            // Keeps cause chain intact — e is wrapped, not lost
        }
    }

    public static void main(String[] args) {
        try {
            findUser(42);
        } catch (DataAccessException e) {
            System.out.println("Caught: " + e.getMessage());
            System.out.println("Root cause: " + e.getCause().getMessage());
        }
        // In Spring Boot, a @RestControllerAdvice + @ExceptionHandler
        // catches these globally and maps them to HTTP responses (404, 422, 500).
    }
}