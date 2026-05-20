interface Logger {
    // Abstract method
    void log(String msg);

    // Default method — provides an implementation, can be overridden
    default void info(String msg) {
        log("[INFO] " + msg);
    }

    // Static method — called on the interface itself
    static Logger getDefault() {
        return msg -> System.out.println(msg); // Lambda!
    }

    // Private method — helper for default methods (not visible outside)
    private String format(String msg) {
        return "[" + java.time.LocalTime.now() + "] " + msg;
    }
}

public class Main {
    public static void main(String[] args) {
        // Usage
        Logger logger = Logger.getDefault();
        logger.info("Hello");
    }
}