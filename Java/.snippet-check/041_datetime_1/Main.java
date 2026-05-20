import java.time.*;
import java.time.temporal.*;

public class Main {
    public static void main(String[] args) {
        LocalDate today = LocalDate.now();
        LocalDate birthday = LocalDate.of(1990, 6, 15);

        LocalDate nextWeek    = today.plusWeeks(1);
        LocalDate lastMonth   = today.minusMonths(1);
        LocalDate anniversary = today.withDayOfMonth(1).withMonth(1);  // Jan 1 this year

        long daysBetween = ChronoUnit.DAYS.between(today, nextWeek);  // 7
        long monthsBetween = ChronoUnit.MONTHS.between(birthday, today);

        // Duration: machine time (seconds/nanos)
        Duration twoHours = Duration.ofHours(2);
        Instant later = Instant.now().plus(twoHours);

        // Period: human calendar (days/months/years)
        Period threeMonths = Period.ofMonths(3);
        LocalDate futureDate = today.plus(threeMonths);

        System.out.println("Next week: " + nextWeek);
        System.out.println("Days between: " + daysBetween);
        System.out.println("Months since birthday: " + monthsBetween);
        System.out.println("3 months from now: " + futureDate);
    }
}