public class Main {
    public static void main(String[] args) {
        String day = "MONDAY";

        // Arrow syntax — no break needed, no fall-through, returns a value
        String type = switch (day) {
            case "MONDAY", "TUESDAY", "WEDNESDAY",
                 "THURSDAY", "FRIDAY"    -> "Weekday";
            case "SATURDAY", "SUNDAY" -> "Weekend";
            default                    -> "Invalid";
        };

        // Multi-line case with yield
        int len = switch (day) {
            case "MONDAY" -> 6;
            default -> {
                String trimmed = day.trim();
                yield trimmed.length();
            }
        };

        // Pattern matching in switch
        Object obj = 42;
        String result = switch (obj) {
            case Integer i -> "Integer: " + i;
            case String s  -> "String: " + s;
            case null     -> "null!";
            default       -> "Other";
        };
    }
}