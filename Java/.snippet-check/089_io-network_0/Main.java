import java.io.*;
import java.nio.charset.*;
import java.nio.file.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        Path path = Path.of("data", "config.json");   // platform-safe, no "/" hardcoded

        // Small files: read all at once (< 10 MB is fine)
        // String content  = Files.readString(path, StandardCharsets.UTF_8);
        // byte[] bytes    = Files.readAllBytes(path);
        // List<String> lines = Files.readAllLines(path, StandardCharsets.UTF_8);

        // Large files: lazy streaming (memory-safe for any size)
        // try (Stream<String> lineStream = Files.lines(path, StandardCharsets.UTF_8)) {
        //     long errorCount = lineStream
        //         .filter(line -> line.contains("ERROR"))
        //         .count();
        // }  // stream AND underlying reader auto-closed

        // Buffered reading for custom parsing
        // try (BufferedReader reader = Files.newBufferedReader(path, StandardCharsets.UTF_8)) {
        //     String line;
        //     while ((line = reader.readLine()) != null) {
        //         System.out.println(line);
        //     }
        // }
        System.out.println("NIO.2 file reading patterns demonstrated (see comments above).");
    }
}