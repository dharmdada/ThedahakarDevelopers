import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.METHOD, ElementType.TYPE})
@interface TestInfo {
    String author() default "unknown";
    int priority() default 1;
    String[] tags() default {};
}

@TestInfo(author = "Alice", priority = 5, tags = {"fast", "db"})
class MyTests {
    @TestInfo
    public void test1() {}
}

public class Main {
    public static void main(String[] args) throws Exception {
        Class<?> clazz = MyTests.class;
        if (clazz.isAnnotationPresent(TestInfo.class)) {
            TestInfo info = clazz.getAnnotation(TestInfo.class);
            System.out.println("Author: " + info.author());
        }

        TestInfo methodInfo = clazz.getMethod("test1").getAnnotation(TestInfo.class);
        System.out.println("Method priority: " + methodInfo.priority());
    }
}