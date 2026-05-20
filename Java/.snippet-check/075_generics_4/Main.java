import java.util.*;

class Animal {
    double weightKg() { return 0; }
}
class Dog extends Animal {
    @Override double weightKg() { return 12.5; }
}
class Cat extends Animal {
    @Override double weightKg() { return 4.5; }
}

public class Main {
    public static double totalWeight(List<? extends Animal> animals) {
        double total = 0;
        for (Animal a : animals) {
            total += a.weightKg();
        }
        return total;
    }

    public static void addDogs(List<? super Dog> shelter, int count) {
        for (int i = 0; i < count; i++) {
            shelter.add(new Dog());
        }
    }

    public static void main(String[] args) {
        System.out.println(totalWeight(List.of(new Dog(), new Dog())));
        System.out.println(totalWeight(List.of(new Cat())));

        List<Animal> shelter = new ArrayList<>();
        addDogs(shelter, 2);
        System.out.println("Shelter size: " + shelter.size());
    }
}