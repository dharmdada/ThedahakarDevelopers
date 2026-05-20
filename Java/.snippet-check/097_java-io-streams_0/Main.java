import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.zip.GZIPOutputStream;
import java.util.zip.GZIPInputStream;

public class Main {
    public static void main(String[] args) throws IOException {
        try (var out = new GZIPOutputStream(new FileOutputStream("data.log.gz"))) {
            out.write("first line\nsecond line\n".getBytes(StandardCharsets.UTF_8));
        }

        try (var br = new BufferedReader(
                new InputStreamReader(
                    new GZIPInputStream(new FileInputStream("data.log.gz")),
                    StandardCharsets.UTF_8))) {
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
        }
    }
}