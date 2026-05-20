interface Printable {
    String toPrettyString();
}

enum Status implements Printable {
    ACTIVE {
        @Override
        public String toPrettyString() { return "✅ Active"; }
    },
    INACTIVE {
        @Override
        public String toPrettyString() { return "❌ Inactive"; }
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println(Status.ACTIVE.toPrettyString());
        System.out.println(Status.INACTIVE.toPrettyString());
    }
}