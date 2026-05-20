import java.io.*;
import java.nio.*;
import java.nio.channels.*;
import java.nio.file.*;

public class Main {
    public static void main(String[] args) throws IOException {
        try (FileChannel src  = FileChannel.open(Path.of("large.bin"), StandardOpenOption.READ);
             FileChannel dest = FileChannel.open(Path.of("copy.bin"),
                     StandardOpenOption.CREATE, StandardOpenOption.WRITE)) {

            // Zero-copy transfer using OS-level sendfile()
            long transferred = src.transferTo(0, src.size(), dest);
            System.out.println("Transferred " + transferred + " bytes");
        }
        // transferTo() uses OS-level zero-copy (no JVM heap involved) — 5-10x faster than stream copy
    }
}