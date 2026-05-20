public class Main {
    public static void main(String[] args) {
        // Creating objects
        Student s1 = new Student("Alice", 20);
        Student s2 = new Student("Bob", 22);
        System.out.println(s1);           // Student{name='Alice', age=20}
        System.out.println(Student.getCount()); // 2
    }
}

class Student {
    // ── FIELDS (State) ────────────────────────
    private String name;          // Instance field
    private int age;
    private static int count = 0; // Class field (shared)

    // ── CONSTRUCTOR ──────────────────────────
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
        count++;
    }

    // ── METHODS (Behavior) ──────────────────
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    // Static method — called on class, not instance
    public static int getCount() { return count; }

    // ── toString ────────────────────────────
    @Override
    public String toString() {
        return "Student{name='%s', age=%d}".formatted(name, age);
    }
}