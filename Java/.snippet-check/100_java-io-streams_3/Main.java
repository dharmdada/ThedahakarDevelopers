import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;

public class Main {
    public static void main(String[] args) throws IOException {
        try (var bw = new BufferedWriter(
                new OutputStreamWriter(new FileOutputStream("log.txt", true), StandardCharsets.UTF_8))) {
            bw.write("2026-05-20 INFO Server started");
            bw.newLine();
            bw.write("2026-05-20 INFO Listening on port 8080");
            bw.newLine();
        }

        try (var pw = new PrintWriter(new BufferedWriter(
                new OutputStreamWriter(new FileOutputStream("output.txt"), StandardCharsets.UTF_8)))) {
            pw.println("Hello World");
            pw.printf("User: %s, Age: %d%n", "Alice", 30);
            pw.format("Score: %.2f%n", 98.567);
            if (pw.checkError()) {
                throw new IOException("PrintWriter failed");
            }
        }

        System.out.println(Files.readString(Path.of("output.txt"), StandardCharsets.UTF_8));
    }
}