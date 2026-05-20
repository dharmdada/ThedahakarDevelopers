import java.time.*;
import java.sql.Timestamp;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // java.util.Date ↔ Instant
        Date legacy  = new Date();
        Instant inst = legacy.toInstant();
        Date back    = Date.from(inst);

        // java.util.Calendar ↔ ZonedDateTime
        Calendar cal = Calendar.getInstance();
        ZonedDateTime zdt = cal.toInstant().atZone(cal.getTimeZone().toZoneId());

        // java.sql.Date ↔ LocalDate (for JDBC)
        java.sql.Date sqlDate  = java.sql.Date.valueOf(LocalDate.now());
        LocalDate localDate    = sqlDate.toLocalDate();

        // java.sql.Timestamp ↔ LocalDateTime / Instant
        Timestamp ts           = Timestamp.from(Instant.now());
        LocalDateTime fromTs   = ts.toLocalDateTime();

        // For modern JDBC drivers (PostgreSQL 42.x+, MySQL 8.x+)
        // directly pass LocalDate, LocalDateTime, Instant in PreparedStatement
        // ps.setObject(1, LocalDate.now());     // works with JDBC 4.2+
        // ps.setObject(2, Instant.now());       // maps to TIMESTAMP WITH TIME ZONE

        System.out.println("Legacy Date: " + legacy);
        System.out.println("LocalDate: " + localDate);
        System.out.println("From Timestamp: " + fromTs);
    }
}