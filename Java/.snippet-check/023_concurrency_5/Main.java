import java.util.concurrent.*;

public class Main {
    public static void main(String[] args) {
        CompletableFuture<Void> task1 = CompletableFuture.runAsync(() -> {
            System.out.println("Background task");
        });

        CompletableFuture<String> fetchUser = CompletableFuture.supplyAsync(() -> "Alice");

        fetchUser
            .thenApply(String::toUpperCase)
            .thenAccept(System.out::println)
            .exceptionally(ex -> {
                ex.printStackTrace();
                return null;
            })
            .join();

        CompletableFuture<Integer> price1 = CompletableFuture.supplyAsync(() -> 100);
        CompletableFuture<Integer> price2 = CompletableFuture.supplyAsync(() -> 50);

        price1.thenCombine(price2, Integer::sum)
              .thenAccept(total -> System.out.println("Total: " + total))
              .join();

        task1.join();
    }
}