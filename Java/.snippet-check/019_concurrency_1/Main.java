import java.util.concurrent.*;

public class Main {
    public static void main(String[] args) throws Exception {
        // Create a pool of 4 threads
        ExecutorService pool = Executors.newFixedThreadPool(4);

        // Submit a Runnable (no return value)
        pool.execute(() -> System.out.println("Running in pool"));

        // Submit a Callable (returns a value via Future)
        Future<Integer> future = pool.submit(() -> {
            Thread.sleep(1000);
            return 42;
        });

        // While the future is computing in the background, the main thread can do other things
        System.out.println("Main thread is doing other important tasks...");
        Thread.sleep(500); // Simulate some local work

        // Then get the result (blocks until ready)
        try {
            int result = future.get(); // 42
            System.out.println("Result: " + result);
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }

        // Always shutdown your pools!
        pool.shutdown();
    }
}