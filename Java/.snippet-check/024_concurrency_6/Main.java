import java.lang.reflect.Method;

public class Main {
    public static void main(String[] args) throws Exception {
        Runnable task = () -> System.out.println("Running task on " + Thread.currentThread());

        try {
            Method startVirtualThread = Thread.class.getMethod("startVirtualThread", Runnable.class);
            Thread virtualThread = (Thread) startVirtualThread.invoke(null, task);
            virtualThread.join();
            System.out.println("Virtual thread API is available on this JDK.");
        } catch (NoSuchMethodException ex) {
            Thread platformThread = new Thread(task);
            platformThread.start();
            platformThread.join();
            System.out.println("Virtual threads require Java 21+. Used a platform thread fallback.");
        }
    }
}