import java.io.*;
import java.nio.file.*;
import java.sql.*;

public class Main {
    public static void main(String[] args) throws Exception {
        // ---- Basic try-catch ----
        try {
            int result = 10 / 0;                  // throws ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero: " + e.getMessage());
        }

        // ---- Multi-catch (Java 7+) — one block for related types ----
        // (riskyOperation(), ServiceException, log are conceptual placeholders)
        try {
            throw new IOException("Simulated IO failure");
        } catch (IOException e) {  // e is effectively final
            System.out.println("External failure: " + e.getMessage());
            throw new RuntimeException("Operation failed", e); // wrap and rethrow
        }
    }
}