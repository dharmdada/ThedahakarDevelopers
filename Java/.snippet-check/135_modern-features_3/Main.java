enum Day { MONDAY, TUESDAY, WEDNESDAY, FRIDAY, SUNDAY }

public class Main {
    static String formatter(Object obj) {
        return switch (obj) {
            case Integer i -> String.format("int %d", i);
            case Long l -> String.format("long %d", l);
            case Double d -> String.format("double %f", d);
            case String s -> String.format("String %s", s);
            case null -> "Null value";
            default -> obj.toString();
        };
    }

    public static void main(String[] args) {
        Day day = Day.MONDAY;
        String type = switch (day) {
            case MONDAY, FRIDAY, SUNDAY -> "Fun";
            case TUESDAY -> "Boring";
            default -> {
                System.out.println("Calculating...");
                yield "Unknown";
            }
        };

        System.out.println(type);
        System.out.println(formatter(42));
    }
}