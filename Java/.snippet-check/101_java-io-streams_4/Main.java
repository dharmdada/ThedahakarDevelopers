import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.util.*;
import java.util.regex.MatchResult;

public class Main {
    public static void main(String[] args) throws Exception {
        String input = "Alice\n30\n";
        try (var sc = new Scanner(input)) {
            String name = sc.nextLine();
            int age = sc.nextInt();
            System.out.printf("Hello %s, you are %d years old.%n", name, age);
        }

        Path numbers = Path.of("numbers.txt");
        Files.writeString(numbers, "10 20 30", StandardCharsets.UTF_8);
        try (var sc = new Scanner(numbers, StandardCharsets.UTF_8)) {
            int sum = 0;
            while (sc.hasNextInt()) sum += sc.nextInt();
            System.out.println("Sum: " + sum);
        }

        try (var sc = new Scanner("Alice,30,Engineer").useDelimiter(",")) {
            System.out.println(sc.next() + " is " + sc.nextInt() + " and works as " + sc.next());
        }

        try (var sc = new Scanner("Price: $42.99 and $15.00")) {
            sc.findAll("\\$(\\d+\\.\\d{2})")
              .map(MatchResult::group)
              .forEach(System.out::println);
        }
    }
}