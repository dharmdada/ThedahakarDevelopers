import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;

public class Main {
    public static void main(String[] args) throws IOException {
        Path src = Path.of("source.bin");
        Path dest = Path.of("dest.bin");
        Files.write(src, "binary-like content".getBytes(StandardCharsets.UTF_8));

        try (var in = new BufferedInputStream(new FileInputStream(src.toFile()));
             var out = new BufferedOutputStream(new FileOutputStream(dest.toFile()))) {
            byte[] buffer = new byte[8192];
            int bytesRead;
            while ((bytesRead = in.read(buffer)) != -1) {
                out.write(buffer, 0, bytesRead);
            }
        }

        try (var in = new FileInputStream(src.toFile());
             var out = new ByteArrayOutputStream()) {
            long transferred = in.transferTo(out);
            System.out.println("Transferred bytes: " + transferred);
            System.out.println(new String(out.toByteArray(), StandardCharsets.UTF_8));
        }
    }
}