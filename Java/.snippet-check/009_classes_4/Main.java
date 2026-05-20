public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount();
        account.deposit(500.0);
        account.withdraw(200.0);
        System.out.println("Balance: " + account.getBalance());
    }
}

class BankAccount {
    private double balance; // Hidden from outside

    // Getter: read-only access
    public double getBalance() { return balance; }

    // Setter with VALIDATION — this is the power of encapsulation
    public void deposit(double amount) {
        if (amount <= 0) throw new IllegalArgumentException("Amount must be positive");
        this.balance += amount;
    }

    public void withdraw(double amount) {
        if (amount > balance) throw new IllegalArgumentException("Insufficient funds");
        this.balance -= amount;
    }
}