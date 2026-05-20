public class Main {
    public static void main(String[] args) {
        // The opening """ must be followed by a newline.
        // The position of the closing """ determines the left margin.
        String json = """
            {
                "name": "Alice",
                "role": "Admin",
                "skills": ["Java", "SQL"]
            }
            """;

        // Formatted string using text block
        String sql = """
            SELECT id, name, email 
            FROM users 
            WHERE status = '%s'
            ORDER BY created_at DESC
            """.formatted("ACTIVE");
    }
}