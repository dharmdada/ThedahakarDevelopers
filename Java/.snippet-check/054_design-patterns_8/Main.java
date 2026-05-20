class EmailMessage {
    private final String to;
    private final String subject;
    private final String body;
    private final String replyTo;
    private final boolean html;

    private EmailMessage(Builder builder) {
        this.to = builder.to;
        this.subject = builder.subject;
        this.body = builder.body;
        this.replyTo = builder.replyTo;
        this.html = builder.html;
    }

    static class Builder {
        private final String to;
        private String subject = "";
        private String body = "";
        private String replyTo = "";
        private boolean html;

        Builder(String to) { this.to = to; }
        Builder subject(String subject) { this.subject = subject; return this; }
        Builder body(String body) { this.body = body; return this; }
        Builder replyTo(String replyTo) { this.replyTo = replyTo; return this; }
        Builder html(boolean html) { this.html = html; return this; }
        EmailMessage build() { return new EmailMessage(this); }
    }

    @Override public String toString() { return subject + " -> " + to + " html=" + html; }
}

public class Main {
    public static void main(String[] args) {
        EmailMessage message = new EmailMessage.Builder("alice@example.com")
            .subject("Welcome")
            .body("Hello Alice")
            .html(false)
            .build();
        System.out.println(message);
    }
}