enum Season { SPRING, SUMMER, AUTUMN, WINTER }

public class Main {
    public static void main(String[] args) {
        Season s = Season.SUMMER;

        // Switch with enum
        String msg = switch (s) {
            case SPRING -> "Flowers bloom";
            case SUMMER -> "Beach time";
            case AUTUMN -> "Leaves fall";
            case WINTER -> "Stay warm";
        };
        System.out.println(msg);

        // Useful methods
        Season[] all = Season.values();    // Array of all values
        Season fromStr = Season.valueOf("SUMMER"); // String → enum
        String name = s.name();             // "SUMMER"
        int ord = s.ordinal();              // 1 (position, 0-indexed)
        System.out.println(name + " at index " + ord);
    }
}