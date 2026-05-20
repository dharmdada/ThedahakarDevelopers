interface Printer { void print(); }
interface ScannerDevice { void scan(); }
interface FaxMachine { void fax(); }

class SimplePrinter implements Printer {
    public void print() { System.out.println("Printing"); }
}

class OfficeMachine implements Printer, ScannerDevice, FaxMachine {
    public void print() { System.out.println("Printing"); }
    public void scan() { System.out.println("Scanning"); }
    public void fax() { System.out.println("Faxing"); }
}

public class Main {
    public static void main(String[] args) {
        Printer printer = new SimplePrinter();
        printer.print();
    }
}