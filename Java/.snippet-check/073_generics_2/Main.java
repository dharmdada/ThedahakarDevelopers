import java.util.Objects;

class Pair<A, B> {
    private final A first;
    private final B second;

    public Pair(A first, B second) {
        this.first  = first;
        this.second = second;
    }

    public A first()  { return first; }
    public B second() { return second; }

    public Pair<B, A> swap() { return new Pair<>(second, first); }

    public static <X, Y> Pair<X, Y> of(X x, Y y) { return new Pair<>(x, y); }

    @Override
    public String toString() { return "(" + first + ", " + second + ")"; }
}

public class Main {
    public static void main(String[] args) {
        // Usage — fully type-safe, no casts
        Pair<String, Integer> p = Pair.of("Alice", 42);
        String name                  = p.first();   // String
        int    age                   = p.second();  // int (auto-unboxed)
        Pair<Integer, String> flipped = p.swap();
        System.out.println(p + " flipped: " + flipped);
    }
}