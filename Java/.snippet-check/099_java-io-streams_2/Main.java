import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;

public class Main {
    static void processLine(String line) {
        System.out.println("Line: " + line);
    }

    public static void main(String[] args) throws IOException {
        Path file = Path.of("report.csv");
        Files.writeString(file, "name,score\nAlice,90\nBob,82\n", StandardCharsets.UTF_8);

        try (var br = new BufferedReader(
                new InputStreamReader(new FileInputStream(file.toFile()), StandardCharsets.UTF_8))) {
            String line;
            while ((line = br.readLine()) != null) {
                processLine(line);
            }
        }

        try (var br = Files.newBufferedReader(file, StandardCharsets.UTF_8)) {
            long aliceLines = br.lines().filter(line -> line.contains("Alice")).count();
            System.out.println("Alice lines: " + aliceLines);
        }
    }
}