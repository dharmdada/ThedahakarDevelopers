public class Main {
    public static void main(String[] args) {
        String json = """
            {
                "name": "Alice",
                "age": 25,
                "skills": ["Java", "SQL"]
            }
            """;

        String query = """
            SELECT * FROM users
            WHERE age > %d
            AND status = '%s'
            """.formatted(18, "ACTIVE");

        System.out.println(json);
        System.out.println(query);
    }
}