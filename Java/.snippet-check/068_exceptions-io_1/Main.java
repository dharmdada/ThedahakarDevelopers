import java.io.*;

// Custom AutoCloseable — any class can participate
class DatabaseSession implements AutoCloseable {
    public DatabaseSession() { System.out.println("Session opened"); }
    @Override public void close() { System.out.println("Session closed"); }
}

public class Main {
    public static void main(String[] args) throws IOException {
        // Single resource — FileReader auto-closed after block exits
        // (Assumes "data.txt" exists on disk)
        try (var reader = new BufferedReader(new FileReader("data.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("Failed to read file: " + e.getMessage());
        }
        // reader.close() called automatically — no finally block needed

        // Multiple resources — closed in REVERSE order (out before in)
        try (var in  = new FileInputStream("source.txt");
             var out = new FileOutputStream("dest.txt")) {
            in.transferTo(out);
        } catch (IOException e) {
            System.out.println("File transfer error: " + e.getMessage());
        }

        // Custom AutoCloseable usage
        try (var session = new DatabaseSession()) {
            System.out.println("Running query...");
        }  // "Session closed" printed automatically

        // Suppressed exceptions — if both body AND close() throw,
        // the body exception is primary; close() exception is suppressed
        // Access via: primaryException.getSuppressed()[0]
    }
}