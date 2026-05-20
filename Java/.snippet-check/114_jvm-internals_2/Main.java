import java.util.*;

class Cache {
    private static final Map<String, Object> cache = new HashMap<>();

    public static void add(String key, Object value) {
        cache.put(key, value);
    }

    public static void remove(String key) {
        cache.remove(key);
    }

    public static int size() {
        return cache.size();
    }
}

public class Main {
    public static void main(String[] args) {
        Cache.add("user:1", new byte[1024]);
        System.out.println("Cache size before cleanup: " + Cache.size());
        Cache.remove("user:1");
        System.out.println("Cache size after cleanup: " + Cache.size());
    }
}