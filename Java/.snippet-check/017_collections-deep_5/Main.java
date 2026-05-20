import java.util.*;

record Employee(String name, double salary) implements Comparable<Employee> {
    @Override
    public int compareTo(Employee other) {
        return Double.compare(this.salary, other.salary);
    }
}

public class Main {
    public static void main(String[] args) {
        List<Employee> employees = new ArrayList<>(List.of(
            new Employee("Bob", 70000),
            new Employee("Alice", 90000),
            new Employee("Alice", 80000)
        ));

        Collections.sort(employees);
        System.out.println("By natural salary: " + employees);

        Comparator<Employee> byNameThenSalary = Comparator
            .comparing(Employee::name)
            .thenComparingDouble(Employee::salary);

        employees.sort(byNameThenSalary);
        System.out.println("By name then salary: " + employees);
    }
}