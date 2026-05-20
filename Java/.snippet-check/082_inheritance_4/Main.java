public class Main {
    public static void main(String[] args) {
        // Upcasting: child → parent (always safe, automatic)
        Dog dog = new Dog("Rex", "Lab");
        Animal animal = dog; // Automatic upcasting
        animal.eat();     // ✅ Works
        // animal.bark();  →  ❌ Compile error! Animal doesn't have bark()

        // Downcasting: parent → child (risky, manual)
        if (animal instanceof Dog d) {  // Pattern matching — safe check + cast
            d.bark(); // ✅ Safe!
        }

        // Without pattern matching (older style)
        if (animal instanceof Dog) {
            Dog d2 = (Dog) animal; // Manual cast
            d2.bark();
        }

        // Bad downcast → ClassCastException at runtime!
        // Cat cat = (Cat) animal;  →  💥 animal is actually a Dog!
    }
}

class Animal {
    protected String name;
    public Animal(String name) { this.name = name; }
    public void eat() { System.out.println(name + " is eating"); }
}

class Dog extends Animal {
    private String breed;
    public Dog(String name, String breed) {
        super(name);
        this.breed = breed;
    }
    public void bark() { System.out.println("Woof!"); }
}