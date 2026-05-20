interface TextProcessor {
    String process(String text);
}

class TrimProcessor implements TextProcessor {
    public String process(String text) { return text.trim(); }
}

class UppercaseProcessor implements TextProcessor {
    public String process(String text) { return text.toUpperCase(); }
}

class ProcessorChain implements TextProcessor {
    private final TextProcessor first;
    private final TextProcessor second;
    ProcessorChain(TextProcessor first, TextProcessor second) {
        this.first = first;
        this.second = second;
    }
    public String process(String text) { return second.process(first.process(text)); }
}

public class Main {
    public static void main(String[] args) {
        TextProcessor processor = new ProcessorChain(new TrimProcessor(), new UppercaseProcessor());
        System.out.println(processor.process("  hello  "));
    }
}