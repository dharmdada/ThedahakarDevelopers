import java.util.*;

public class Main {
    public static void main(String[] args) {
        Map<String, List<Integer>> oldWay = new HashMap<>();
        oldWay.put("scores", List.of(90, 95));

        var modernWay = new HashMap<String, List<Integer>>();
        modernWay.put("scores", List.of(80, 85));
        var name = "Alice";

        for (var entry : modernWay.entrySet()) {
            System.out.println(name + " -> " + entry.getKey() + " " + entry.getValue());
        }
    }
}