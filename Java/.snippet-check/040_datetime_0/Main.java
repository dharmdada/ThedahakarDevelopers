import java.time.*;
import java.time.temporal.*;

public class Main {
    public static void main(String[] args) {
        LocalDate today      = LocalDate.now();               // 2026-05-17
        LocalDate birthday   = LocalDate.of(1990, Month.JUNE, 15);
        LocalTime noon       = LocalTime.of(12, 0);
        LocalDateTime ldt    = LocalDateTime.of(today, noon);
        Instant now          = Instant.now();                 // UTC nanoseconds
        ZonedDateTime zdt    = ZonedDateTime.now(ZoneId.of("Asia/Kolkata"));
        OffsetDateTime odt   = OffsetDateTime.now(ZoneOffset.ofHoursMinutes(5, 30));

        System.out.println("Today: " + today);
        System.out.println("Birthday: " + birthday);
        System.out.println("LocalDateTime: " + ldt);
        System.out.println("Instant: " + now);
        System.out.println("ZonedDateTime: " + zdt);
        System.out.println("OffsetDateTime: " + odt);
    }
}