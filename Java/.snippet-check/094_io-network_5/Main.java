import java.io.*;
import java.net.*;
import java.nio.charset.*;

public class Main {
    public static void main(String[] args) {
        try (Socket socket = new Socket()) {
            socket.connect(new InetSocketAddress("localhost", 8080), 3000); // 3s connect timeout
            socket.setSoTimeout(5000); // 5s read timeout

            try (PrintWriter out = new PrintWriter(
                        new BufferedWriter(new OutputStreamWriter(
                            socket.getOutputStream(), StandardCharsets.UTF_8)), true);
                 BufferedReader in = new BufferedReader(
                        new InputStreamReader(
                            socket.getInputStream(), StandardCharsets.UTF_8))) {

                out.println("PING");           // auto-flushed (true in PrintWriter constructor)
                String response = in.readLine();
                System.out.println("Got: " + response);
            }
        } catch (IOException e) {
            System.out.println("Could not connect: " + e.getMessage());
        }
        // socket auto-closed
    }
}