import java.util.concurrent.*;

public class Main {
    public static void main(String[] args) throws Exception {
        ExecutorService pool = Executors.newFixedThreadPool(4);
        try {
            Future<Integer> result = pool.submit(() -> {
                Thread.sleep(10);
                return 42;
            });
            System.out.println("Result: " + result.get());
            System.out.println("On Java 21+, replace this pool with Executors.newVirtualThreadPerTaskExecutor().");
        } finally {
            pool.shutdown();
        }
    }
}