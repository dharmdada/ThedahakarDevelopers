import java.math.BigDecimal;

// Base domain exception — unchecked (modern approach)
class DomainException extends RuntimeException {
    private final String errorCode;

    public DomainException(String errorCode, String message) {
        super(message);
        this.errorCode = errorCode;
    }

    public DomainException(String errorCode, String message, Throwable cause) {
        super(message, cause);
        this.errorCode = errorCode;
    }

    public String errorCode() { return errorCode; }
}

// Specific domain exceptions — each carries its own context
class InsufficientFundsException extends DomainException {
    private final BigDecimal shortfall;

    public InsufficientFundsException(BigDecimal shortfall) {
        super("PAYMENT_INSUFFICIENT_FUNDS",
              "Payment declined: short by " + shortfall);
        this.shortfall = shortfall;
    }

    public BigDecimal shortfall() { return shortfall; }
}

class ProductNotFoundException extends DomainException {
    public ProductNotFoundException(String productId) {
        super("PRODUCT_NOT_FOUND", "Product not found: " + productId);
    }
}

public class Main {
    public static void main(String[] args) {
        // Usage — expressive, testable, carries context
        try {
            throw new ProductNotFoundException("PROD-42");
        } catch (ProductNotFoundException e) {
            System.out.println("Not found: " + e.getMessage() + " [" + e.errorCode() + "]");
        }

        try {
            throw new InsufficientFundsException(new BigDecimal("25.00"));
        } catch (InsufficientFundsException e) {
            System.out.println(e.getMessage() + " shortfall=" + e.shortfall());
        }
    }
}