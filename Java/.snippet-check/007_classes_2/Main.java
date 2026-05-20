public class Main {
    public static void main(String[] args) {
        Car myCar = new Car().setBrand("BMW").setYear(2024);
    }
}

class Car {
    private String name;
    private String brand;
    private int year;

    // Call another constructor (must be FIRST statement)
    public Car() {
        this("Default", 2024); // Calls Car(String, int)
    }

    public Car(String name, int year) {
        this.name = name;
        this.year = year;
    }

    // Distinguish field from parameter
    public void setName(String name) {
        this.name = name; // this.name = field, name = parameter
    }

    // Return current object (for method chaining / fluent API)
    public Car setBrand(String brand) {
        this.brand = brand;
        return this;
    }

    public Car setYear(int year) {
        this.year = year;
        return this;
    }
}