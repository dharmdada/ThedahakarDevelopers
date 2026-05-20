import java.time.*;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // ✅ CORRECT PATTERN: Store in UTC, display in user's zone
        Instant eventTime = Instant.now();             // Store this in DB
        ZoneId userZone = ZoneId.of("America/New_York");
        ZonedDateTime display = eventTime.atZone(userZone);
        System.out.println("NY time: " + display);

        // ✅ Convert between zones correctly
        ZonedDateTime kolkata = ZonedDateTime.now(ZoneId.of("Asia/Kolkata"));
        ZonedDateTime london  = kolkata.withZoneSameInstant(ZoneId.of("Europe/London"));
        System.out.println("Kolkata: " + kolkata);
        System.out.println("London:  " + london);

        // ❌ WRONG: LocalDateTime loses timezone context
        LocalDateTime wrong = LocalDateTime.now(); // Whose time zone? Unknown!

        // ✅ Querying available zone IDs
        long zoneCount = ZoneId.getAvailableZoneIds().size(); // ~600 zones
        System.out.println("Available zones: " + zoneCount);

        // ✅ ZonedDateTime comparison is instant-based
        ZonedDateTime meeting1 = ZonedDateTime.parse("2026-06-01T09:00+05:30[Asia/Kolkata]");
        ZonedDateTime meeting2 = ZonedDateTime.parse("2026-06-01T04:00Z");
        boolean sameMoment = meeting1.toInstant().equals(meeting2.toInstant()); // true!
        System.out.println("Same instant? " + sameMoment);
    }
}