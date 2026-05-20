sealed interface PaymentMethod permits CreditCard, PayPal, Cash {
    void process();
}

final class CreditCard implements PaymentMethod {
    public void process() { System.out.println("Processing card"); }
}

final class PayPal implements PaymentMethod {
    public void process() { System.out.println("Processing PayPal"); }
}

final class Cash implements PaymentMethod {
    public void process() { System.out.println("Processing cash"); }
}

public class Main {
    public static void main(String[] args) {
        PaymentMethod method = new CreditCard();
        method.process();
    }
}