public class Main {
    // 'args' is treated as an Object[] array inside the method
    public void log(String level, Object... args) {
        System.out.print("[" + level + "] ");
        for (Object arg : args) {
            System.out.print(arg + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Main logger = new Main();
        logger.log("INFO"); // Zero varargs passed (args is an empty array)
        logger.log("ERROR", "Connection failed", 404); // Two varargs passed
        
        // You can also explicitly pass an array
        Object[] myArgs = {"Timeout", "Retry attempt 3"};
        logger.log("WARN", myArgs);
    }
}