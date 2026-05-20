class Printer {
    public void print(int value) { System.out.println("Printing int: " + value); }
    public void print(String value) { System.out.println("Printing String: " + value); }
    public void print(double value) { System.out.println("Printing double: " + value); }
}

public class Main {
    public static void main(String[] args) {
        Printer printer = new Printer();
        printer.print(42);
        printer.print("hello");
        printer.print(3.14);
    }
}