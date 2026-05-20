abstract class Vehicle {
    protected String brand;

    public Vehicle(String brand) { this.brand = brand; }

    // Abstract method — subclasses MUST implement
    public abstract void start();

    // Concrete method — shared by all subclasses
    public void stop() {
        System.out.println(brand + " stopped");
    }
}

class ElectricCar extends Vehicle {
    public ElectricCar(String brand) { super(brand); }

    @Override
    public void start() {
        System.out.println(brand + " silently starts");
    }
}

public class Main {
    public static void main(String[] args) {
        // Vehicle v = new Vehicle("X");  →  ❌ Cannot instantiate abstract class
        Vehicle v = new ElectricCar("Tesla"); // ✅ Polymorphism
        v.start();
        v.stop();
    }
}