// 1. Extend Thread class
class MyThread extends Thread {
    @Override
    public void run() { System.out.println("Thread running"); }
}

// 2. Implement Runnable (Better — allows extending other classes)
class MyTask implements Runnable {
    @Override
    public void run() { System.out.println("Task running"); }
}

public class Main {
    public static void main(String[] args) throws InterruptedException {
        new MyThread().start(); // MUST call start(), not run()

        new Thread(new MyTask()).start();

        // 3. With Lambda (Best for simple tasks)
        Thread t = new Thread(() -> System.out.println("Lambda thread"));
        t.start();

        // Sleep and Join
        Thread.sleep(1000); // Pause current thread for 1 second
        t.join();           // Wait for thread t to finish
        System.out.println("Main done.");
    }
}