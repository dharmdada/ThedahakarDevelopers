interface DiscountPolicy {
    double apply(double price);
}

class NoDiscount implements DiscountPolicy {
    public double apply(double price) { return price; }
}

class BlackFridayDiscount implements DiscountPolicy {
    public double apply(double price) { return price * 0.70; }
}

class CheckoutService {
    private final DiscountPolicy policy;
    CheckoutService(DiscountPolicy policy) { this.policy = policy; }
    double total(double price) { return policy.apply(price); }
}

public class Main {
    public static void main(String[] args) {
        CheckoutService checkout = new CheckoutService(new BlackFridayDiscount());
        System.out.println(checkout.total(100.0));
    }
}