interface Flyable {
    void fly();                      // Abstract (implicitly public abstract)
    int MAX_ALTITUDE = 10000;       // Constants (implicitly public static final)
}

interface Swimmable {
    void swim();
}

// A class can implement MULTIPLE interfaces
class Duck implements Flyable, Swimmable {
    @Override
    public void fly() { System.out.println("Duck flying"); }

    @Override
    public void swim() { System.out.println("Duck swimming"); }
}

public class Main {
    public static void main(String[] args) {
        // Use interface as type
        Flyable f = new Duck();
        f.fly();
    }
}