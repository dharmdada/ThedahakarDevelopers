import java.net.*;
import java.net.http.*;
import java.time.*;
import java.net.URI;
import java.util.*;
import java.util.concurrent.*;
import static java.net.http.HttpResponse.BodyHandlers;

public class Main {
    public static void main(String[] args) throws Exception {
        // Build the client once and reuse (thread-safe, manages connection pools)
        HttpClient client = HttpClient.newBuilder()
            .version(HttpClient.Version.HTTP_2)
            .connectTimeout(Duration.ofSeconds(5))
            .build();

        // --- Synchronous GET ---
        HttpRequest getReq = HttpRequest.newBuilder()
            .uri(URI.create("https://httpbin.org/get"))
            .GET()
            .timeout(Duration.ofSeconds(10))
            .build();

        HttpResponse<String> resp = client.send(getReq, BodyHandlers.ofString());
        if (resp.statusCode() == 200) {
            String json = resp.body();
            System.out.println("Response: " + json.substring(0, Math.min(80, json.length())));
        }

        // --- POST with JSON body ---
        String json = """
            {"name": "Alice", "email": "alice@example.com"}
            """;

        HttpRequest postReq = HttpRequest.newBuilder()
            .uri(URI.create("https://httpbin.org/post"))
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(json))
            .build();

        HttpResponse<String> created = client.send(postReq, BodyHandlers.ofString());
        System.out.println("POST status: " + created.statusCode());

        // --- Asynchronous GET (non-blocking) ---
        CompletableFuture<HttpResponse<String>> future =
            client.sendAsync(getReq, BodyHandlers.ofString());

        future.thenApply(HttpResponse::body)
              .thenAccept(body -> System.out.println("Async body length: " + body.length()))
              .exceptionally(ex -> { System.out.println("Request failed: " + ex); return null; });

        future.join(); // wait for async to complete before program exits
    }
}