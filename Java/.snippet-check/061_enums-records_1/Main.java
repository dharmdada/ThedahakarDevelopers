enum Planet {
    MERCURY(3.303e+23, 2.4397e6),
    VENUS(4.869e+24, 6.0518e6),
    EARTH(5.976e+24, 6.37814e6),
    MARS(6.421e+23, 3.3972e6);

    private final double mass;    // in kg
    private final double radius;  // in meters

    // Enum constructor (always private)
    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
    }

    // Method
    public double surfaceGravity() {
        final double G = 6.67300E-11;
        return G * mass / (radius * radius);
    }

    public double surfaceWeight(double otherMass) {
        return otherMass * surfaceGravity();
    }
}

public class Main {
    public static void main(String[] args) {
        // Usage
        double weight = Planet.EARTH.surfaceWeight(75);
        System.out.println("Weight on Earth: " + weight);
    }
}