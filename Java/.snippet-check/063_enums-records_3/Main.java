enum DatabaseConnection {
    INSTANCE; // The one and only instance

    public void connect() {
        System.out.println("Connected to DB securely.");
    }
}

public class Main {
    public static void main(String[] args) {
        // Usage:
        DatabaseConnection.INSTANCE.connect();
    }
}