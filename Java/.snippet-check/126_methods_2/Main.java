import java.io.IOException;
import java.util.*;

public class Main {
    static List<String> loadNames() throws IOException {
        return new ArrayList<>(List.of("Alice", "Bob"));
    }

    static void printNames(List<String> names) {
        for (String name : names) {
            System.out.println(name);
        }
    }

    public static void main(String[] args) throws IOException {
        List<String> names = loadNames();
        printNames(names);
    }
}