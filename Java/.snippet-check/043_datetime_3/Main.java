import java.time.*;
import java.time.temporal.*;

public class Main {
    public static void main(String[] args) {
        LocalDate today = LocalDate.now();

        // Built-in adjusters
        LocalDate firstOfMonth  = today.with(TemporalAdjusters.firstDayOfMonth());
        LocalDate lastOfMonth   = today.with(TemporalAdjusters.lastDayOfMonth());
        LocalDate firstOfNext   = today.with(TemporalAdjusters.firstDayOfNextMonth());
        LocalDate nextFriday    = today.with(TemporalAdjusters.next(DayOfWeek.FRIDAY));
        LocalDate prevMonday    = today.with(TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY));

        // Custom adjuster: next working day (skip weekends)
        TemporalAdjuster nextWorkingDay = TemporalAdjusters.ofDateAdjuster(date -> {
            DayOfWeek dow = date.getDayOfWeek();
            int daysToAdd = switch (dow) {
                case FRIDAY   -> 3;
                case SATURDAY -> 2;
                default       -> 1;
            };
            return date.plusDays(daysToAdd);
        });
        LocalDate nextWorkDay = today.with(nextWorkingDay);

        // Payment due date: last business day of month
        LocalDate endOfMonth = today.with(TemporalAdjusters.lastDayOfMonth());
        while (endOfMonth.getDayOfWeek() == DayOfWeek.SATURDAY
            || endOfMonth.getDayOfWeek() == DayOfWeek.SUNDAY) {
            endOfMonth = endOfMonth.minusDays(1);
        }

        System.out.println("Next Friday: " + nextFriday);
        System.out.println("Next work day: " + nextWorkDay);
        System.out.println("Last business day of month: " + endOfMonth);
    }
}