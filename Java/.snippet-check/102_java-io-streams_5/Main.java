import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        try (var dos = new DataOutputStream(
                new BufferedOutputStream(new FileOutputStream("data.bin")))) {
            dos.writeInt(42);
            dos.writeLong(123456789L);
            dos.writeDouble(3.14159);
            dos.writeBoolean(true);
            dos.writeUTF("Hello");
        }

        try (var dis = new DataInputStream(
                new BufferedInputStream(new FileInputStream("data.bin")))) {
            int num = dis.readInt();
            long id = dis.readLong();
            double pi = dis.readDouble();
            boolean flag = dis.readBoolean();
            String message = dis.readUTF();
            System.out.printf("%d %d %.5f %s %s%n", num, id, pi, flag, message);
        }
    }
}