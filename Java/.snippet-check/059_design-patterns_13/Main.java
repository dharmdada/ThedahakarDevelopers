record Money(String currency, long cents) {}
record PaymentResult(boolean success, String message) {}

interface PaymentGateway {
    PaymentResult charge(String customerId, Money amount);
}

class ThirdPartyPaymentClient {
    String makePayment(String customerId, long cents, String currency) {
        return "OK:" + customerId + ":" + cents + currency;
    }
}

class ThirdPartyPaymentAdapter implements PaymentGateway {
    private final ThirdPartyPaymentClient client;
    ThirdPartyPaymentAdapter(ThirdPartyPaymentClient client) { this.client = client; }

    public PaymentResult charge(String customerId, Money amount) {
        String response = client.makePayment(customerId, amount.cents(), amount.currency());
        return new PaymentResult(response.startsWith("OK"), response);
    }
}

public class Main {
    public static void main(String[] args) {
        PaymentGateway gateway = new ThirdPartyPaymentAdapter(new ThirdPartyPaymentClient());
        System.out.println(gateway.charge("cust-1", new Money("USD", 2500)));
    }
}