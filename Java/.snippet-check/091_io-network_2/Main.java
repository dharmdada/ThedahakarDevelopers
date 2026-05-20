import java.io.*;
import java.nio.file.*;
import java.nio.file.attribute.*;

public class Main {
    public static void main(String[] args) throws IOException {
        Path src  = Path.of("src/report.pdf");
        Path dest = Path.of("archive/2026/report.pdf");

        Files.createDirectories(dest.getParent());
        // Files.copy(src, dest, StandardCopyOption.REPLACE_EXISTING);
        // Files.move(src, dest, StandardCopyOption.ATOMIC_MOVE);    // rename atomically
        // Files.delete(dest);                                        // throws if missing
        // Files.deleteIfExists(dest);                                // safe delete

        // Walk directory tree
        try (java.util.stream.Stream<Path> walk = Files.walk(Path.of("."))) {
            walk.filter(p -> p.toString().endsWith(".java"))
                .map(Path::getFileName)
                .forEach(System.out::println);
        }

        // File metadata (only if file exists)
        // BasicFileAttributes attrs = Files.readAttributes(src, BasicFileAttributes.class);
        // long size      = attrs.size();
        // FileTime mtime = attrs.lastModifiedTime();
        // boolean isDir  = Files.isDirectory(src);
    }
}