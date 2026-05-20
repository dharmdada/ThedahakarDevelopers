import java.io.File;
import java.util.List;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        System.out.println("Factorial of 5: " + factorial(5));
    }

    // Calculates n! (factorial)
    public static long factorial(int n) {
        // 1. Base Case: The condition where recursion stops
        if (n <= 1) {
            return 1;
        }
        // 2. Recursive Step: Calling itself with a smaller input
        return n * factorial(n - 1);
    }

    // Traversing a file directory structure
    public static void findFiles(File dir, String extension, List<File> result) {
        if (!dir.isDirectory()) return;
        
        File[] files = dir.listFiles();
        if (files == null) return;
        for (File file : files) {
            if (file.isDirectory()) {
                // Recursive call to search sub-folders
                findFiles(file, extension, result);
            } else if (file.getName().endsWith(extension)) {
                result.add(file);
            }
        }
    }
}