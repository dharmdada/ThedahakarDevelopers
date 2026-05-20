import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Main {
    public static void main(String[] args) {
        // The JDBC URL tells the DriverManager which database to find.
        // Format: jdbc:[driver-type]://[host]:[port]/[database_name]
        String url = "jdbc:postgresql://localhost:5432/my_database";
        String user = "postgres";
        String password = "supersecretpassword";

        // Try-with-resources ensures the connection is automatically closed when done!
        try (Connection con = DriverManager.getConnection(url, user, password);
             java.sql.Statement stmt = con.createStatement();
             java.sql.ResultSet rs = stmt.executeQuery("SELECT CURRENT_DATE")) {
             
            System.out.println("Successfully connected to the database!");
            if (rs.next()) {
                System.out.println("The database current date is: " + rs.getString(1));
            }
        } catch (SQLException e) {
            System.out.println("Failed to connect: " + e.getMessage());
        }
    }
}