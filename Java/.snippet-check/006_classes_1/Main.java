public class Main {
    public static void main(String[] args) {
        Car c1 = new Car();                    // Default
        Car c2 = new Car("Toyota", 2023);      // Parameterized
        Car c3 = new Car(c2);                  // Copy
    }
}

class Car {
    private String brand;
    private int year;

    // Default constructor (no args)
    public Car() {
        this("Unknown", 2024); // Constructor chaining with this()
    }

    // Parameterized constructor
    public Car(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }

    // Copy constructor
    public Car(Car other) {
        this.brand = other.brand;
        this.year = other.year;
    }
}