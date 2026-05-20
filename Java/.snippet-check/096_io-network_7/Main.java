import java.io.*;
import java.net.*;
import java.nio.*;
import java.nio.channels.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        Selector selector = Selector.open();

        ServerSocketChannel serverChannel = ServerSocketChannel.open();
        serverChannel.bind(new InetSocketAddress("localhost", 8080));
        serverChannel.configureBlocking(false);                      // KEY: non-blocking mode
        serverChannel.register(selector, SelectionKey.OP_ACCEPT);

        ByteBuffer buffer = ByteBuffer.allocate(1024);

        // In production this loop runs forever; here we do 1 iteration for demo
        selector.selectNow();  // non-blocking select for demo

        Iterator<SelectionKey> keys = selector.selectedKeys().iterator();
        while (keys.hasNext()) {
            SelectionKey key = keys.next();
            keys.remove();                    // MUST remove manually!

            if (key.isAcceptable()) {
                SocketChannel client = serverChannel.accept();
                client.configureBlocking(false);
                client.register(selector, SelectionKey.OP_READ);

            } else if (key.isReadable()) {
                SocketChannel client = (SocketChannel) key.channel();
                buffer.clear();
                int bytesRead = client.read(buffer);

                if (bytesRead == -1) {
                    client.close();  // client disconnected
                } else {
                    buffer.flip();
                    client.write(buffer);  // echo back
                }
            }
        }
        selector.close();
        serverChannel.close();
        System.out.println("NIO selector demo complete.");
    }
}