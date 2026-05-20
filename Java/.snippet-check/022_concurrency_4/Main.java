import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.atomic.*;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        // Atomic variables (lock-free thread-safe updates)
        AtomicInteger atomicCount = new AtomicInteger(0);
        atomicCount.incrementAndGet(); // Safe across threads
        atomicCount.addAndGet(5);
        System.out.println("Atomic count: " + atomicCount.get());

        // Concurrent Collections
        // Fast, thread-safe map (better than Hashtable or synchronized map)
        ConcurrentMap<String, Integer> map = new ConcurrentHashMap<>();
        map.putIfAbsent("Key", 1);

        // Thread-safe list (good for many reads, few writes)
        List<String> safeList = new CopyOnWriteArrayList<>();

        // Thread-safe queue
        BlockingQueue<String> queue = new ArrayBlockingQueue<>(100);
        queue.put("item");  // Blocks if full
        String item = queue.take();       // Blocks if empty
        System.out.println("Dequeued: " + item);
    }
}