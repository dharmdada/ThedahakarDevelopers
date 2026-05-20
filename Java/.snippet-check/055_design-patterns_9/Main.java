interface Notification {
    void send(String message);
}

class EmailNotification implements Notification {
    public void send(String message) { System.out.println("Email: " + message); }
}

abstract class NotificationDecorator implements Notification {
    protected final Notification wrapped;
    NotificationDecorator(Notification wrapped) { this.wrapped = wrapped; }
}

class LoggingNotification extends NotificationDecorator {
    LoggingNotification(Notification wrapped) { super(wrapped); }
    public void send(String message) {
        System.out.println("Log before send");
        wrapped.send(message);
    }
}

public class Main {
    public static void main(String[] args) {
        Notification notification = new LoggingNotification(new EmailNotification());
        notification.send("Build complete");
    }
}