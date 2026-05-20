class ConnectionPool {
    private ConnectionPool() {}

    private static class Holder {
        private static final ConnectionPool INSTANCE = new ConnectionPool();
    }

    static ConnectionPool getInstance() {
        return Holder.INSTANCE;
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println(ConnectionPool.getInstance() == ConnectionPool.getInstance());
    }
}