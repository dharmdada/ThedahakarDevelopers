public class Main {
    public static void main(String[] args) {
        // Because every operation returns a new String, you can chain them:
        String dirtyData = "   USER_admin_123   ";
        String clean = dirtyData.strip()
                                .toLowerCase()
                                .replace("user_", "");
        System.out.println(clean); // "admin_123"
    }
}