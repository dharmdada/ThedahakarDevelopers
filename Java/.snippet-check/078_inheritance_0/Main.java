public class Main {
    public static void main(String[] args) {
        Dog d = new Dog("Rex", "Lab");
        d.eat();  // Inherited from Animal
        d.bark(); // Own method
    }
}

class Animal {
    protected String name;

    public Animal(String name) { this.name = name; }

    public void eat() {
        System.out.println(name + " is eating");
    }
}

class Dog extends Animal {
    private String breed;

    public Dog(String name, String breed) {
        super(name);           // MUST call parent constructor first
        this.breed = breed;
    }

    public void bark() { System.out.println("Woof!"); }
}