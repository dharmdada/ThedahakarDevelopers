import java.time.*;
import java.time.format.*;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Built-in ISO formats (preferred for APIs)
        String iso = LocalDate.now().format(DateTimeFormatter.ISO_LOCAL_DATE); // "2026-05-17"
        Instant parsed = Instant.parse("2026-05-17T10:30:00Z");

        // Custom pattern
        DateTimeFormatter fmt = DateTimeFormatter.ofPattern("dd MMM yyyy, hh:mm a", Locale.ENGLISH);
        String display = LocalDateTime.now().format(fmt); // "17 May 2026, 02:30 PM"

        // Parsing user input safely
        DateTimeFormatter userFmt = DateTimeFormatter.ofPattern("d/M/yyyy");
        LocalDate userDate = LocalDate.parse("5/3/2026", userFmt); // March 5

        // Locale-aware formatting
        DateTimeFormatter localeFmt = DateTimeFormatter
            .ofLocalizedDate(FormatStyle.LONG)
            .withLocale(Locale.forLanguageTag("hi-IN")); // Hindi format

        System.out.println("ISO date: " + iso);
        System.out.println("Custom format: " + display);
        System.out.println("Parsed user date: " + userDate);
        System.out.println("Hindi format: " + userDate.format(localeFmt));
    }
}