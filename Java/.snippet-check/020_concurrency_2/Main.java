import java.util.concurrent.locks.*;

class Counter {
    private int count = 0;

    // synchronized method: locks the whole object (this)
    public synchronized void increment() {
        count++;
    }

    public void incrementBlock() {
        // synchronized block: locks only specific code
        synchronized (this) {
            count++;
        }
    }

    public int getCount() { return count; }
}

// Modern alternative: ReentrantLock
class LockedCounter {
    private int count = 0;
    private final Lock lock = new ReentrantLock();

    public void increment() {
        lock.lock();
        try {
            count++;
        } finally {
            lock.unlock(); // ALWAYS in finally block!
        }
    }

    public int getCount() { return count; }
}

public class Main {
    public static void main(String[] args) throws InterruptedException {
        Counter c = new Counter();
        Thread t1 = new Thread(() -> { for (int i = 0; i < 1000; i++) c.increment(); });
        Thread t2 = new Thread(() -> { for (int i = 0; i < 1000; i++) c.increment(); });
        t1.start(); t2.start();
        t1.join();  t2.join();
        System.out.println("Count (should be 2000): " + c.getCount());
    }
}