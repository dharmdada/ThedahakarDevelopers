import java.util.concurrent.ThreadLocalRandom;
import java.util.stream.IntStream;
import java.security.SecureRandom;
import java.security.NoSuchAlgorithmException;
import java.util.HexFormat;
import java.util.List;
import java.util.ArrayList;
import java.util.Collections;

public class Main {
    public static void main(String[] args) throws NoSuchAlgorithmException {
        // ---- ThreadLocalRandom (preferred for non-security concurrent use) ----
        int    roll     = ThreadLocalRandom.current().nextInt(1, 7);      // 1..6 inclusive
        long   id       = ThreadLocalRandom.current().nextLong(1_000_000L);
        double fraction = ThreadLocalRandom.current().nextDouble(0.0, 1.0);
        boolean coin    = ThreadLocalRandom.current().nextBoolean();

        // Stream of random ints
        IntStream randoms = ThreadLocalRandom.current().ints(5, 1, 100); // 5 values in [1,100)

        // ---- SecureRandom (for security-sensitive values) ----
        SecureRandom sr    = SecureRandom.getInstanceStrong(); // OS entropy source
        byte[] tokenBytes  = new byte[32];
        sr.nextBytes(tokenBytes);                            // 256-bit cryptographic token
        String hexToken    = HexFormat.of().formatHex(tokenBytes); // Java 17+

        // Generating a 6-digit OTP (One Time Password)
        int otp = sr.nextInt(1_000_000); // 0..999999
        String otpStr = String.format("%06d", otp); // zero-padded to 6 digits

        // ---- Shuffle a list ----
        List<String> deck = new ArrayList<>(List.of("A", "K", "Q", "J", "10"));
        Collections.shuffle(deck, ThreadLocalRandom.current());

        // ---- Random element from list ----
        String drawn = deck.get(ThreadLocalRandom.current().nextInt(deck.size()));
    }
}