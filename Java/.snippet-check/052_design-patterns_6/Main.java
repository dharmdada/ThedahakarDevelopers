enum AppConfig {
    INSTANCE;

    private final String dbUrl = System.getenv().getOrDefault("DB_URL", "jdbc:h2:mem:test");

    String dbUrl() { return dbUrl; }
}

public class Main {
    public static void main(String[] args) {
        System.out.println(AppConfig.INSTANCE.dbUrl());
    }
}