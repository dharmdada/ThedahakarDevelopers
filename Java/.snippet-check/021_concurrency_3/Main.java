class Worker implements Runnable {
    // Without volatile, the loop below might run forever!
    private volatile boolean running = true;

    public void stop() {
        running = false; // Write immediately flushes to main memory
    }

    @Override
    public void run() {
        while (running) { // Read directly from main memory
            // Simulate intensive work that requires frequent checks of the 'running' flag
            Math.sqrt(Math.random());
        }
    }
}

public class Main {
    public static void main(String[] args) throws InterruptedException {
        Worker w = new Worker();
        Thread t = new Thread(w);
        t.start();
        Thread.sleep(100); // let the worker run briefly
        w.stop();           // signals worker to stop via volatile flag
        t.join();
        System.out.println("Worker stopped cleanly.");
    }
}