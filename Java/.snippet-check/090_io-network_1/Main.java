import java.io.*;
import java.nio.charset.*;
import java.nio.file.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        Path logPath = Path.of("logs", "app.log");
        Files.createDirectories(logPath.getParent()); // create parent dirs if needed

        // Write (creates or replaces)
        Files.writeString(logPath, "Service started\n", StandardCharsets.UTF_8);

        // Append to existing file
        Files.writeString(logPath, "New event\n",
            StandardCharsets.UTF_8,
            StandardOpenOption.CREATE,
            StandardOpenOption.APPEND);

        // Write all lines
        Files.write(logPath, List.of("line1", "line2"), StandardCharsets.UTF_8);

        // Buffered writer for high-volume output
        List<String> events = List.of("event1", "event2");
        try (BufferedWriter bw = Files.newBufferedWriter(logPath, StandardCharsets.UTF_8,
                StandardOpenOption.CREATE, StandardOpenOption.APPEND)) {
            for (String e : events) {
                bw.write(e);
                bw.newLine();
            }
        }  // flush+close automatic
        System.out.println("Log written: " + logPath);
    }
}