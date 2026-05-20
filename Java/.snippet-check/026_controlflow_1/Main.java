public class Main {
    public static void main(String[] args) {
        String day = "MONDAY";
        switch (day) {
            case "MONDAY": case "TUESDAY": case "WEDNESDAY":
            case "THURSDAY": case "FRIDAY":
                System.out.println("Weekday");
                break; // Without break, it falls through!
            case "SATURDAY": case "SUNDAY":
                System.out.println("Weekend");
                break;
            default:
                System.out.println("Invalid");
        }
    }
}