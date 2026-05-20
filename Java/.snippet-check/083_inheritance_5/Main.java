import java.util.Objects;

public class Main {
    public static void main(String[] args) {
        Person p1 = new Person("Alice", 25);
        Person p2 = new Person("Alice", 25);
        System.out.println(p1);
        System.out.println(p1.equals(p2)); // true
    }
}

class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // toString — called by println, string concat, debugging
    @Override
    public String toString() {
        return "Person{name='%s', age=%d}".formatted(name, age);
    }

    // equals — defines logical equality
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Person p)) return false;
        return age == p.age && Objects.equals(name, p.name);
    }

    // hashCode — MUST override if you override equals
    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}