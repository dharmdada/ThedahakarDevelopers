const quizDB = {
  'what-is-java.html': [
    {
      question: "Which of the following is NOT a feature of Java?",
      options: ["Platform Independent (WORA)", "Object-Oriented", "Manual Memory Management", "Strongly Typed"],
      answer: 2,
      explanation: "Java handles memory automatically using a Garbage Collector. In languages like C/C++, you must manually allocate and free memory, but Java prevents these types of memory leaks by managing the Heap for you."
    },
    {
      question: "What does WORA stand for in Java?",
      options: ["Write Once, Read Anywhere", "Write Once, Run Anywhere", "Windows Operating Resource Array", "Web Object Routing Architecture"],
      answer: 1,
      explanation: "WORA stands for Write Once, Run Anywhere. It means you can compile your Java code on one platform and run it on any other platform that has a JVM."
    },
    {
      question: "Which component is responsible for executing the Java bytecode?",
      options: ["JDK", "JRE", "JVM", "JIT"],
      answer: 2,
      explanation: "The JVM (Java Virtual Machine) is the interpreter that reads and executes the bytecode."
    },
    {
      question: "Is Java a purely object-oriented language?",
      options: ["Yes, everything is an object.", "No, because it supports primitive data types.", "Yes, because it supports inheritance.", "No, because it doesn't support pointers."],
      answer: 1,
      explanation: "Java is not considered 100% purely object-oriented because it supports primitive data types (like int, char) which are not objects."
    },
    {
      question: "What is the difference between JDK and JRE?",
      options: ["JDK is for development, JRE is for running.", "JRE is for development, JDK is for running.", "They are the exact same thing.", "JDK includes JVM, JRE does not."],
      answer: 0,
      explanation: "JDK (Java Development Kit) contains tools for developing Java programs (like javac). JRE (Java Runtime Environment) contains the JVM and libraries needed to RUN Java programs."
    },
    {
      question: "Is Java a compiled or interpreted language?",
      options: ["Purely compiled.", "Purely interpreted.", "Both. It compiles to bytecode, then interprets/JIT compiles that.", "Neither."],
      answer: 2,
      explanation: "Java is both. Source code is compiled into bytecode (by <code>javac</code>), and then the JVM interprets or JIT-compiles that bytecode into native machine code."
    },
    {
      question: "What is the String Pool?",
      options: ["A special area in the Heap to store String literals.", "A list of all strings in the program.", "A garbage collection algorithm.", "A database for strings."],
      answer: 0,
      explanation: "The String Pool is a special storage area in the Java Heap. When you create a String literal, the JVM checks the pool first. If it exists, it reuses the reference."
    },
    {
      question: "Does Java support multiple inheritance of classes?",
      options: ["Yes, a class can extend multiple classes.", "No, to avoid the 'Diamond Problem'.", "Yes, using the 'extends' keyword with commas.", "No, because it is too slow."],
      answer: 1,
      explanation: "Java does NOT support multiple inheritance of classes to avoid complexity and ambiguity (the Diamond Problem). However, a class can implement multiple interfaces."
    },
    {
      question: "What is the file extension of a Java bytecode file?",
      options: [".java", ".class", ".byte", ".exe"],
      answer: 1,
      explanation: "Java source files have the <code>.java</code> extension. When compiled, they produce bytecode files with the <code>.class</code> extension."
    },
    {
      question: "Which company originally developed Java?",
      options: ["Microsoft", "Sun Microsystems", "Oracle", "IBM"],
      answer: 1,
      explanation: "Java was originally developed by Sun Microsystems (James Gosling and team) in 1995. Oracle later acquired Sun."
    },
    {
      question: "What is the purpose of the <code>package</code> statement in Java?",
      options: ["To group related classes together and avoid naming conflicts.", "To create an archive file.", "To import external libraries.", "To make a class public."],
      answer: 0,
      explanation: "Packages are used in Java to prevent naming conflicts, to control access, and to make searching/locating and usage of classes, interfaces, enumerations, and annotations easier."
    },
    {
      question: "What is Garbage Collection in Java?",
      options: ["A process that deletes files from the disk.", "An automatic memory management process that removes unused objects from the heap.", "A way to optimize code.", "A process that checks for syntax errors."],
      answer: 1,
      explanation: "Garbage collection is the process by which Java programs perform automatic memory management. The GC finds unused objects and deletes them to free up memory."
    },
    {
      question: "Is Java pass-by-value or pass-by-reference?",
      options: ["Pass-by-reference.", "Pass-by-value.", "Both.", "Depends on the data type."],
      answer: 1,
      explanation: "Java is strictly pass-by-value. For primitives, the value is passed. For objects, the value of the reference (memory address) is passed, not the object itself."
    },
    {
      question: "What is the parent class of all classes in Java?",
      options: ["Class", "Object", "Main", "Root"],
      answer: 1,
      explanation: "The <code>java.lang.Object</code> class is the root of the class hierarchy. Every class has Object as a superclass."
    }
  ],
  'setup.html': [
    {
      question: "What is the entry point for every Java application?",
      options: ["public void start()", "public static void main(String[] args)", "public void init()", "class Main"],
      answer: 1,
      explanation: "The JVM specifically looks for the EXACT signature: public static void main(String[] args). It must be public (so JVM can access it) and static (so JVM can run it without instantiating the class first)."
    },
    {
      question: "Which command is used to compile a Java file named 'App.java'?",
      options: ["java App.java", "javac App.java", "compile App.java", "run App.java"],
      answer: 1,
      explanation: "The <code>javac</code> command is the Java compiler. It translates the source code into bytecode."
    },
    {
      question: "Which command is used to run the compiled class 'App.class'?",
      options: ["java App", "javac App", "run App", "execute App"],
      answer: 0,
      explanation: "The <code>java</code> command followed by the class name (without the .class extension) runs the application."
    },
    {
      question: "What happens if you run a class without a main method?",
      options: ["It compiles but fails at runtime with a NoSuchMethodError.", "It fails to compile.", "It runs but does nothing.", "It throws a NullPointerException."],
      answer: 0,
      explanation: "It will compile fine because there is no syntax error. But when you try to run it, the JVM will complain that it cannot find the main method."
    },
    {
      question: "Can you have multiple main methods in a single Java class?",
      options: ["No, only one is allowed.", "Yes, through method overloading, but only one acts as the entry point.", "Yes, as long as they have different return types.", "No, it causes a compiler error."],
      answer: 1,
      explanation: "You can overload the main method (e.g., <code>main(int[] args)</code>), but the JVM will only call the standard <code>public static void main(String[] args)</code> as the entry point."
    },
    {
      question: "What is the purpose of the <code>package</code> statement?",
      options: ["To import external libraries.", "To organize classes into namespaces and avoid naming conflicts.", "To make a class public.", "To define a constructor."],
      answer: 1,
      explanation: "Packages are like folders. They help organize your classes and prevent naming collisions (e.g., you can have two classes named 'User' if they are in different packages)."
    },
    {
      question: "What is the purpose of the <code>import</code> statement?",
      options: ["To bring in classes from other packages so you can use them without full paths.", "To load files from the disk.", "To include C++ headers.", "To make code run faster."],
      answer: 0,
      explanation: "The <code>import</code> statement tells the compiler where to find classes that are not in the current package or the default <code>java.lang</code> package."
    },
    {
      question: "Since Java 11, can you run a single-file Java program without compiling it first?",
      options: ["No, you must always run javac first.", "Yes, using the 'java' command directly on the .java file.", "Yes, but only if it doesn't use external libraries.", "No, Java is strictly a compiled language."],
      answer: 1,
      explanation: "Since Java 11, you can use <code>java MyProgram.java</code>. The JVM will compile it in memory and run it directly, which is great for small scripts."
    },
    {
      question: "What is the purpose of the <code>CLASSPATH</code> environment variable?",
      options: ["To tell the JVM where to find user-defined classes and packages.", "To set the path for the JDK.", "To store user files.", "To define the home directory."],
      answer: 0,
      explanation: "The <code>CLASSPATH</code> is the path that the Java runtime environment searches for classes and other resource files."
    },
    {
      question: "Which tool is used to create documentation from Java source code?",
      options: ["java", "javac", "javadoc", "jdb"],
      answer: 2,
      explanation: "<code>javadoc</code> is a tool that parses the declarations and documentation comments in a set of source files and produces a set of HTML pages describing the classes."
    },
    {
      question: "What is the purpose of the <code>jlink</code> tool introduced in Java 9?",
      options: ["To link C++ libraries.", "To create custom runtime images containing only the necessary modules.", "To join multiple JAR files.", "To compile code faster."],
      answer: 1,
      explanation: "<code>jlink</code> is a tool that can assemble and optimize a set of modules and their dependencies into a custom runtime image."
    },
    {
      question: "What is the difference between an IDE and a text editor for Java development?",
      options: ["IDE provides tools like debugging and code completion; text editor only edits text.", "Text editor compiles code; IDE doesn't.", "They are the same.", "IDEs are only for C++."],
      answer: 0,
      explanation: "An Integrated Development Environment (IDE) like IntelliJ or Eclipse provides comprehensive facilities to programmers for software development, including a source code editor, build automation tools, and a debugger."
    },
    {
      question: "What is the purpose of the <code>jps</code> tool in JDK?",
      options: ["To list the instrumented JVMs on the target system.", "To compile code.", "To run a program.", "To debug a program."],
      answer: 0,
      explanation: "The <code>jps</code> tool lists the instrumented HotSpot Java Virtual Machines (JVMs) on the target system."
    }
  ],
  'datatypes.html': [
    {
      question: "Where are primitive types stored in memory during a method execution?",
      options: ["The Heap (Warehouse)", "The Stack (Desk)", "Metaspace", "The String Pool"],
      answer: 1,
      explanation: "Local primitive variables (like int, double, boolean) and object references (remote controls) are stored directly on the Stack frame. Actual Objects are built on the Heap."
    },
    {
      question: "Which of the following is a Wrapper Class?",
      options: ["int", "double", "Boolean", "String"],
      answer: 2,
      explanation: "Wrapper classes start with a capital letter (like Integer, Double, Boolean). They 'wrap' the primitive inside a real Object so it can be stored in Collections like ArrayList."
    },
    {
      question: "What is the size of an <code>int</code> in Java?",
      options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
      answer: 2,
      explanation: "An <code>int</code> is a 32-bit signed two's complement integer, which takes up 4 bytes of memory."
    },
    {
      question: "Which data type should you use for precise financial calculations?",
      options: ["float", "double", "BigDecimal", "long"],
      answer: 2,
      explanation: "Float and double are floating-point types and can introduce rounding errors. <code>BigDecimal</code> is class used for high-precision arithmetic, perfect for money."
    },
    {
      question: "What is Autoboxing in Java?",
      options: ["Automatically converting a primitive to its corresponding wrapper class.", "Automatically converting a wrapper class to a primitive.", "Creating a box around a variable.", "Packing code into a jar file."],
      answer: 0,
      explanation: "Autoboxing is the automatic conversion that the Java compiler makes between the primitive types and their corresponding object wrapper classes (e.g., int to Integer)."
    },
    {
      question: "What is the default value of a boolean variable in a class?",
      options: ["true", "false", "null", "undefined"],
      answer: 1,
      explanation: "Primitive boolean instance variables are automatically initialized to <code>false</code>."
    },
    {
      question: "Which of the following is NOT a primitive data type?",
      options: ["boolean", "char", "String", "byte"],
      answer: 2,
      explanation: "<code>String</code> is a class in Java, not a primitive type."
    },
    {
      question: "What is the size of a <code>char</code> in Java?",
      options: ["1 byte", "2 bytes", "4 bytes", "Depends on the platform"],
      answer: 1,
      explanation: "A <code>char</code> in Java takes up 2 bytes because it uses Unicode (UTF-16) encoding."
    },
    {
      question: "What is the default value of a local variable?",
      options: ["0", "null", "false", "None, they must be explicitly initialized."],
      answer: 3,
      explanation: "Local variables do not get default values. They must be initialized before they are used, otherwise it causes a compiler error."
    },
    {
      question: "Which data type is used to store true/false values?",
      options: ["int", "boolean", "String", "char"],
      answer: 1,
      explanation: "The <code>boolean</code> data type is used to store only two possible values: true and false."
    },
    {
      question: "What is the range of a <code>byte</code> in Java?",
      options: ["-128 to 127", "0 to 255", "-32768 to 32767", "Depends on the system"],
      answer: 0,
      explanation: "A <code>byte</code> is an 8-bit signed integer, so its range is from -128 to 127."
    },
    {
      question: "Can you assign a <code>long</code> value to an <code>int</code> variable directly?",
      options: ["Yes, always.", "No, it requires an explicit cast.", "Yes, if the value is small enough.", "No, never."],
      answer: 1,
      explanation: "Assigning a larger type to a smaller type is called narrowing conversion and requires an explicit cast, e.g., <code>(int) myLong</code>."
    }
  ],
  'operators.html': [
    {
      question: "What happens in Short-Circuit Evaluation if the first condition of an AND (&&) check is false?",
      options: ["The second condition is evaluated normally.", "A compile-time error occurs.", "The JVM skips the second condition entirely.", "An exception is thrown."],
      answer: 2,
      explanation: "Like a lazy security guard, if the first check of an AND condition fails, the whole statement is guaranteed to be false. Java completely skips the right side, which is useful for preventing NullPointerExceptions."
    },
    {
      question: "Which operator is used to compare two values for equality?",
      options: ["=", "==", "===", "equals"],
      answer: 1,
      explanation: "The <code>==</code> operator is used to compare primitives for value equality and objects for reference equality."
    },
    {
      question: "What is the result of 10 % 3 in Java?",
      options: ["3", "1", "0", "3.33"],
      answer: 1,
      explanation: "The <code>%</code> (modulus) operator returns the remainder of the division. 10 divided by 3 is 3 with a remainder of 1."
    },
    {
      question: "What is the result of 5 + 3 * 2 in Java?",
      options: ["16", "11", "10", "13"],
      answer: 1,
      explanation: "Operator precedence applies. Multiplication <code>*</code> has higher precedence than addition <code>+</code>. So it's 5 + (3 * 2) = 11."
    },
    {
      question: "Which operator is the Ternary operator?",
      options: ["&&", "||", "? :", "instanceof"],
      answer: 2,
      explanation: "The ternary operator <code>? :</code> is a shorthand for an if-then-else statement."
    },
    {
      question: "What does the <code>instanceof</code> operator do?",
      options: ["Checks if an object is an instance of a specific class or interface.", "Creates a new instance of a class.", "Returns the class name of an object.", "Compares two objects for equality."],
      answer: 0,
      explanation: "The <code>instanceof</code> operator compares an object to a specified type."
    },
    {
      question: "What is the result of \"Hello\" + 5 in Java?",
      options: ["Hello5", "Error", "Hello", "5Hello"],
      answer: 0,
      explanation: "The <code>+</code> operator with a String results in String concatenation. The integer 5 is converted to a string."
    },
    {
      question: "What does the <code>>>></code> operator do?",
      options: ["Signed right shift.", "Unsigned right shift.", "Left shift.", "Bitwise XOR."],
      answer: 1,
      explanation: "The <code>>>></code> operator is the unsigned right shift operator. It shifts a zero into the leftmost position."
    },
    {
      question: "What is the difference between <code>i++</code> and <code>++i</code>?",
      options: ["i++ increments before use; ++i increments after use.", "i++ increments after use; ++i increments before use.", "They are the same.", "i++ is only for loops."],
      answer: 1,
      explanation: "<code>i++</code> (post-increment) returns the value before incrementing. <code>++i</code> (pre-increment) increments the value and then returns it."
    },
    {
      question: "What does the <code>^</code> operator do in Java?",
      options: ["Exponentiation.", "Bitwise XOR.", "Logical AND.", "Bitwise OR."],
      answer: 1,
      explanation: "The <code>^</code> operator is the bitwise exclusive OR (XOR) operator."
    },
    {
      question: "What is the result of <code>true || false</code>?",
      options: ["true", "false", "null", "Error"],
      answer: 0,
      explanation: "The logical OR operator <code>||</code> returns true if at least one of the operands is true."
    },
    {
      question: "What is the result of <code>!true</code>?",
      options: ["true", "false", "null", "Error"],
      answer: 1,
      explanation: "The logical NOT operator <code>!</code> inverts the boolean value."
    },
    {
      question: "Which operator is used to assign a value to a variable?",
      options: ["==", "=", "===", "->"],
      answer: 1,
      explanation: "The <code>=</code> operator is the assignment operator."
    }
  ],
  'controlflow.html': [
    {
      question: "Which loop is guaranteed to execute at least once?",
      options: ["for loop", "while loop", "do-while loop", "enhanced for loop"],
      answer: 2,
      explanation: "A do-while loop executes its code block first, and THEN checks the condition. Because of this, even if the condition is initially false, the block runs exactly one time."
    },
    {
      question: "Which statement is used to exit a loop immediately?",
      options: ["continue", "break", "return", "exit"],
      answer: 1,
      explanation: "The <code>break</code> statement terminates the loop immediately and transfers execution to the statement following the loop."
    },
    {
      question: "What is the output of a switch statement if no case matches and there is no default case?",
      options: ["It throws an exception.", "It does nothing and continues execution after the switch.", "It fails to compile.", "It executes the first case."],
      answer: 1,
      explanation: "If no case matches and there is no default label, the switch statement simply completes without executing any of its body."
    },
    {
      question: "Can you use a String in a switch statement?",
      options: ["No, only integers and chars.", "Yes, since Java 7.", "Yes, but only if they are constants.", "No, strings are not supported."],
      answer: 1,
      explanation: "Since Java 7, you can use String objects in the expression of a switch statement."
    },
    {
      question: "What is the 'Enhanced for loop' (for-each) used for?",
      options: ["To iterate over arrays and collections.", "To run a loop a specific number of times.", "To replace while loops.", "To run loops in parallel."],
      answer: 0,
      explanation: "The enhanced for loop is used to iterate through elements of arrays or collections sequentially without using an index variable."
    },
    {
      question: "What happens if you omit the <code>break</code> statement in a switch case?",
      options: ["It throws a compiler error.", "It falls through to the next case.", "It exits the switch statement.", "It repeats the current case."],
      answer: 1,
      explanation: "Without a break statement, execution will continue (fall through) into the next case, regardless of whether that case's condition matches."
    },
    {
      question: "Can a <code>while</code> loop condition be a non-boolean value in Java?",
      options: ["Yes, like in C/C++ where 0 is false and non-zero is true.", "No, it must be a boolean expression.", "Yes, but only if it's an integer.", "No, unless you use a cast."],
      answer: 1,
      explanation: "Java is strictly typed. The condition in a while, do-while, or if statement MUST evaluate to a boolean (true or false)."
    },
    {
      question: "What is the difference between <code>break</code> and <code>continue</code>?",
      options: ["break exits the loop; continue skips the rest of the current iteration.", "break skips the current iteration; continue exits the loop.", "They are the same.", "break is only for switch statements."],
      answer: 0,
      explanation: "<code>break</code> terminates the loop entirely. <code>continue</code> skips the remaining statements in the current iteration and moves to the next iteration."
    },
    {
      question: "Can you use a <code>float</code> in a switch statement?",
      options: ["Yes, always.", "No, floating-point types are not allowed.", "Yes, if it is a constant.", "No, unless cast to int."],
      answer: 1,
      explanation: "The expression in a switch statement can be of type byte, short, char, int, enum, or String. Floating-point types (float, double) are not allowed."
    },
    {
      question: "What is the purpose of the <code>default</code> case in a switch statement?",
      options: ["To execute if no other case matches.", "To start the switch statement.", "To handle errors.", "To exit the switch statement."],
      answer: 0,
      explanation: "The <code>default</code> case is executed if none of the specified cases match the switch expression."
    },
    {
      question: "Which loop is best used when you know the exact number of iterations?",
      options: ["while loop", "do-while loop", "for loop", "enhanced for loop"],
      answer: 2,
      explanation: "A standard <code>for</code> loop is typically used when the number of iterations is known in advance."
    },
    {
      question: "What is an infinite loop?",
      options: ["A loop that never ends because the condition is always true.", "A loop that runs 1000 times.", "A loop that causes a crash.", "A loop that uses too much memory."],
      answer: 0,
      explanation: "An infinite loop is a loop where the terminating condition is never met, causing it to run indefinitely."
    }
  ],
  'strings.html': [
    {
      question: "Why should you use .equals() instead of == to compare Strings?",
      options: ["Because == compares memory addresses (Identity), while .equals() compares the actual characters (Value).", "Because == is slower than .equals().", "Because == only works for numbers.", "Because Strings don't support the == operator at compile time."],
      answer: 0,
      explanation: "The == operator checks if two remote controls point to the exact same physical object on the Heap. The .equals() method checks if the content (the characters inside) are identical."
    },
    {
      question: "Are Strings mutable in Java?",
      options: ["Yes, you can change their characters directly.", "No, Strings are immutable.", "Yes, but only if they are declared with var.", "No, unless you use the delete operator."],
      answer: 1,
      explanation: "Strings are immutable in Java. Any operation that appears to modify a String actually creates a new String object."
    },
    {
      question: "Which class should you use for heavy String manipulation in a single-threaded environment?",
      options: ["String", "StringBuilder", "StringBuffer", "StringJoiner"],
      answer: 1,
      explanation: "<code>StringBuilder</code> is mutable and not synchronized, making it the fastest choice for heavy String manipulation in a single thread."
    },
    {
      question: "What is the difference between String and StringBuffer?",
      options: ["String is immutable, StringBuffer is mutable and thread-safe.", "String is mutable, StringBuffer is immutable.", "They are the same, but StringBuffer is older.", "StringBuffer is faster than String for all operations."],
      answer: 0,
      explanation: "String is immutable. <code>StringBuffer</code> is mutable and its methods are synchronized, making it thread-safe but slower than <code>StringBuilder</code>."
    },
    {
      question: "How do you check if a String contains a specific substring?",
      options: ["str.has()", "str.contains()", "str.includes()", "str.find()"],
      answer: 1,
      explanation: "The <code>contains()</code> method returns true if and only if this string contains the specified sequence of char values."
    },
    {
      question: "What does <code>str.trim()</code> do?",
      options: ["Removes whitespace from both ends of the string.", "Converts the string to lowercase.", "Truncates the string to a certain length.", "Removes all spaces from the string."],
      answer: 0,
      explanation: "The <code>trim()</code> method returns a string whose value is this string, with any leading and trailing whitespace removed."
    },
    {
      question: "What is the result of \"abc\".toUpperCase()?",
      options: ["ABC", "abc", "Abc", "Error"],
      answer: 0,
      explanation: "The <code>toUpperCase()</code> method converts all of the characters in the String to upper case."
    },
    {
      question: "How do you compare two Strings ignoring case differences?",
      options: ["str1 == str2", "str1.equals(str2)", "str1.equalsIgnoreCase(str2)", "str1.compareNoCase(str2)"],
      answer: 2,
      explanation: "The <code>equalsIgnoreCase()</code> method compares two strings, ignoring case considerations."
    },
    {
      question: "What is the output of \"apple\".charAt(1)?",
      options: ["a", "p", "l", "e"],
      answer: 1,
      explanation: "Indices are 0-based in Java strings. 'a' is at index 0, 'p' is at index 1."
    },
    {
      question: "Which method is used to split a string into an array of substrings based on a regular expression?",
      options: ["divide()", "split()", "break()", "cut()"],
      answer: 1,
      explanation: "The <code>split()</code> method splits this string around matches of the given regular expression."
    },
    {
      question: "What does the <code>str.isEmpty()</code> method check?",
      options: ["If the string contains only spaces.", "If the string length is 0.", "If the string is null.", "If the string has no vowels."],
      answer: 1,
      explanation: "<code>isEmpty()</code> returns true if, and only if, <code>length()</code> is 0."
    },
    {
      question: "How do you get the length of a String?",
      options: ["str.length", "str.size()", "str.length()", "str.count()"],
      answer: 2,
      explanation: "Strings have a <code>length()</code> method, while arrays have a <code>length</code> property."
    },
    {
      question: "What is the result of \"hello\".substring(1, 3)?",
      options: ["he", "el", "ell", "lo"],
      answer: 1,
      explanation: "The <code>substring(beginIndex, endIndex)</code> method returns a string from beginIndex (inclusive) to endIndex (exclusive). So index 1 and 2 are 'e' and 'l'."
    }
  ],
  'arrays.html': [
    {
      question: "What is the fundamental limitation of a standard Java Array?",
      options: ["It can only hold primitive types.", "Its size is fixed upon creation and cannot be changed.", "It can only be iterated using a standard for loop.", "It cannot be passed to a method."],
      answer: 1,
      explanation: "Standard arrays are contiguous blocks of memory. Once you declare an array of size 10, it will forever be size 10. If you need a resizable array, you must use an ArrayList."
    },
    {
      question: "How do you find the length of an array named 'arr'?",
      options: ["arr.length()", "arr.length", "arr.size()", "arr.getSize()"],
      answer: 1,
      explanation: "For arrays, <code>length</code> is a public final field, not a method. So you use <code>arr.length</code> without parentheses."
    },
    {
      question: "What is the default value of elements in an <code>int[]</code> array?",
      options: ["null", "0", "-1", "undefined"],
      answer: 1,
      explanation: "Primitive numeric arrays are automatically initialized with zero (0) for all elements."
    },
    {
      question: "How do you copy an array in Java?",
      options: ["arr1 = arr2", "System.arraycopy()", "arr1.copy(arr2)", "Arrays.duplicate(arr1)"],
      answer: 1,
      explanation: "Using <code>=</code> only copies the reference. To actually copy the contents into a new array, you use <code>System.arraycopy()</code> or <code>Arrays.copyOf()</code>."
    },
    {
      question: "What is an Anonymous Array?",
      options: ["An array without a name, created and passed directly to a method.", "An array of unknown size.", "An array that contains null values.", "An array declared with var."],
      answer: 0,
      explanation: "An anonymous array is created without a variable name, often used as a method argument (e.g., <code>printArray(new int[]{1, 2, 3})</code>)."
    },
    {
      question: "What is the result of accessing an index outside the array bounds?",
      options: ["It returns null.", "It returns 0.", "It throws an ArrayIndexOutOfBoundsException.", "It expands the array automatically."],
      answer: 2,
      explanation: "Java arrays have a fixed size. Accessing an index less than 0 or greater than or equal to length throws a runtime exception."
    },
    {
      question: "Can an array hold objects of different classes?",
      options: ["No, arrays are strictly typed.", "Yes, if the array type is Object[].", "Yes, always.", "No, unless they are wrapper classes."],
      answer: 1,
      explanation: "An array of type <code>Object[]</code> can hold references to any Java object, since all classes inherit from Object."
    },
    {
      question: "What is a multi-dimensional array in Java?",
      options: ["A special data structure.", "An array of arrays.", "An array with infinite size.", "A grid object."],
      answer: 1,
      explanation: "In Java, a multi-dimensional array is simply an array whose elements are themselves arrays."
    },
    {
      question: "How do you sort an array in Java?",
      options: ["arr.sort()", "Arrays.sort(arr)", "Collections.sort(arr)", "sort(arr)"],
      answer: 1,
      explanation: "The <code>Arrays</code> utility class provides a static <code>sort()</code> method to sort arrays of primitives and objects."
    },
    {
      question: "What is the result of <code>Arrays.equals(arr1, arr2)</code>?",
      options: ["Checks if both arrays have the same length and elements in the same order.", "Checks if both arrays point to the same memory location.", "Checks if the arrays contain at least one common element.", "Throws an exception if elements are not comparable."],
      answer: 0,
      explanation: "<code>Arrays.equals()</code> returns true if the two specified arrays of integers are equal to one another. Two arrays are considered equal if both arrays contain the same number of elements, and all corresponding pairs of elements in the two arrays are equal."
    },
    {
      question: "How do you fill all elements of an array with a specific value?",
      options: ["arr.fill(value)", "Arrays.fill(arr, value)", "arr = value", "fill(arr, value)"],
      answer: 1,
      explanation: "The <code>Arrays.fill()</code> method assigns the specified value to each element of the specified array."
    },
    {
      question: "What is a 'jagged' array in Java?",
      options: ["An array with negative indices.", "A multi-dimensional array where the rows have different lengths.", "An array that contains only prime numbers.", "An array that cannot be sorted."],
      answer: 1,
      explanation: "A jagged array is an array of arrays such that member arrays can be of different sizes."
    },
    {
      question: "Can you create an array without specifying the size if you provide the elements?",
      options: ["No, size is always required.", "Yes, e.g., <code>int[] arr = {1, 2, 3};</code>", "Yes, but only for String arrays.", "No, unless you use the new keyword."],
      answer: 1,
      explanation: "You can use an array initializer to create and initialize an array in one step, where the size is inferred from the number of elements provided."
    }
  ],
  'methods.html': [
    {
      question: "Java is strictly Pass-by-Value. What does this mean when you pass an Object to a method?",
      options: ["The method receives a clone of the original object.", "The method receives the actual memory address (Pass-by-Reference).", "The method receives a COPY of the remote control (reference).", "The method can reassign the original variable to point to a new object."],
      answer: 2,
      explanation: "Java passes a copy of the reference (the remote control). You can use this copied remote control to modify the original object's internal state, but you cannot reassign the original remote control to point to a new object."
    },
    {
      question: "What is Method Overloading?",
      options: ["Methods with the same name and parameters but different return types.", "Methods with different names but same parameters.", "Methods with the same name but different parameters (number or type).", "Methods that call themselves."],
      answer: 2,
      explanation: "Method Overloading allows a class to have more than one method with the same name, as long as their parameter lists are different."
    },
    {
      question: "Can a static method call a non-static method directly?",
      options: ["Yes, always.", "No, it must create an instance of the class first.", "Yes, if they are in the same class.", "No, because non-static methods don't exist."],
      answer: 1,
      explanation: "Static methods belong to the class, while non-static methods belong to an instance. A static method cannot access non-static members directly without an object reference."
    },
    {
      question: "What is the difference between parameters and arguments?",
      options: ["Parameters are in the method definition; arguments are the actual values passed.", "Arguments are in the method definition; parameters are the values passed.", "They are the exact same thing.", "Parameters are for primitive types; arguments are for objects."],
      answer: 0,
      explanation: "Parameters are the variables listed in the method signature. Arguments are the actual values you pass into those parameters when calling the method."
    },
    {
      question: "What does the <code>varargs</code> feature allow?",
      options: ["Passing a variable number of arguments to a method.", "Declaring variables with var.", "Creating methods with variable return types.", "Passing arguments by reference."],
      answer: 0,
      explanation: "Varargs (Variable Arguments) indicated by <code>...</code> allow a method to accept zero or more arguments of the specified type."
    },
    {
      question: "Can a method return multiple values in Java?",
      options: ["Yes, using commas.", "No, a method can only return one value or object.", "Yes, by default.", "No, unless it returns void."],
      answer: 1,
      explanation: "A Java method can only return a single value or object. To return multiple values, you must wrap them in an array, collection, or a custom object."
    },
    {
      question: "What is method overriding?",
      options: ["Having methods with the same name but different parameters.", "Providing a specific implementation in a subclass for a method already defined in its superclass.", "Calling a method from another class.", "Deleting a method."],
      answer: 1,
      explanation: "Method overriding occurs when a subclass provides a specific implementation for a method that is already provided by one of its super-classes."
    },
    {
      question: "Can you override a static method?",
      options: ["Yes, always.", "No, static methods cannot be overridden, only hidden.", "Yes, if they have the same signature.", "No, static methods don't support polymorphism."],
      answer: 1,
      explanation: "Static methods belong to the class, not instances. If a subclass defines a static method with the same signature, it hides the superclass method rather than overriding it."
    },
    {
      question: "What is the purpose of the <code>return</code> keyword?",
      options: ["To exit a loop.", "To exit a method and optionally return a value.", "To throw an exception.", "To create a new object."],
      answer: 1,
      explanation: "The <code>return</code> statement is used to explicitly return from a method. That is, it causes program control to transfer back to the invoker of the method."
    },
    {
      question: "Can a method be declared without access modifiers?",
      options: ["No, it must be public, private, or protected.", "Yes, it defaults to package-private.", "Yes, it defaults to public.", "No, it causes a compiler error."],
      answer: 1,
      explanation: "If no access modifier is specified, the method has package-private (default) access, meaning it is accessible only within its own package."
    },
    {
      question: "What is a recursive method?",
      options: ["A method that calls another method.", "A method that calls itself.", "A method that cannot be modified.", "A method that returns void."],
      answer: 1,
      explanation: "A recursive method is a method that calls itself to solve a smaller part of the problem."
    },
    {
      question: "What is the difference between a method and a constructor?",
      options: ["Constructors have no return type; methods must have one (or void).", "Methods initialize objects; constructors don't.", "They are the same.", "Constructors can be static; methods cannot."],
      answer: 0,
      explanation: "Constructors are used to initialize the state of an object and have no return type, not even void. Methods represent the behavior of an object and must have a return type."
    },
    {
      question: "Can you pass a primitive type by reference in Java?",
      options: ["Yes, using the ref keyword.", "No, primitives are always passed by value.", "Yes, by default.", "No, unless you use a wrapper class."],
      answer: 1,
      explanation: "Primitives are always passed by value. To simulate pass-by-reference, you can wrap the primitive in an object or array."
    }
  ],
  'classes.html': [
    {
      question: "What is a Constructor?",
      options: ["A method that destroys the object.", "A special method called automatically when using 'new' to initialize the object's state.", "A method that must return the class type.", "A static method used to call other classes."],
      answer: 1,
      explanation: "A constructor is the initialization script. It runs exactly once when the object is instantiated (using the 'new' keyword) to set up the default state of the object."
    },
    {
      question: "What is Encapsulation?",
      options: ["Hiding internal state and requiring all interaction to be performed through well-defined methods.", "The ability of an object to take on many forms.", "Creating a new class from an existing class.", "Putting all classes in one file."],
      answer: 0,
      explanation: "Encapsulation is the practice of keeping fields private and providing public getter and setter methods to access and modify them safely."
    },
    {
      question: "What is the default access modifier if none is specified?",
      options: ["public", "private", "protected", "package-private (default)"],
      answer: 3,
      explanation: "If you don't specify an access modifier, it defaults to package-private, meaning it's accessible only within its own package."
    },
    {
      question: "What is the purpose of the <code>this</code> keyword?",
      options: ["To refer to the current object instance.", "To create a new object.", "To call a static method.", "To refer to the parent class."],
      answer: 0,
      explanation: "The <code>this</code> keyword refers to the current object in a method or constructor."
    },
    {
      question: "What is a static variable?",
      options: ["A variable that cannot be changed.", "A variable that belongs to the class, shared by all instances.", "A variable local to a method.", "A variable that is destroyed after use."],
      answer: 1,
      explanation: "Static variables belong to the class rather than any object instance. There is only one copy of a static variable per class."
    },
    {
      question: "What is a final class?",
      options: ["The last class in a file.", "A class that cannot be subclassed (inherited from).", "A class that cannot be instantiated.", "A class with only static methods."],
      answer: 1,
      explanation: "A class declared as <code>final</code> cannot be extended by any other class (e.g., the <code>String</code> class)."
    },
    {
      question: "What is an abstract class?",
      options: ["A class that cannot be instantiated and may contain abstract methods.", "A class with no methods.", "A class that is hidden from other packages.", "A class that only contains static variables."],
      answer: 0,
      explanation: "An abstract class cannot be instantiated directly. It serves as a blueprint for other classes and can contain abstract methods (without bodies)."
    },
    {
      question: "What is a Singleton pattern?",
      options: ["A pattern that ensures a class has only one instance.", "A class with only one method.", "A class that holds a single primitive value.", "A pattern for creating arrays."],
      answer: 0,
      explanation: "The Singleton pattern restricts the instantiation of a class to one single instance and provides a global point of access to it."
    },
    {
      question: "What is the difference between a class and an object?",
      options: ["A class is a blueprint; an object is an instance of that blueprint.", "An object is a blueprint; a class is an instance.", "They are the exact same thing.", "A class is for primitives; an object is for complex types."],
      answer: 0,
      explanation: "A class is a template or blueprint from which objects are created. An object is an instance of a class."
    },
    {
      question: "What is an instance variable?",
      options: ["A variable declared inside a method.", "A variable declared in a class but outside any method, unique to each instance.", "A variable shared by all instances.", "A variable that cannot be changed."],
      answer: 1,
      explanation: "Instance variables are declared in a class but outside a method. They are specific to each object instance."
    },
    {
      question: "What is the purpose of a getter method?",
      options: ["To modify a private variable.", "To retrieve the value of a private variable.", "To delete an object.", "To create a new instance."],
      answer: 1,
      explanation: "A getter method returns the value of a private instance variable, maintaining encapsulation."
    },
    {
      question: "What is the purpose of a setter method?",
      options: ["To retrieve a private variable.", "To set or update the value of a private variable.", "To initialize the class.", "To print the object state."],
      answer: 1,
      explanation: "A setter method sets or updates the value of a private instance variable, often including validation."
    },
    {
      question: "Can a constructor be private?",
      options: ["No, it must be public.", "Yes, often used in the Singleton pattern.", "Yes, but only if the class is abstract.", "No, unless it is a static class."],
      answer: 1,
      explanation: "A private constructor prevents the class from being instantiated from outside the class, which is useful for utility classes or Singletons."
    }
  ],
  'inheritance.html': [
    {
      question: "Polymorphism allows you to treat a subclass as its parent class. Which of these is the correct 'Remote Control' analogy?",
      options: ["Animal remote = new Dog();", "Dog remote = new Animal();", "Animal remote = new Animal();", "Dog remote = new Dog();"],
      answer: 0,
      explanation: "You can use an Animal remote control to point to a Dog object in the Heap. The remote control's type (Animal) dictates what buttons you can press, but the actual object (Dog) dictates how the action is performed at runtime."
    },
    {
      question: "Which keyword is used to inherit a class in Java?",
      options: ["implements", "extends", "inherits", "super"],
      answer: 1,
      explanation: "The <code>extends</code> keyword is used to create a subclass that inherits from a superclass."
    },
    {
      question: "What is the purpose of the <code>super</code> keyword?",
      options: ["To call the constructor or methods of the parent class.", "To create a new instance of the class.", "To destroy the object.", "To make a method static."],
      answer: 0,
      explanation: "The <code>super</code> keyword refers to the superclass (parent) object and is used to call parent constructors and methods."
    },
    {
      question: "What is the Diamond Problem in inheritance?",
      options: ["An ambiguity that arises when a class inherits from two classes that have a common parent.", "A memory leak issue.", "A problem with loading classes.", "A security vulnerability."],
      answer: 0,
      explanation: "The Diamond Problem is a complexity that arises with multiple inheritance when two classes B and C inherit from A, and class D inherits from both B and C. If there is a method in A that B and C have overridden, which one does D inherit? Java avoids this by not allowing multiple inheritance of classes."
    },
    {
      question: "Can a subclass access private members of its superclass?",
      options: ["Yes, always.", "No, private members are only accessible within the class they are declared.", "Yes, if they are in the same package.", "No, unless you use the super keyword."],
      answer: 1,
      explanation: "Private members are strictly private to the class. Subclasses cannot access them directly, but they can access them through public/protected getters and setters."
    },
    {
      question: "What is the difference between overriding and hiding a method?",
      options: ["Overriding is for instance methods; hiding is for static methods.", "Hiding is for instance methods; overriding is for static methods.", "They are the same thing.", "Overriding is for public methods; hiding is for private methods."],
      answer: 0,
      explanation: "If a subclass defines a static method with the same signature as a static method in the superclass, the method in the subclass hides the one in the superclass."
    },
    {
      question: "What does the <code>@Override</code> annotation do?",
      options: ["It forces the compiler to check that the method is actually overriding a superclass method.", "It makes the method faster.", "It allows the method to be called by the parent class.", "It is just a comment."],
      answer: 0,
      explanation: "The <code>@Override</code> annotation informs the compiler that the element is meant to override an element declared in a superclass. It helps catch errors."
    },
    {
      question: "Can you prevent a method from being overridden?",
      options: ["No, all methods can be overridden.", "Yes, by declaring it as final.", "Yes, by making it public.", "No, unless the class is abstract."],
      answer: 1,
      explanation: "A method declared as <code>final</code> cannot be overridden by subclasses."
    },
    {
      question: "What is the result of casting a superclass reference to a subclass type?",
      options: ["It works automatically.", "It requires an explicit cast and may throw a ClassCastException.", "It is not allowed in Java.", "It destroys the object."],
      answer: 1,
      explanation: "Casting a superclass reference to a subclass type is called downcasting. It requires an explicit cast operator. If the object being referenced is not actually an instance of the subclass, a <code>ClassCastException</code> is thrown at runtime."
    },
    {
      question: "Which class is the ultimate ancestor of all classes in Java?",
      options: ["Main", "Object", "Root", "Class"],
      answer: 1,
      explanation: "The <code>java.lang.Object</code> class is the root of the class hierarchy. Every class has Object as a superclass."
    },
    {
      question: "What is the purpose of the <code>protected</code> access modifier?",
      options: ["Visible only within the same class.", "Visible to the class, its subclasses, and all classes in the same package.", "Visible to all classes.", "Visible only to subclasses in different packages."],
      answer: 1,
      explanation: "The <code>protected</code> modifier specifies that the member can only be accessed within its own package and by a subclass of its class in another package."
    },
    {
      question: "Can an abstract class extend a concrete (non-abstract) class?",
      options: ["No, abstract classes can only extend other abstract classes.", "Yes, abstract classes can extend any non-final class.", "No, concrete classes must be at the top of the hierarchy.", "Yes, but only if they don't add new methods."],
      answer: 1,
      explanation: "An abstract class can extend a concrete class, just as any other class can. This is often done to provide a more specific, but still incomplete, blueprint."
    },
    {
      question: "What is the concept of 'IS-A' relationship in Java?",
      options: ["Composition.", "Inheritance.", "Aggregation.", "Association."],
      answer: 1,
      explanation: "In Java, an IS-A relationship is based on Inheritance (using extends or implements). For example, a Dog IS-A Animal."
    }
  ],
  'interfaces.html': [
    {
      question: "What does an Interface primarily act as in Java?",
      options: ["A physical object.", "A contract of guaranteed behaviors.", "A database schema.", "A garbage collector."],
      answer: 1,
      explanation: "An Interface acts like a USB port. It defines a strict contract of methods that a class MUST implement. If a class claims to implement the interface, it promises to fulfill that contract."
    },
    {
      question: "Can an interface contain method implementations?",
      options: ["No, never.", "Yes, but only default and static methods (since Java 8).", "Yes, all methods can have bodies.", "No, unless they are private."],
      answer: 1,
      explanation: "Since Java 8, interfaces can contain <code>default</code> and <code>static</code> methods with bodies, allowing you to add new methods to interfaces without breaking existing implementations."
    },
    {
      question: "Which keyword is used by a class to use an interface?",
      options: ["extends", "implements", "uses", "includes"],
      answer: 1,
      explanation: "The <code>implements</code> keyword is used by a class to implement an interface."
    },
    {
      question: "Can an interface extend another interface?",
      options: ["No, interfaces cannot extend anything.", "Yes, using the extends keyword.", "Yes, using the implements keyword.", "No, interfaces can only be implemented."],
      answer: 1,
      explanation: "An interface can extend another interface, and unlike classes, an interface can extend multiple interfaces."
    },
    {
      question: "What is a functional interface?",
      options: ["An interface with only one abstract method.", "An interface with only default methods.", "An interface that cannot be implemented.", "An interface used for math operations."],
      answer: 0,
      explanation: "A functional interface is an interface that contains exactly one abstract method. They can have any number of default or static methods."
    },
    {
      question: "What does the <code>@FunctionalInterface</code> annotation do?",
      options: ["It makes the interface functional.", "It tells the compiler to verify that the interface has exactly one abstract method.", "It is just a comment.", "It makes the interface faster."],
      answer: 1,
      explanation: "The annotation is not required, but it tells the compiler to generate an error if the interface does not meet the requirements of a functional interface."
    },
    {
      question: "Can an interface have variables?",
      options: ["No, only methods.", "Yes, but they are implicitly public, static, and final.", "Yes, normal instance variables are allowed.", "No, unless they are private."],
      answer: 1,
      explanation: "All variables declared in an interface are implicitly <code>public static final</code>. They are constants."
    },
    {
      question: "What are private methods in interfaces used for (Java 9+)?",
      options: ["To hide data from implementing classes.", "To share code between default methods without exposing it publicly.", "They are not allowed.", "To make the interface abstract."],
      answer: 1,
      explanation: "Java 9 introduced private methods in interfaces to allow sharing code between default methods without making that code public."
    },
    {
      question: "Can an interface have a constructor?",
      options: ["Yes, just like a class.", "No, interfaces cannot be instantiated directly and cannot have constructors.", "Yes, but only a private one.", "No, unless it has default methods."],
      answer: 1,
      explanation: "Interfaces cannot have constructors because they cannot be instantiated directly. They are meant to be implemented by classes."
    },
    {
      question: "What is a marker interface?",
      options: ["An interface with only one method.", "An interface with no methods or fields, used to tag a class (e.g., Serializable).", "An interface that marks methods as deprecated.", "An interface used for drawing."],
      answer: 1,
      explanation: "A marker interface has no methods or fields. It provides run-time type information about an object, so the compiler and JVM have additional information about the object."
    },
    {
      question: "Can a class implement multiple interfaces?",
      options: ["No, Java only supports single inheritance.", "Yes, a class can implement any number of interfaces.", "Yes, but only up to two.", "No, unless they are functional interfaces."],
      answer: 1,
      explanation: "While a class can only extend one superclass, it can implement any number of interfaces, separated by commas."
    },
    {
      question: "What happens if a class implements an interface but does not implement all its abstract methods?",
      options: ["It fails to compile unless the class is declared as abstract.", "It compiles fine, and missing methods return null.", "It throws a runtime exception.", "The compiler generates empty implementations automatically."],
      answer: 0,
      explanation: "If a class implements an interface, it must either provide implementations for all of the interface's abstract methods or be declared <code>abstract</code>."
    },
    {
      question: "What is the difference between an abstract class and an interface?",
      options: ["Abstract classes can have state (instance variables); interfaces cannot (only constants).", "Interfaces can have state; abstract classes cannot.", "They are the same since Java 8.", "Abstract classes are faster than interfaces."],
      answer: 0,
      explanation: "Abstract classes can have instance fields and constructors. Interfaces cannot have instance fields (only public static final constants) and cannot have constructors."
    },
    {
      question: "Can an interface be declared as final?",
      options: ["Yes, to prevent it from being implemented.", "No, it would be useless because it must be implemented.", "Yes, if it only has static methods.", "No, unless it is a functional interface."],
      answer: 1,
      explanation: "An interface cannot be declared as <code>final</code> because it is incomplete by nature and must be implemented by some class."
    },
    {
      question: "What is the purpose of the <code>default</code> keyword in interfaces?",
      options: ["To specify the default access level.", "To provide a default implementation for a method.", "To make a method static.", "To prevent overriding."],
      answer: 1,
      explanation: "The <code>default</code> keyword allows you to add non-abstract methods to interfaces."
    },
    {
      question: "Can a default method in an interface call an abstract method in the same interface?",
      options: ["No, because the abstract method has no body.", "Yes, because the implementing class will provide the body.", "Yes, but only if they are both public.", "No, it causes a compiler error."],
      answer: 1,
      explanation: "A default method can call any other method in the interface, including abstract methods. At runtime, the implementation provided by the concrete class will be executed."
    },
    {
      question: "How do you call a default method of an interface from a class that implements it and overrides that method?",
      options: ["super.method()", "InterfaceName.super.method()", "this.method()", "InterfaceName.method()"],
      answer: 1,
      explanation: "To call the interface's default implementation from the overriding class, use <code>InterfaceName.super.methodName()</code>."
    },
    {
      question: "What is the result of a class implementing two interfaces that have the exact same default method?",
      options: ["It compiles fine and uses the first one.", "It fails to compile due to ambiguity unless the class overrides the method.", "It throws a runtime exception.", "The compiler merges them."],
      answer: 1,
      explanation: "If a class implements multiple interfaces that provide default methods with the same signature, the class must override the method to resolve the conflict, or a compiler error occurs."
    }
  ],
  'enums-records.html': [
    {
      question: "What is the primary benefit of a Java Record?",
      options: ["It automatically creates mutable state.", "It eliminates boilerplate code (getters, equals, hashCode) for immutable data carriers.", "It allows multiple inheritance.", "It extends the String class."],
      answer: 1,
      explanation: "Records were introduced to eliminate the massive amount of boilerplate code required to create simple, immutable data-carrier objects (like DTOs)."
    },
    {
      question: "What is an Enum in Java?",
      options: ["A special class that represents a group of constants.", "A mutable data structure.", "A replacement for arrays.", "A thread-safe collection."],
      answer: 0,
      explanation: "An enum (enumeration) is a special data type that enables a variable to be a set of predefined constants (e.g., DAYS of the week)."
    },
    {
      question: "Are Java Records mutable?",
      options: ["Yes, always.", "No, they are shallowly immutable by default.", "Yes, if you use the mutable keyword.", "No, they are deeply immutable."],
      answer: 1,
      explanation: "Java Records are shallowly immutable. All fields are final. However, if a field is a reference to a mutable object (like a List), the contents of that object can still be changed."
    },
    {
      question: "Can you add methods to a Java Enum?",
      options: ["No, enums can only contain constants.", "Yes, enums can have fields, constructors, and methods.", "Yes, but only static methods.", "No, enums are not classes."],
      answer: 1,
      explanation: "In Java, enums are specialized classes. They can have methods, fields, and constructors (which are always private)."
    },
    {
      question: "How do you get an array of all constants in an Enum?",
      options: ["MyEnum.getConstants()", "MyEnum.values()", "MyEnum.all()", "new MyEnum[0]"],
      answer: 1,
      explanation: "The compiler automatically adds a static <code>values()</code> method to every enum, returning an array containing all its values."
    },
    {
      question: "Can an Enum extend another class?",
      options: ["No, enums implicitly extend java.lang.Enum and Java doesn't support multiple inheritance.", "Yes, always.", "Yes, but only abstract classes.", "No, enums cannot be extended."],
      answer: 0,
      explanation: "Because all enums implicitly extend <code>java.lang.Enum</code>, they cannot extend any other class. However, they can implement interfaces."
    },
    {
      question: "What is the purpose of the canonical constructor in a Record?",
      options: ["To initialize all fields of the record.", "To destroy the record.", "To copy another record.", "It is not needed."],
      answer: 0,
      explanation: "The canonical constructor is the one that has parameters matching the record's components. The compiler provides it automatically, but you can override it to add validation."
    },
    {
      question: "Can a Record extend another class?",
      options: ["No, records implicitly extend java.lang.Record.", "Yes, always.", "Yes, if the superclass is abstract.", "No, records cannot have parents."],
      answer: 0,
      explanation: "All records implicitly extend <code>java.lang.Record</code>, so they cannot extend any other class. They can, however, implement interfaces."
    },
    {
      question: "Can an Enum implement an interface?",
      options: ["No, enums cannot inherit or implement anything.", "Yes, enums can implement interfaces.", "Yes, but only functional interfaces.", "No, unless it has methods."],
      answer: 1,
      explanation: "While enums cannot extend classes, they can implement any number of interfaces."
    },
    {
      question: "What is the result of using <code>==</code> to compare two Enum constants?",
      options: ["It compares their values.", "It compares their memory addresses and is safe to use.", "It throws an exception.", "It is not allowed."],
      answer: 1,
      explanation: "Enum constants are Singletons. Therefore, <code>==</code> can be used safely to compare them for identity."
    },
    {
      question: "What does the <code>ordinal()</code> method do in an Enum?",
      options: ["Returns the name of the constant.", "Returns the position of the constant in the enum declaration (starting at 0).", "Returns the hash code.", "Returns the string representation."],
      answer: 1,
      explanation: "The <code>ordinal()</code> method returns the ordinal of this enumeration constant (its position in its enum declaration, where the initial constant is assigned an ordinal of zero)."
    },
    {
      question: "Can you create an instance of an Enum using the <code>new</code> keyword?",
      options: ["Yes, just like any class.", "No, enum constructors are private and cannot be called with new.", "Yes, if it has a constructor.", "No, unless it is a static enum."],
      answer: 1,
      explanation: "You cannot instantiate an enum using <code>new</code>. The constants defined in the enum are the only instances that can exist."
    },
    {
      question: "What is a compact constructor in a Record?",
      options: ["A constructor that takes no arguments.", "A constructor without a parameter list, used for validation or normalization.", "A constructor that is automatically generated.", "A constructor that cannot be modified."],
      answer: 1,
      explanation: "A compact constructor has no parameter list (not even empty parentheses). It is used to validate or normalize arguments before they are assigned to the fields."
    },
    {
      question: "Are Record fields final by default?",
      options: ["Yes, records are designed to be immutable.", "No, they can be changed.", "Yes, but only if you use the final keyword.", "No, unless you use a setter."],
      answer: 0,
      explanation: "All fields in a Record are implicitly <code>private final</code>. There are no setter methods generated."
    },
    {
      question: "Can you declare a Record inside another class?",
      options: ["No, records must be top-level classes.", "Yes, records can be nested.", "Yes, but only in abstract classes.", "No, unless they are static."],
      answer: 1,
      explanation: "Records can be declared as nested types. They are implicitly static."
    },
    {
      question: "Can a Record have static fields?",
      options: ["No, only instance fields listed in the header.", "Yes, records can have static fields and methods.", "Yes, but only constants.", "No, records cannot have any static members."],
      answer: 1,
      explanation: "While instance fields must be listed in the record header, records can have static fields, static methods, and static initializers."
    },
    {
      question: "What is the difference between a Record and a standard Class?",
      options: ["Records are strictly for data; classes are for behavior.", "Records provide automatic implementations of equals(), hashCode(), and toString().", "Classes are immutable; records are mutable.", "There is no difference."],
      answer: 1,
      explanation: "The main difference is that Records automatically provide implementations for constructor, accessors, <code>equals()</code>, <code>hashCode()</code>, and <code>toString()</code> based on the record components."
    },
    {
      question: "Can you override the accessor methods in a Record?",
      options: ["No, they are final.", "Yes, you can provide your own implementation for any accessor.", "Yes, but they must return the same type.", "No, unless you use a specific annotation."],
      answer: 1,
      explanation: "You can override any of the accessor methods (getters) generated by the record if you need to return a copy of a mutable field or perform some operation."
    }
  ],
  'lambdas.html': [
    {
      question: "A Lambda expression can ONLY be used with an interface that has exactly ONE abstract method. What is this called?",
      options: ["A Polymorphic Interface", "A Functional Interface (SAM)", "A Default Interface", "A Generic Interface"],
      answer: 1,
      explanation: "A SAM (Single Abstract Method) or Functional Interface is required because the compiler needs to know exactly which single method you are trying to implement when you provide a lambda."
    },
    {
      question: "Which of the following is a built-in functional interface in Java?",
      options: ["Runnable", "Callable", "Comparator", "All of the above"],
      answer: 3,
      explanation: "All of these are functional interfaces. Java also provides standard ones in <code>java.util.function</code> like Predicate, Consumer, and Function."
    },
    {
      question: "What is the syntax for a method reference in Java?",
      options: ["Object.method()", "Object::method", "Object->method", "Object.method"],
      answer: 1,
      explanation: "Method references use the <code>::</code> syntax. They are shorthand for lambda expressions that only call an existing method."
    },
    {
      question: "What is the return type of a Lambda expression?",
      options: ["It depends on the functional interface it is assigned to.", "Always Object.", "Always void.", "It doesn't have a type."],
      answer: 0,
      explanation: "Lambda expressions do not have an inherent type. Their type is inferred from the target type (the functional interface) they are assigned to."
    },
    {
      question: "What is the purpose of the <code>Predicate<T></code> functional interface?",
      options: ["To perform an operation on an object and return a result.", "To take an argument and return a boolean.", "To supply an object without taking arguments.", "To consume an object without returning anything."],
      answer: 1,
      explanation: "A <code>Predicate<T></code> takes an argument of type T and returns a boolean value. It's used for filtering or condition checking."
    },
    {
      question: "What is the purpose of the <code>Consumer<T></code> functional interface?",
      options: ["To take an argument and return a boolean.", "To take an argument and return nothing (void).", "To supply an object.", "To transform an object."],
      answer: 1,
      explanation: "A <code>Consumer<T></code> represents an operation that accepts a single input argument and returns no result (e.g., printing something)."
    },
    {
      question: "What is the purpose of the <code>Supplier<T></code> functional interface?",
      options: ["To take an argument and return a result.", "To take no arguments and return a result.", "To consume an object.", "To check a condition."],
      answer: 1,
      explanation: "A <code>Supplier<T></code> takes no arguments and returns a result of type T. It's used for lazy generation of values."
    },
    {
      question: "Can a lambda expression access non-final local variables?",
      options: ["Yes, always.", "No, they must be final or effectively final.", "Yes, but only if they are static.", "No, lambda expressions cannot access local variables."],
      answer: 1,
      explanation: "Variables accessed from a lambda expression must be final or effectively final (not modified after initialization)."
    },
    {
      question: "What is the purpose of the <code>Function<T, R></code> functional interface?",
      options: ["To take an argument of type T and return a result of type R.", "To take no arguments and return a result.", "To consume an object.", "To check a condition."],
      answer: 0,
      explanation: "A <code>Function<T, R></code> represents a function that accepts one argument of type T and produces a result of type R."
    },
    {
      question: "What is the purpose of the <code>BiFunction<T, U, R></code> functional interface?",
      options: ["To take two arguments and return a result.", "To take one argument and return a result.", "To take no arguments.", "To consume two objects."],
      answer: 0,
      explanation: "A <code>BiFunction<T, U, R></code> represents a function that accepts two arguments (of types T and U) and produces a result of type R."
    },
    {
      question: "What is the result of applying a lambda expression to a collection using <code>forEach()</code>?",
      options: ["It modifies the collection.", "It performs an action for each element.", "It filters the collection.", "It sorts the collection."],
      answer: 1,
      explanation: "The <code>forEach()</code> method performs the given action for each element of the Iterable until all elements have been processed or the action throws an exception."
    },
    {
      question: "Can a lambda expression have multiple parameters?",
      options: ["No, only one.", "Yes, enclosed in parentheses.", "Yes, separated by commas without parentheses.", "No, unless they are all of the same type."],
      answer: 1,
      explanation: "A lambda expression can have zero or more parameters. If there are multiple parameters, they must be enclosed in parentheses."
    },
    {
      question: "Can a lambda expression have multiple lines of code?",
      options: ["No, it must be a single expression.", "Yes, enclosed in curly braces with explicit return statements if needed.", "Yes, but only if it doesn't return anything.", "No, unless it is a static lambda."],
      answer: 1,
      explanation: "If the lambda body contains more than one statement, it must be enclosed in curly braces <code>{}</code>, and you must use the <code>return</code> keyword if it returns a value."
    },
    {
      question: "What is the difference between a lambda expression and an anonymous class?",
      options: ["Lambda expressions are more concise and don't create a separate class file.", "Anonymous classes are faster.", "Lambda expressions can only implement interfaces with multiple methods.", "There is no difference."],
      answer: 0,
      explanation: "Lambda expressions are more concise than anonymous classes and do not introduce a new scope (they share the scope of the enclosing environment), nor do they create a separate <code>.class</code> file in most cases."
    },
    {
      question: "Which package contains the standard functional interfaces in Java?",
      options: ["java.lang", "java.util", "java.util.function", "java.io"],
      answer: 2,
      explanation: "The <code>java.util.function</code> package contains a set of standard functional interfaces for use with lambda expressions and method references."
    },
    {
      question: "What is the purpose of the <code>UnaryOperator<T></code> interface?",
      options: ["To perform an operation on a single operand that produces a result of the same type as its operand.", "To take two operands.", "To produce a boolean result.", "To supply a value."],
      answer: 0,
      explanation: "<code>UnaryOperator<T></code> extends <code>Function<T, T></code> and represents an operation on a single operand that produces a result of the same type as its operand."
    },
    {
      question: "What is the purpose of the <code>BinaryOperator<T></code> interface?",
      options: ["To perform an operation on two operands and produce a result of the same type as the operands.", "To take one operand.", "To produce a boolean result.", "To consume a value."],
      answer: 0,
      explanation: "<code>BinaryOperator<T></code> extends <code>BiFunction<T, T, T></code> and represents an operation upon two operands of the same type, producing a result of the same type as the operands."
    },
    {
      question: "Can you use <code>this</code> inside a lambda expression?",
      options: ["Yes, it refers to the lambda instance.", "Yes, it refers to the enclosing class instance.", "No, it causes a compiler error.", "No, unless the lambda is in a static method."],
      answer: 1,
      explanation: "Inside a lambda expression, <code>this</code> refers to the enclosing class instance, not the lambda itself (unlike anonymous classes)."
    }
  ],
  'streams.html': [
    {
      question: "Why do we call Stream operations 'Lazy' (The Plumbing Analogy)?",
      options: ["They execute very slowly.", "They process data immediately as it's added.", "They only execute when a Terminal Operation (the faucet) is invoked.", "They cache data in memory forever."],
      answer: 2,
      explanation: "Intermediate operations (like filter and map) just build the plumbing. No water (data) actually flows through the pipes until you attach a Terminal Operation (like collect or forEach)."
    },
    {
      question: "Which of the following is a Terminal Operation in Streams?",
      options: ["filter", "map", "sorted", "collect"],
      answer: 3,
      explanation: "<code>collect</code> is a terminal operation that triggers the processing of the stream and produces a result (like a List or a Map)."
    },
    {
      question: "Can a Stream be reused after a terminal operation is called?",
      options: ["Yes, as many times as you want.", "No, it is closed and cannot be reused.", "Yes, if you call reset().", "No, unless it is a Parallel Stream."],
      answer: 1,
      explanation: "A stream is consumed once a terminal operation is called. If you try to reuse it, you will get an <code>IllegalStateException</code>."
    },
    {
      question: "What is the purpose of the <code>map()</code> operation in Streams?",
      options: ["To filter elements based on a condition.", "To transform each element into another object.", "To sort the elements.", "To combine all elements into one."],
      answer: 1,
      explanation: "The <code>map()</code> operation returns a stream consisting of the results of applying the given function to the elements of this stream."
    },
    {
      question: "What does the <code>parallelStream()</code> method do?",
      options: ["Creates a stream that executes in a single thread.", "Creates a stream that can execute operations in parallel using multiple threads.", "Creates a stream that is synchronized.", "Creates a stream that cannot be modified."],
      answer: 1,
      explanation: "<code>parallelStream()</code> returns a possibly parallel stream with the collection as its source, utilizing the ForkJoinPool for parallel processing."
    },
    {
      question: "What is the purpose of the <code>reduce()</code> operation?",
      options: ["To filter elements.", "To combine the elements of a stream into a single summary result.", "To sort elements.", "To limit the number of elements."],
      answer: 1,
      explanation: "The <code>reduce()</code> operation performs a reduction on the elements of the stream, using an associative accumulation function."
    },
    {
      question: "Which operation is used to remove duplicates from a stream?",
      options: ["distinct()", "filter()", "unique()", "dedupe()"],
      answer: 0,
      explanation: "The <code>distinct()</code> operation returns a stream consisting of the distinct elements (according to Object.equals(Object))."
    },
    {
      question: "What does the <code>flatMap()</code> operation do?",
      options: ["Flattens a stream of streams into a single stream.", "Transforms each element and keeps the structure.", "Filters out null values.", "Sorts the stream in reverse order."],
      answer: 0,
      explanation: "<code>flatMap()</code> is used when you have a stream of collections and you want to process the individual elements of those collections in a single stream."
    },
    {
      question: "What is the difference between <code>map()</code> and <code>flatMap()</code>?",
      options: ["map() returns a single value; flatMap() returns a stream.", "map() transforms elements 1-to-1; flatMap() transforms elements 1-to-many and flattens the result.", "flatMap() is faster than map().", "There is no difference."],
      answer: 1,
      explanation: "<code>map()</code> takes a function that returns a value and applies it to each element. <code>flatMap()</code> takes a function that returns a stream for each element, and then flattens all those streams into a single stream."
    },
    {
      question: "Which operation is used to sort the elements of a stream?",
      options: ["sort()", "sorted()", "orderBy()", "arrange()"],
      answer: 1,
      explanation: "The <code>sorted()</code> operation returns a stream consisting of the elements of this stream, sorted according to natural order or a provided Comparator."
    },
    {
      question: "What does the <code>peek()</code> operation do?",
      options: ["Modifies the elements of the stream.", "Performs an action on each element without affecting the stream (mainly for debugging).", "Filters out elements.", "Termines the stream."],
      answer: 1,
      explanation: "<code>peek()</code> exists mainly to support debugging, where you want to see the elements as they flow past a certain point in a pipeline."
    },
    {
      question: "What is the result of calling <code>findFirst()</code> on an empty stream?",
      options: ["It returns null.", "It returns an empty Optional.", "It throws an exception.", "It waits for elements to arrive."],
      answer: 1,
      explanation: "<code>findFirst()</code> returns an <code>Optional</code> describing the first element of this stream, or an empty <code>Optional</code> if the stream is empty."
    },
    {
      question: "What is the purpose of the <code>anyMatch()</code> operation?",
      options: ["Returns true if ALL elements match the predicate.", "Returns true if ANY element matches the predicate.", "Returns true if NO elements match the predicate.", "Filters the stream."],
      answer: 1,
      explanation: "<code>anyMatch()</code> returns true if any elements of the stream match the provided predicate. It is a short-circuiting terminal operation."
    },
    {
      question: "What is the purpose of the <code>allMatch()</code> operation?",
      options: ["Returns true if ALL elements match the predicate.", "Returns true if ANY element matches the predicate.", "Returns true if NO elements match the predicate.", "Filters the stream."],
      answer: 0,
      explanation: "<code>allMatch()</code> returns true if all elements of the stream match the provided predicate. It is a short-circuiting terminal operation."
    },
    {
      question: "What is the purpose of the <code>noneMatch()</code> operation?",
      options: ["Returns true if ALL elements match the predicate.", "Returns true if ANY element matches the predicate.", "Returns true if NO elements match the predicate.", "Filters the stream."],
      answer: 2,
      explanation: "<code>noneMatch()</code> returns true if either no elements of the stream match the provided predicate or the stream is empty. It is a short-circuiting terminal operation."
    },
    {
      question: "How do you convert a Stream of Strings to a single String separated by commas?",
      options: ["stream.join(\",\")", "stream.collect(Collectors.joining(\",\"))", "stream.toString()", "stream.reduce(\",\")"],
      answer: 1,
      explanation: "The <code>Collectors.joining(delimiter)</code> collector concatenates the input elements, separated by the specified delimiter, in encounter order."
    },
    {
      question: "What is short-circuiting in Stream operations?",
      options: ["Operations that stop processing as soon as the result is determined (e.g., limit, anyMatch).", "Operations that cause a crash.", "Operations that run in parallel.", "Operations that skip elements."],
      answer: 0,
      explanation: "An intermediate operation is short-circuiting if, when presented with infinite input, it may produce a finite stream as a result. A terminal operation is short-circuiting if, when presented with infinite input, it may terminate in finite time."
    },
    {
      question: "What is the difference between <code>Stream.of()</code> and <code>Arrays.stream()</code>?",
      options: ["Stream.of() is only for objects; Arrays.stream() supports primitive arrays efficiently.", "They are exactly the same.", "Stream.of() is faster.", "Arrays.stream() is only for multi-dimensional arrays."],
      answer: 0,
      explanation: "<code>Arrays.stream()</code> has overloaded versions for primitive arrays (int[], long[], double[]) that return primitive streams (IntStream, etc.), avoiding boxing overhead. <code>Stream.of()</code> on a primitive array would treat the array as a single object."
    }
  ],
  'collections-deep.html': [
    {
      question: "What is the main difference between an ArrayList and a LinkedList?",
      options: ["ArrayLists cannot hold null values.", "LinkedLists are stored in contiguous memory, while ArrayLists are scattered.", "ArrayLists are fast for random access, while LinkedLists are fast for inserting/deleting in the middle.", "LinkedLists are thread-safe."],
      answer: 2,
      explanation: "ArrayList uses contiguous memory, so finding element #50 is instant. LinkedList uses scattered nodes, so you have to traverse 50 links to find it, but inserting a new node doesn't require shifting arrays."
    },
    {
      question: "Which Collection guarantees that elements are unique?",
      options: ["List", "Set", "Map", "Queue"],
      answer: 1,
      explanation: "A <code>Set</code> is a collection that contains no duplicate elements."
    },
    {
      question: "Which Map implementation maintains insertion order?",
      options: ["HashMap", "TreeMap", "LinkedHashMap", "ConcurrentHashMap"],
      answer: 2,
      explanation: "<code>LinkedHashMap</code> maintains a doubly-linked list running through all of its entries, which defines the iteration ordering (typically the order in which keys were inserted)."
    },
    {
      question: "What is the purpose of the <code>Iterator</code> interface?",
      options: ["To iterate over a collection.", "To sort a collection.", "To filter a collection.", "To copy a collection."],
      answer: 0,
      explanation: "An <code>Iterator</code> is an object that can be used to loop through collections, like ArrayList and HashSet."
    },
    {
      question: "What is the difference between <code>fail-fast</code> and <code>fail-safe</code> iterators?",
      options: ["Fail-fast throws ConcurrentModificationException if collection is modified during iteration; fail-safe doesn't.", "Fail-safe throws exception; fail-fast doesn't.", "They are the same.", "Fail-fast is for maps; fail-safe is for lists."],
      answer: 0,
      explanation: "Fail-fast iterators (like those of HashMap, ArrayList) throw <code>ConcurrentModificationException</code> if the collection is modified while iterating. Fail-safe iterators (like those of ConcurrentHashMap) work on a copy."
    },
    {
      question: "Which collection should you use for a FIFO (First-In-First-Out) queue?",
      options: ["Stack", "Queue (e.g., LinkedList)", "Set", "Map"],
      answer: 1,
      explanation: "A <code>Queue</code> is designed for holding elements prior to processing. Besides basic Collection operations, queues provide additional insertion, extraction, and inspection operations."
    },
    {
      question: "What is the time complexity of getting an element from a HashMap by key (on average)?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      answer: 0,
      explanation: "HashMap provides constant time performance O(1) for the basic operations (get and put), assuming the hash function disperses the elements properly among the buckets."
    },
    {
      question: "Which set implementation keeps elements in sorted order?",
      options: ["HashSet", "LinkedHashSet", "TreeSet", "EnumSet"],
      answer: 2,
      explanation: "<code>TreeSet</code> uses a tree structure (Red-Black tree) to store elements in a sorted order."
    },
    {
      question: "What is the difference between <code>Collection</code> and <code>Collections</code>?",
      options: ["Collection is an interface; Collections is a utility class.", "Collections is an interface; Collection is a utility class.", "They are the same.", "Collection is for lists; Collections is for sets."],
      answer: 0,
      explanation: "<code>Collection</code> is the root interface in the collection hierarchy. <code>Collections</code> is a utility class consisting exclusively of static methods that operate on or return collections."
    },
    {
      question: "Which collection should be used when elements need to be unique and sorted?",
      options: ["HashSet", "TreeSet", "LinkedHashSet", "ArrayList"],
      answer: 1,
      explanation: "<code>TreeSet</code> guarantees that the elements are unique and sorted according to their natural order or a custom Comparator."
    },
    {
      question: "What is the default initial capacity of an ArrayList in Java?",
      options: ["0", "10", "16", "20"],
      answer: 1,
      explanation: "The default initial capacity of an empty ArrayList is 10. It grows automatically as elements are added."
    },
    {
      question: "Which of the following is thread-safe?",
      options: ["ArrayList", "HashMap", "Vector", "HashSet"],
      answer: 2,
      explanation: "<code>Vector</code> is synchronized, making it thread-safe. However, it is considered legacy and <code>ArrayList</code> is preferred for single-threaded use."
    },
    {
      question: "What is the purpose of the <code>Comparable</code> interface?",
      options: ["To sort objects based on a single, natural order.", "To sort objects based on multiple criteria.", "To compare two different objects.", "To filter a collection."],
      answer: 0,
      explanation: "<code>Comparable</code> is used to define the natural ordering of objects. It has a single method: <code>compareTo()</code>."
    },
    {
      question: "What is the purpose of the <code>Comparator</code> interface?",
      options: ["To define a custom ordering of objects.", "To define the natural ordering.", "To compare an object with itself.", "To check for equality."],
      answer: 0,
      explanation: "<code>Comparator</code> is used to define custom ordering, separate from the class definition. It has a method: <code>compare()</code>."
    },
    {
      question: "What happens when you add a duplicate element to a HashSet?",
      options: ["It throws an exception.", "It ignores the duplicate and returns false.", "It replaces the existing element.", "It adds it anyway."],
      answer: 1,
      explanation: "HashSet does not allow duplicates. If you try to add an element that is already present, the <code>add()</code> method returns false and the set is unchanged."
    },
    {
      question: "Which map implementation allows null keys and null values?",
      options: ["HashMap", "Hashtable", "TreeMap", "ConcurrentHashMap"],
      answer: 0,
      explanation: "<code>HashMap</code> allows one null key and multiple null values. <code>Hashtable</code> and <code>ConcurrentHashMap</code> do not allow nulls."
    },
    {
      question: "What is the load factor in a HashMap?",
      options: ["The measure of how full the hash table is allowed to get before its capacity is automatically increased.", "The number of elements in the map.", "The size of the array.", "The hash code algorithm."],
      answer: 0,
      explanation: "The load factor is a measure that decides when to increase the capacity of the HashMap. The default load factor is 0.75."
    },
    {
      question: "How do you synchronize a non-thread-safe collection?",
      options: ["Using Collections.synchronizedList/Set/Map", "Using the sync keyword", "It is not possible", "By extending the class"],
      answer: 0,
      explanation: "The <code>Collections</code> class provides methods like <code>synchronizedList()</code>, <code>synchronizedSet()</code>, and <code>synchronizedMap()</code> to wrap non-thread-safe collections."
    }
  ],
  'exceptions-io.html': [
    {
      question: "What is the purpose of the 'finally' block in an Exception sequence?",
      options: ["It catches only Checked Exceptions.", "It acts as a clean-up crew, guaranteed to run whether an exception occurred or not.", "It replaces the try block if an error occurs.", "It allows you to throw a new exception."],
      answer: 1,
      explanation: "The finally block always runs. It is historically used to close resources like files or database connections so they don't leak memory, even if the program crashed."
    },
    {
      question: "What is a Checked Exception?",
      options: ["An exception that is checked at runtime.", "An exception that must be either caught or declared in the method signature.", "An exception that extends RuntimeException.", "An exception that cannot be handled."],
      answer: 1,
      explanation: "Checked exceptions are checked at compile-time. The compiler forces you to handle them using try-catch or declare them with `throws`."
    },
    {
      question: "Which block is used to handle multiple exceptions in a single catch block (Java 7+)?",
      options: ["catch (Exception1, Exception2 e)", "catch (Exception1 | Exception2 e)", "catch (Exception1 & Exception2 e)", "catch (Exception1 || Exception2 e)"],
      answer: 1,
      explanation: "Since Java 7, you can catch multiple exception types in a single catch block using the pipe <code>|</code> symbol."
    },
    {
      question: "What is the purpose of the <code>try-with-resources</code> statement?",
      options: ["To try multiple blocks of code.", "To automatically close resources that implement AutoCloseable.", "To catch all exceptions automatically.", "To make code run faster."],
      answer: 1,
      explanation: "Try-with-resources ensures that each resource is closed at the end of the statement, avoiding resource leaks."
    },
    {
      question: "What is an Unchecked Exception?",
      options: ["An exception that is not checked at compile-time (extends RuntimeException).", "An exception that must be caught.", "An error that cannot be recovered from.", "An exception that is checked by the JVM only."],
      answer: 0,
      explanation: "Unchecked exceptions are those that extend <code>RuntimeException</code>. The compiler does not force you to handle them."
    },
    {
      question: "Which class is the superclass of all errors and exceptions in Java?",
      options: ["Exception", "Error", "Throwable", "Object"],
      answer: 2,
      explanation: "<code>Throwable</code> is the superclass of all errors and exceptions in Java."
    },
    {
      question: "What is the difference between <code>throw</code> and <code>throws</code>?",
      options: ["throw is used to declare an exception; throws is used to throw one.", "throw is used to throw an exception; throws is used to declare that a method might throw one.", "They are the same.", "throw is for checked exceptions; throws is for unchecked."],
      answer: 1,
      explanation: "<code>throw</code> is used to explicitly throw an exception from a method or block of code. <code>throws</code> is used in the method signature to declare that the method may throw certain exceptions."
    },
    {
      question: "Can you create your own custom exception class?",
      options: ["No, only built-in exceptions are allowed.", "Yes, by extending Exception or RuntimeException.", "Yes, but only if you use the custom keyword.", "No, unless it is a checked exception."],
      answer: 1,
      explanation: "You can create custom exceptions by extending the <code>Exception</code> class (for checked exceptions) or <code>RuntimeException</code> (for unchecked exceptions)."
    },
    {
      question: "What is the difference between an Error and an Exception?",
      options: ["Errors are recoverable; Exceptions are not.", "Exceptions are recoverable; Errors are usually fatal and cannot be recovered from.", "They are the same.", "Errors are checked; Exceptions are unchecked."],
      answer: 1,
      explanation: "Exceptions indicate conditions that a reasonable application might want to catch. Errors indicate serious problems that a reasonable application should not try to catch (e.g., OutOfMemoryError)."
    },
    {
      question: "What is the result of division by zero in Java with integers?",
      options: ["It returns infinity.", "It throws an ArithmeticException.", "It returns NaN.", "It returns 0."],
      answer: 1,
      explanation: "Integer division by zero throws an <code>ArithmeticException</code> at runtime."
    },
    {
      question: "What is the purpose of the <code>printStackTrace()</code> method?",
      options: ["To print the sequence of method calls that led to the exception.", "To print the line number of the error only.", "To ignore the exception.", "To restart the program."],
      answer: 0,
      explanation: "<code>printStackTrace()</code> prints the throwable and its backtrace to the standard error stream, which is useful for debugging."
    },
    {
      question: "Can a catch block handle an exception of type <code>Exception</code> if there are more specific catch blocks below it?",
      options: ["Yes, it catches everything.", "No, more specific catch blocks must come first (ordered from subclass to superclass).", "Yes, order doesn't matter.", "No, it causes a runtime exception."],
      answer: 1,
      explanation: "In Java, catch blocks must be ordered from the most specific exception to the most general. Placing a catch for <code>Exception</code> first will mask all other catch blocks and cause a compiler error."
    },
    {
      question: "What is the purpose of the <code>AutoCloseable</code> interface?",
      options: ["To make a class compatible with try-with-resources.", "To make a class thread-safe.", "To allow object serialization.", "To prevent memory leaks automatically."],
      answer: 0,
      explanation: "An object that implements <code>AutoCloseable</code> can be used as a resource in a <code>try-with-resources</code> statement and will be closed automatically."
    },
    {
      question: "What is a rethrown exception?",
      options: ["Catching an exception and throwing it again (or a new one) after some processing.", "Throwing an exception from a finally block.", "An exception that is ignored.", "An exception that occurs twice."],
      answer: 0,
      explanation: "Rethrowing is catching an exception and then throwing it again, often after logging it or wrapping it in another exception."
    },
    {
      question: "Which of the following is a checked exception?",
      options: ["NullPointerException", "IllegalArgumentException", "IOException", "ArrayIndexOutOfBoundsException"],
      answer: 2,
      explanation: "<code>IOException</code> is a checked exception. The others are unchecked (runtime) exceptions."
    },
    {
      question: "What happens if an exception is thrown in a finally block?",
      options: ["It is ignored.", "It suppresses any exception thrown in the try block and propagates up.", "It crashes the JVM immediately.", "It returns null."],
      answer: 1,
      explanation: "If a finally block throws an exception, that exception will propagate up and mask any exception thrown in the try or catch blocks."
    },
    {
      question: "What is the purpose of <code>Exception Chaining</code>?",
      options: ["To link multiple exceptions together to preserve the original cause.", "To execute multiple catch blocks.", "To prevent exceptions from being thrown.", "To speed up error handling."],
      answer: 0,
      explanation: "Exception chaining allows you to associate another exception with the current exception, usually passing the cause to the constructor of the new exception."
    },
    {
      question: "Can you use try without catch or finally?",
      options: ["No, it must have at least one.", "Yes, if it is a try-with-resources statement.", "Yes, always.", "No, unless it is in a static method."],
      answer: 1,
      explanation: "A standard try block must be followed by at least one catch block or a finally block. However, a <code>try-with-resources</code> statement can stand alone without explicit catch or finally blocks."
    }
  ],
  'concurrency.html': [
    {
      question: "How does the 'synchronized' keyword prevent Race Conditions (The Shared Bank Account analogy)?",
      options: ["It runs all threads in parallel.", "It acts like a lock on a door; only one thread can hold the key to execute the block at a time.", "It destroys the threads.", "It prevents deadlocks automatically."],
      answer: 1,
      explanation: "Synchronization forces threads to queue up. When one thread enters the synchronized block, it locks the door behind it. Other threads must wait outside until the first thread finishes and unlocks the door."
    },
    {
      question: "What is a Deadlock in multithreading?",
      options: ["When a thread finishes execution.", "When two or more threads are blocked forever, waiting for each other.", "When a thread runs out of memory.", "When a thread is interrupted."],
      answer: 1,
      explanation: "A deadlock occurs when two or more threads are waiting for resources held by each other, creating a cycle of dependencies that can never be resolved."
    },
    {
      question: "Which class should you use for atomic operations on integers without synchronization?",
      options: ["Integer", "AtomicInteger", "VolatileInteger", "SynchronizedInteger"],
      answer: 1,
      explanation: "<code>AtomicInteger</code> provides lock-free, thread-safe operations on a single variable using low-level CPU instructions like compare-and-swap."
    },
    {
      question: "What does the <code>volatile</code> keyword guarantee?",
      options: ["Atomicity of operations.", "Visibility of changes across threads.", "That the variable cannot be changed.", "That the variable is stored on the stack."],
      answer: 1,
      explanation: "The <code>volatile</code> keyword ensures that a variable is read from and written to main memory, making changes visible to all threads immediately."
    },
    {
      question: "What is the purpose of the <code>ExecutorService</code>?",
      options: ["To manage a pool of threads and execute tasks asynchronously.", "To create new threads manually.", "To stop all running threads.", "To synchronize blocks of code."],
      answer: 0,
      explanation: "<code>ExecutorService</code> provides a higher-level API for managing a pool of threads, making it easier to run tasks in parallel without manually managing thread lifecycles."
    },
    {
      question: "What is a Race Condition?",
      options: ["When two threads run at the exact same speed.", "When the output depends on the sequence or timing of uncontrollable events (like thread scheduling).", "When the output depends on the sequence or timing of uncontrollable events (like thread scheduling).", "When a thread finishes before another."],
      answer: 1,
      explanation: "A race condition occurs when two or more threads access shared data and try to change it at the same time, leading to unpredictable results."
    },
    {
      question: "Which method is used to make a thread wait until another thread finishes?",
      options: ["thread.wait()", "thread.join()", "thread.stop()", "thread.sleep()"],
      answer: 1,
      explanation: "The <code>join()</code> method allows one thread to wait for the completion of another."
    },
    {
      question: "What is the purpose of the <code>wait()</code> and <code>notify()</code> methods?",
      options: ["To pause and resume thread execution based on a condition, used for inter-thread communication.", "To stop a thread.", "To create a lock.", "To handle exceptions in threads."],
      answer: 0,
      explanation: "These methods are used for communication between threads that are synchronized on the same object monitor."
    },
    {
      question: "What is the difference between <code>Thread</code> class and <code>Runnable</code> interface?",
      options: ["Thread is a class; Runnable is an interface.", "Runnable can be implemented by any class; Thread cannot be extended if a class already extends another class.", "Thread provides more control methods; Runnable is just a task.", "All of the above."],
      answer: 3,
      explanation: "Runnable is a functional interface representing a task. Thread is a class that executes tasks. Since Java supports single inheritance, implementing Runnable is often preferred over extending Thread."
    },
    {
      question: "What is the purpose of the <code>synchronized</code> block vs <code>synchronized</code> method?",
      options: ["Blocks allow locking on specific objects and for specific lines of code, reducing contention.", "Methods are always faster.", "Blocks cannot be used on static methods.", "There is no difference."],
      answer: 0,
      explanation: "Synchronized blocks allow you to synchronize only a portion of the method and on a specific object (lock), which can improve performance by reducing the scope of the lock."
    },
    {
      question: "What is a <code>Callable</code> in Java?",
      options: ["A task that returns a result and can throw a checked exception.", "A task that returns nothing.", "A task that cannot be run in parallel.", "A replacement for Thread."],
      answer: 0,
      explanation: "<code>Callable</code> is similar to <code>Runnable</code>, but it can return a result and throw a checked exception."
    },
    {
      question: "What does a <code>Future</code> object represent?",
      options: ["The result of an asynchronous computation that may not be complete yet.", "A thread that will be created in the future.", "A task that failed.", "A lock that will be acquired."],
      answer: 0,
      explanation: "A <code>Future</code> represents the result of an asynchronous computation. Methods are provided to check if the computation is complete, to wait for its completion, and to retrieve the result."
    },
    {
      question: "What is the purpose of the <code>CountDownLatch</code> class?",
      options: ["To allow one or more threads to wait until a set of operations being performed in other threads completes.", "To count the number of active threads.", "To prevent deadlocks.", "To share data between threads."],
      answer: 0,
      explanation: "A <code>CountDownLatch</code> is initialized with a given count. The <code>await</code> methods block until the current count reaches zero due to invocations of the <code>countDown()</code> method."
    },
    {
      question: "What is the purpose of the <code>CyclicBarrier</code> class?",
      options: ["To allow a set of threads to all wait for each other to reach a common barrier point.", "To prevent threads from accessing a resource.", "To count operations.", "To stop threads."],
      answer: 0,
      explanation: "A <code>CyclicBarrier</code> is useful in programs involving a fixed sized party of threads that must occasionally wait for each other."
    },
    {
      question: "What is the difference between <code>submit()</code> and <code>execute()</code> in ExecutorService?",
      options: ["submit() returns a Future; execute() returns void.", "execute() returns a Future; submit() returns void.", "They are the same.", "submit() is only for Callables."],
      answer: 0,
      explanation: "<code>submit()</code> can take both Runnable and Callable and returns a Future. <code>execute()</code> takes only Runnable and returns void."
    },
    {
      question: "What is the purpose of the <code>ReadWriteLock</code> interface?",
      options: ["To allow multiple readers but only one writer at a time.", "To allow multiple writers.", "To prevent reading while writing.", "To speed up operations."],
      answer: 0,
      explanation: "A <code>ReadWriteLock</code> maintains a pair of associated locks, one for read-only operations and one for writing. The read lock may be held simultaneously by multiple reader threads, so long as there are no writers."
    },
    {
      question: "What is the purpose of the <code>Semaphore</code> class?",
      options: ["To control the number of threads that can access a resource simultaneously.", "To lock a single resource.", "To count threads.", "To stop threads."],
      answer: 0,
      explanation: "A semaphore controls access to a shared resource through the use of a counter. If the counter is greater than zero, access is allowed. If it is zero, access is denied."
    },
    {
      question: "What is thread starvation?",
      options: ["When a thread cannot gain regular access to shared resources and is unable to make progress.", "When a thread runs out of memory.", "When a thread is deleted.", "When a thread is interrupted."],
      answer: 0,
      explanation: "Starvation describes a situation where a thread is unable to gain regular access to shared resources and is unable to make progress. This happens when shared resources are made unavailable for long periods by 'greedy' threads."
    }
  ],
  'reflection.html': [
    {
      question: "Why is Reflection considered dangerous in everyday application code?",
      options: ["It cannot read private variables.", "It requires a special license.", "It bypasses compile-time safety and can break encapsulation rules (accessing private data).", "It deletes objects from the heap."],
      answer: 2,
      explanation: "Reflection gives you 'lockpick' access. You can force private variables to become accessible, breaking encapsulation, and losing all the compile-time type-checking safety nets."
    },
    {
      question: "Which method is used to get the Class object of a class at runtime?",
      options: ["Class.forName()", "object.getClass()", "MyClass.class", "All of the above"],
      answer: 3,
      explanation: "All three methods can be used to obtain a Class object, depending on whether you have the class name as a string, an instance, or the class token."
    },
    {
      question: "Can Reflection be used to create a new instance of a class?",
      options: ["No, only the 'new' keyword can do that.", "Yes, using Class.newInstance() or Constructor.newInstance().", "Yes, but only if the class is public.", "No, unless you use a factory."],
      answer: 1,
      explanation: "Reflection allows you to instantiate classes dynamically by looking up their constructors and invoking them."
    },
    {
      question: "Which method is used to get all public methods of a class including inherited ones?",
      options: ["getMethods()", "getDeclaredMethods()", "getAllMethods()", "getPublicMethods()"],
      answer: 0,
      explanation: "<code>getMethods()</code> returns an array containing Method objects reflecting all the public methods of the class or interface represented by this Class object, including those declared by the class or interface and those inherited from superclasses and superinterfaces."
    },
    {
      question: "Which method is used to get all methods declared by the class, including private ones, but excluding inherited ones?",
      options: ["getMethods()", "getDeclaredMethods()", "getPrivateMethods()", "getLocalMethods()"],
      answer: 1,
      explanation: "<code>getDeclaredMethods()</code> returns an array containing Method objects reflecting all the methods declared by the class or interface represented by this Class object, including public, protected, default (package) access, and private methods, but excluding inherited methods."
    },
    {
      question: "How do you make a private field accessible using reflection?",
      options: ["field.setAccessible(true)", "field.makePublic()", "field.unlock()", "field.setPrivate(false)"],
      answer: 0,
      explanation: "The <code>setAccessible(true)</code> method is used to suppress Java language access checking for the reflected object, allowing access to private fields and methods."
    },
    {
      question: "What is the purpose of the <code>Modifier</code> class in reflection?",
      options: ["To modify the class file.", "To decode the access modifiers of classes and members.", "To change variables.", "To create new modifiers."],
      answer: 1,
      explanation: "The <code>Modifier</code> class provides static methods and constants to decode class and member access modifiers (e.g., public, private, static, final)."
    },
    {
      question: "Can reflection be used to change the value of a final field?",
      options: ["No, final fields cannot be changed.", "Yes, by making it accessible and using field.set().", "Yes, but only for static final fields.", "No, unless you restart the JVM."],
      answer: 1,
      explanation: "While generally not recommended and subject to security managers, reflection can be used to change the value of a final field by making it accessible, unless the field is a compile-time constant."
    },
    {
      question: "What is the purpose of the <code>Constructor</code> class in reflection?",
      options: ["To create new instances of a class.", "To modify existing instances.", "To destroy instances.", "To check class modifiers."],
      answer: 0,
      explanation: "The <code>Constructor</code> class provides information about, and access to, a single constructor for a class."
    },
    {
      question: "What is the purpose of the <code>Field</code> class in reflection?",
      options: ["To access and modify fields of a class or object.", "To access methods.", "To access constructors.", "To access annotations."],
      answer: 0,
      explanation: "The <code>Field</code> class provides information about, and dynamic access to, a single field of a class or an interface."
    },
    {
      question: "What is the purpose of the <code>Method</code> class in reflection?",
      options: ["To invoke methods dynamically.", "To access fields.", "To access constructors.", "To check class modifiers."],
      answer: 0,
      explanation: "The <code>Method</code> class provides information about, and access to, a single method on a class or interface."
    },
    {
      question: "Can reflection access private methods of a superclass?",
      options: ["Yes, directly.", "No, only methods declared in the class itself can be accessed with getDeclaredMethods().", "Yes, if you use getMethods().", "No, unless they are protected."],
      answer: 1,
      explanation: "<code>getDeclaredMethods()</code> only returns methods declared by that specific class, not inherited ones. To access private methods of a superclass, you must get the Class object of the superclass first."
    },
    {
      question: "What is the performance overhead of using reflection?",
      options: ["Reflection is much slower than direct code because operations cannot be optimized by the JIT.", "Reflection is faster.", "There is no overhead.", "Reflection is only slow on the first call."],
      answer: 0,
      explanation: "Reflection involves dynamic resolution, so certain Java virtual machine optimizations cannot be performed. Consequently, reflective operations have slower performance than their non-reflective counterparts."
    },
    {
      question: "What is the purpose of the <code>getGenericReturnType()</code> method in the Method class?",
      options: ["To get the return type including generic types.", "To get the raw return type.", "To get the method name.", "To get the parameters."],
      answer: 0,
      explanation: "<code>getGenericReturnType()</code> returns a Type object that represents the formal return type of the method represented by this Method object, including generic types."
    },
    {
      question: "Can reflection be used to inspect annotations?",
      options: ["Yes, both at class and member level.", "No, annotations are lost at runtime.", "Yes, but only for built-in annotations.", "No, unless you use a specific library."],
      answer: 0,
      explanation: "Reflection provides methods like <code>getAnnotation()</code> and <code>getAnnotations()</code> to inspect annotations on classes, methods, fields, and parameters, provided the retention policy is RUNTIME."
    },
    {
      question: "What is the purpose of the <code>Array</code> class in reflection?",
      options: ["To create and manipulate arrays dynamically.", "To sort arrays.", "To copy arrays.", "To convert arrays to lists."],
      answer: 0,
      explanation: "The <code>java.lang.reflect.Array</code> class provides static methods to dynamically create and access Java arrays."
    },
    {
      question: "What is the difference between <code>Class.forName(\"ClassName\")</code> and <code>ClassName.class</code>?",
      options: ["forName() loads the class dynamically by name; ClassName.class is a class literal resolved at compile time.", "They are the same.", "ClassName.class is faster.", "forName() is only for interfaces."],
      answer: 0,
      explanation: "<code>Class.forName()</code> loads the class if it's not already loaded, and initializes it. <code>ClassName.class</code> evaluates to the Class object for the named class without loading it if it's not needed yet."
    },
    {
      question: "What is the purpose of the <code>Proxy</code> class in reflection?",
      options: ["To create dynamic proxy classes and instances.", "To intercept method calls.", "To implement multiple interfaces at runtime.", "All of the above."],
      answer: 3,
      explanation: "The <code>Proxy</code> class provides static methods for creating dynamic proxy classes and instances. It is often used for AOP (Aspect-Oriented Programming) to intercept method calls."
    }
  ],
  'jvm-internals.html': [
    {
      question: "According to the Generational Hypothesis for Garbage Collection, what happens to most objects?",
      options: ["They live forever.", "They move directly to the Old Generation.", "They die young.", "They are stored in the Stack."],
      answer: 2,
      explanation: "Most objects (like temporary variables inside loops or methods) die very quickly after being created. The GC takes advantage of this by heavily scanning the 'Young Generation' space."
    },
    {
      question: "Where are class metadata and static variables stored in Java 8+?",
      options: ["Heap", "Stack", "Metaspace", "String Pool"],
      answer: 2,
      explanation: "In Java 8, PermGen was replaced by Metaspace, which is stored in native memory and holds class metadata."
    },
    {
      question: "What does JIT stand for in the JVM?",
      options: ["Just In Time", "Java Instruction Tree", "Joint Instance Tracker", "Java Interface Template"],
      answer: 0,
      explanation: "JIT stands for Just-In-Time compiler. It compiles frequently executed bytecode into native machine code at runtime to improve performance."
    },
    {
      question: "What is the purpose of the ClassLoader in the JVM?",
      options: ["To execute bytecode.", "To load, link, and initialize class files.", "To manage memory.", "To compile code to machine language."],
      answer: 1,
      explanation: "The ClassLoader subsystem is responsible for loading class files, verifying them, and allocating memory for class variables."
    },
    {
      question: "What is the difference between the Stack and the Heap in JVM memory?",
      options: ["Stack stores objects; Heap stores local variables.", "Stack stores local variables and method calls; Heap stores all objects.", "They are the same.", "Stack is shared by all threads; Heap is thread-local."],
      answer: 1,
      explanation: "The Stack is used for execution thread and stores local variables and method call stack frames. The Heap is used for dynamic memory allocation for Java objects."
    },
    {
      question: "What is the role of the Execution Engine in the JVM?",
      options: ["To read class files.", "To execute the bytecode using an interpreter or JIT compiler.", "To manage garbage collection.", "To provide native libraries."],
      answer: 1,
      explanation: "The Execution Engine reads the Java bytecode and executes it, either by interpreting it line by line or by compiling it to native code using the JIT compiler."
    },
    {
      question: "What is the 'Stop-the-World' event in Garbage Collection?",
      options: ["When the application stops responding.", "When all application threads are paused to let the GC run.", "When the JVM crashes.", "When the CPU usage hits 100%."],
      answer: 1,
      explanation: "A Stop-the-World event occurs when the GC pauses all application threads to safely clean up objects in memory."
    },
    {
      question: "What is the purpose of the String Pool?",
      options: ["To store all strings in the application.", "To optimize memory by sharing identical string literals.", "To make string operations faster.", "To prevent strings from being modified."],
      answer: 1,
      explanation: "The String Pool is a special storage area in the Java heap. When a string literal is created, the JVM checks the pool first. If the string already exists, a reference to the pooled instance is returned."
    },
    {
      question: "What is the purpose of the <code>intern()</code> method in String?",
      options: ["To add a string to the string pool if it's not already there and return its reference.", "To convert a string to an integer.", "To check if a string is empty.", "To convert a string to lowercase."],
      answer: 0,
      explanation: "The <code>intern()</code> method returns a canonical representation for the string object, ensuring that all strings with the same content share the same memory in the String Pool."
    },
    {
      question: "What is the difference between a shallow copy and a deep copy?",
      options: ["Shallow copy copies references; deep copy copies objects.", "Deep copy copies references; shallow copy copies objects.", "They are the same.", "Shallow copy is faster."],
      answer: 0,
      explanation: "A shallow copy creates a new object but inserts references to the original objects. A deep copy creates a new object and recursively creates copies of all objects referenced by it."
    },
    {
      question: "What is the purpose of the <code>finalize()</code> method?",
      options: ["To clean up resources before garbage collection (deprecated).", "To make a class final.", "To finish a method.", "To stop a thread."],
      answer: 0,
      explanation: "The <code>finalize()</code> method was intended for cleanup before GC, but it is unpredictable and deprecated in favor of try-with-resources or cleaners."
    },
    {
      question: "What are the different types of references in Java?",
      options: ["Strong, Weak, Soft, and Phantom.", "Object and Primitive.", "Static and Instance.", "Public and Private."],
      answer: 0,
      explanation: "Java provides four types of references with different levels of reachability: Strong (default), Soft (cleared before OOM), Weak (cleared on next GC), and Phantom (used for post-mortem cleanup)."
    },
    {
      question: "What is the purpose of a SoftReference?",
      options: ["To allow garbage collection only if memory is low.", "To prevent garbage collection.", "To allow immediate garbage collection.", "To store primitive data."],
      answer: 0,
      explanation: "Soft references are used for memory-sensitive caches. The garbage collector will clear them if memory is needed to avoid an OutOfMemoryError."
    },
    {
      question: "What is the purpose of a WeakReference?",
      options: ["To allow garbage collection as soon as the object is only weakly reachable.", "To prevent garbage collection.", "To store large objects.", "To share objects."],
      answer: 0,
      explanation: "An object referenced only by weak references will be garbage collected at the next collection cycle."
    },
    {
      question: "What is the OutOfMemoryError in Java?",
      options: ["When the JVM cannot allocate an object because it is out of memory, and no more memory could be made available by the garbage collector.", "When the stack overflows.", "When a variable is not found.", "When the CPU is too slow."],
      answer: 0,
      explanation: "OutOfMemoryError indicates that the JVM has run out of heap space and cannot allocate any more objects, even after running garbage collection."
    },
    {
      question: "What is the StackOverflowError in Java?",
      options: ["When a thread's stack exceeds its maximum size, usually due to infinite recursion.", "When the heap is full.", "When an array index is out of bounds.", "When a method returns too many values."],
      answer: 0,
      explanation: "StackOverflowError occurs when a thread exceeds its stack depth limit, most commonly caused by deep or infinite recursion."
    },
    {
      question: "What is the purpose of the <code>-Xmx</code> JVM argument?",
      options: ["To set the maximum heap size.", "To set the initial heap size.", "To set the stack size.", "To enable verbose GC."],
      answer: 0,
      explanation: "The <code>-Xmx</code> flag specifies the maximum memory allocation pool for a Java Virtual Machine (the maximum heap size)."
    },
    {
      question: "What is the purpose of the <code>-Xms</code> JVM argument?",
      options: ["To set the initial heap size.", "To set the maximum heap size.", "To set the stack size.", "To enable debugging."],
      answer: 0,
      explanation: "The <code>-Xms</code> flag specifies the initial memory allocation pool for a Java Virtual Machine (the initial heap size)."
    }
  ],
  'modern-features.html': [
    {
      question: "Does using 'var' for local variables make Java a dynamically typed language like JavaScript?",
      options: ["Yes, 'var' allows the variable to change types later.", "No, the compiler statically infers and locks the type at compile-time.", "Yes, it disables compile-time checks.", "No, 'var' can only be used for Strings."],
      answer: 1,
      explanation: "Java remains strictly statically typed. 'var' just acts as a detective—it figures out the type from the right side of the equals sign during compilation, saving you keystrokes."
    },
    {
      question: "Which feature introduced in Java 14 helps reduce boilerplate for data classes?",
      options: ["Lambdas", "Streams", "Records", "Sealed Classes"],
      answer: 2,
      explanation: "Records provide a compact syntax for declaring classes that are transparent holders for shallowly immutable data."
    },
    {
      question: "What is the purpose of Sealed Classes (Java 15+)?",
      options: ["To prevent any inheritance.", "To restrict which other classes may extend or implement them.", "To make classes final by default.", "To encrypt class files."],
      answer: 1,
      explanation: "Sealed classes and interfaces restrict which other classes or interfaces may extend or implement them, providing more control over the class hierarchy."
    },
    {
      question: "What is the purpose of Pattern Matching for <code>instanceof</code> (Java 16+)?",
      options: ["To make code run faster.", "To eliminate the need for explicit casting after an instanceof check.", "To allow multiple inheritance.", "To check types at runtime only."],
      answer: 1,
      explanation: "Pattern matching for <code>instanceof</code> allows you to declare a variable for the cast object directly in the condition, avoiding boilerplate casting."
    },
    {
      question: "What are Text Blocks (Java 15+)?",
      options: ["A way to write multi-line string literals without escaping newlines.", "A new type of collection.", "A feature for file I/O.", "A way to encrypt strings."],
      answer: 0,
      explanation: "Text blocks use triple quotes <code>\"\"\"</code> to allow writing multi-line strings easily, preserving formatting."
    },
    {
      question: "What is the purpose of the <code>switch</code> expressions (Java 14+)?",
      options: ["To allow switch statements to return a value.", "To make switch statements faster.", "To remove the need for case labels.", "To allow switching on objects."],
      answer: 0,
      explanation: "Switch expressions can produce a value and use the arrow <code>-></code> syntax, eliminating the need for break statements and fall-through bugs."
    },
    {
      question: "What is the purpose of the <code>yield</code> keyword in switch expressions?",
      options: ["To return a value from a block-based switch case.", "To stop the switch execution.", "To throw an exception.", "To pause the thread."],
      answer: 0,
      explanation: "The <code>yield</code> keyword is used to return a value from a case arm in a switch expression when that arm uses a block of code."
    },
    {
      question: "What are Virtual Threads (Java 21+)?",
      options: ["Threads that don't take up memory.", "Lightweight threads that reduce the effort of writing, maintaining, and observing high-throughput concurrent applications.", "Threads that run on the GPU.", "Threads that cannot be blocked."],
      answer: 1,
      explanation: "Virtual threads are lightweight threads provided by the JDK (Project Loom) that make it easy to write high-scale concurrent applications with a simple thread-per-request model."
    },
    {
      question: "What is the benefit of using Virtual Threads over platform threads?",
      options: ["They use significantly less memory and overhead, allowing millions of concurrent threads.", "They are faster for CPU-bound tasks.", "They cannot be blocked.", "They are only for GUI applications."],
      answer: 0,
      explanation: "Virtual threads are managed by the JVM rather than the OS. They are mounted on OS threads when running code, allowing application to scale to millions of threads."
    },
    {
      question: "What is the purpose of the <code>ScopedValue</code> class (Java 21+)?",
      options: ["To share immutable data between threads safely without the overhead of ThreadLocal.", "To create global variables.", "To lock objects.", "To measure execution time."],
      answer: 0,
      explanation: "Scoped values provide a way to share data without the cost of <code>ThreadLocal</code>, especially useful with virtual threads."
    },
    {
      question: "What is the purpose of Structured Concurrency (Java 21+)?",
      options: ["To treat groups of related tasks running in different threads as a single unit of work.", "To make threads run in a specific order.", "To prevent threads from running.", "To sort threads."],
      answer: 0,
      explanation: "Structured concurrency simplifies concurrent programming by treating multiple tasks running in different threads as a single unit of work, improving reliability and observability."
    },
    {
      question: "Which feature allows you to extract components from a record in a switch or instanceof check?",
      options: ["Record Patterns (Java 21+)", "Pattern Matching for instanceof", "Text Blocks", "Sealed Classes"],
      answer: 0,
      explanation: "Record patterns allow you to deconstruct record values to access their components directly in pattern matching."
    },
    {
      question: "What is the purpose of the <code>@Override</code> annotation?",
      options: ["To indicate that a method overrides a method in a superclass.", "To make a method final.", "To make a method static.", "To overload a method."],
      answer: 0,
      explanation: "The <code>@Override</code> annotation informs the compiler that the element is meant to override an element declared in a superclass, helping catch errors."
    },
    {
      question: "What is the purpose of the <code>@Deprecated</code> annotation?",
      options: ["To indicate that a program element is deprecated and should no longer be used.", "To delete a method.", "To make a method private.", "To ignore a method."],
      answer: 0,
      explanation: "The <code>@Deprecated</code> annotation indicates that the marked element is deprecated and may be removed in future versions."
    },
    {
      question: "What is the purpose of the <code>@SuppressWarnings</code> annotation?",
      options: ["To suppress compiler warnings.", "To suppress runtime exceptions.", "To suppress errors.", "To ignore code."],
      answer: 0,
      explanation: "The <code>@SuppressWarnings</code> annotation is used to tell the compiler to ignore specific warnings that it would otherwise generate."
    },
    {
      question: "What is a Functional Annotation like <code>@FunctionalInterface</code> used for?",
      options: ["To ensure that an interface has exactly one abstract method.", "To make an interface faster.", "To allow lambdas on any interface.", "To document the code only."],
      answer: 0,
      explanation: "The <code>@FunctionalInterface</code> annotation is used to ensure that the interface satisfies the requirements for a functional interface (exactly one abstract method)."
    },
    {
      question: "Which tool was introduced in Java 9 to provide an interactive REPL?",
      options: ["JShell", "javac", "java", "jdb"],
      answer: 0,
      explanation: "JShell is Java's interactive Read-Eval-Print Loop (REPL) tool, allowing you to execute Java code snippets and view results immediately."
    },
    {
      question: "What is the purpose of the Java Module System (Project Jigsaw, Java 9)?",
      options: ["To improve security and maintainability by organizing code into modules with explicit dependencies.", "To make code run faster.", "To allow multiple inheritance.", "To replace packages."],
      answer: 0,
      explanation: "The Module System allows you to group packages into modules, specify which packages are exported, and which other modules are required."
    }
  ],
  'datetime.html': [
    {
      question: "Which class was introduced in Java 8 to represent a date without a time or timezone?",
      options: ["Date", "Calendar", "LocalDate", "LocalDateTime"],
      answer: 2,
      explanation: "<code>LocalDate</code> represents a date (year, month, day) in the ISO-8601 calendar system."
    },
    {
      question: "Are classes in the java.time package mutable?",
      options: ["Yes, you can change their values directly.", "No, they are immutable and thread-safe.", "Yes, but only if they are not static.", "No, unless you use a formatter."],
      answer: 1,
      explanation: "The Date-Time API classes introduced in Java 8 are immutable and thread-safe."
    },
    {
      question: "Which class is used to represent a time without a date or timezone?",
      options: ["Time", "LocalTime", "Clock", "Instant"],
      answer: 1,
      explanation: "<code>LocalTime</code> represents a time (hour, minute, second, nanosecond) without a date or timezone."
    },
    {
      question: "What is the purpose of the <code>Instant</code> class in the Date-Time API?",
      options: ["To represent a specific point in time on the timeline (UTC).", "To represent a duration.", "To represent a date.", "To represent a time zone."],
      answer: 0,
      explanation: "<code>Instant</code> represents a specific point in time, measured from the epoch (1970-01-01T00:00:00Z) in UTC."
    },
    {
      question: "How do you calculate the difference between two dates in days?",
      options: ["date1 - date2", "ChronoUnit.DAYS.between(date1, date2)", "date1.difference(date2)", "new Duration(date1, date2)"],
      answer: 1,
      explanation: "The <code>ChronoUnit</code> enum provides methods to calculate the amount of time between two temporal objects."
    },
    {
      question: "Which class is used to handle time zones in Java 8?",
      options: ["TimeZone", "ZoneId", "ZonedDateTime", "Both ZoneId and ZonedDateTime"],
      answer: 3,
      explanation: "<code>ZoneId</code> represents a time zone identifier, and <code>ZonedDateTime</code> represents a date-time with a time zone."
    },
    {
      question: "Is the old <code>java.util.Date</code> class recommended for new code?",
      options: ["Yes, it is the standard.", "No, use classes from java.time package instead.", "Yes, but only for simple dates.", "No, unless you are using Java 7."],
      answer: 1,
      explanation: "The old Date and Calendar classes are flawed and mutable. The new java.time API is much better and recommended."
    },
    {
      question: "What is the difference between <code>Duration</code> and <code>Period</code>?",
      options: ["Duration is for machine time (seconds/nanos); Period is for human time (years/months/days).", "Period is for machine time; Duration is for human time.", "They are the same.", "Duration is for dates; Period is for times."],
      answer: 0,
      explanation: "<code>Duration</code> measures time in terms of seconds and nanoseconds. <code>Period</code> measures time in terms of years, months, and days."
    },
    {
      question: "How do you parse a string \"2023-10-27\" into a LocalDate?",
      options: ["LocalDate.parse(\"2023-10-27\")", "new LocalDate(\"2023-10-27\")", "LocalDate.of(\"2023-10-27\")", "LocalDate.valueOf(\"2023-10-27\")"],
      answer: 0,
      explanation: "The <code>parse()</code> method of <code>LocalDate</code> obtains an instance from a text string such as '2011-12-03' using the ISO-8601 format."
    },
    {
      question: "Which class is used to format and parse dates in Java 8?",
      options: ["SimpleDateFormat", "DateTimeFormatter", "DateFormat", "DateFormatter"],
      answer: 1,
      explanation: "<code>DateTimeFormatter</code> is the replacement for <code>SimpleDateFormat</code>. It is immutable and thread-safe."
    },
    {
      question: "What is the result of adding 1 month to 2023-01-31 using LocalDate?",
      options: ["2023-02-28 (or 29)", "2023-03-03", "It throws an exception.", "2023-02-31"],
      answer: 0,
      explanation: "The <code>plusMonths()</code> method resolves the date to the last valid day of the month if the target month has fewer days than the source month."
    },
    {
      question: "Which class represents a date and time with an offset from UTC/Greenwich?",
      options: ["LocalDateTime", "ZonedDateTime", "OffsetDateTime", "Instant"],
      answer: 2,
      explanation: "<code>OffsetDateTime</code> is an immutable representation of a date-time with an offset. This class stores all date and time fields, to a precision of nanoseconds, and an offset from UTC/Greenwich."
    },
    {
      question: "How do you get the current time in milliseconds since epoch in Java 8?",
      options: ["Instant.now().toEpochMilli()", "System.currentTimeMillis()", "new Date().getTime()", "All of the above"],
      answer: 3,
      explanation: "All of these methods return the current time in milliseconds since the Unix epoch. <code>Instant.now().toEpochMilli()</code> is the preferred way in modern Java."
    },
    {
      question: "What is the purpose of the <code>Clock</code> class in the Date-Time API?",
      options: ["To provide access to the current instant, date, and time using a time-zone.", "To measure execution time.", "To create timers.", "To synchronize clocks across servers."],
      answer: 0,
      explanation: "The <code>Clock</code> class is used to access the current instant, date and time. It is useful for testing because you can inject fixed or offset clocks."
    },
    {
      question: "Which class represents a combination of LocalDate and LocalTime?",
      options: ["LocalDateTime", "ZonedDateTime", "DateTime", "Instant"],
      answer: 0,
      explanation: "<code>LocalDateTime</code> is an immutable date-time object that represents a date-time, often viewed as year-month-day-hour-minute-second."
    },
    {
      question: "What is the default format for <code>LocalDate.toString()</code>?",
      options: ["YYYY-MM-DD", "MM/DD/YYYY", "DD-MM-YYYY", "YYYY/MM/DD"],
      answer: 0,
      explanation: "The default format is the ISO-8601 format: <code>YYYY-MM-DD</code>."
    },
    {
      question: "Can you create a LocalDate for a date that does not exist (e.g., Feb 30)?",
      options: ["No, it throws a DateTimeException.", "Yes, it creates it anyway.", "Yes, it rolls over to the next month.", "No, it returns null."],
      answer: 0,
      explanation: "Attempting to create an invalid date using methods like <code>LocalDate.of()</code> will throw a <code>DateTimeException</code>."
    }
  ],
  'math-utils.html': [
    {
      question: "Which method in the Math class returns the absolute value of a number?",
      options: ["Math.abs()", "Math.absolute()", "Math.ceil()", "Math.floor()"],
      answer: 0,
      explanation: "<code>Math.abs()</code> returns the absolute (positive) value of the argument."
    },
    {
      question: "How do you generate a random number between 0.0 and 1.0 in Java?",
      options: ["Math.rand()", "Math.random()", "Random.next()", "new Random()"],
      answer: 1,
      explanation: "<code>Math.random()</code> returns a double value with a positive sign, greater than or equal to 0.0 and less than 1.0."
    },
    {
      question: "Which method in Math class is used to find the power of a number?",
      options: ["Math.power()", "Math.pow()", "Math.exp()", "Math.sqrt()"],
      answer: 1,
      explanation: "<code>Math.pow(a, b)</code> returns the value of the first argument raised to the power of the second argument."
    },
    {
      question: "What is the result of Math.sqrt(16)?",
      options: ["4.0", "4", "16", "2.0"],
      answer: 0,
      explanation: "<code>Math.sqrt()</code> returns the correctly rounded positive square root of a double value. So it returns 4.0 (a double)."
    },
    {
      question: "Which method rounds a float to the nearest integer?",
      options: ["Math.floor()", "Math.ceil()", "Math.round()", "Math.trunc()"],
      answer: 2,
      explanation: "<code>Math.round()</code> returns the closest long or int to the argument."
    },
    {
      question: "What does Math.ceil(9.1) return?",
      options: ["9.0", "10.0", "9", "10"],
      answer: 1,
      explanation: "<code>Math.ceil()</code> returns the smallest double value that is greater than or equal to the argument and is equal to a mathematical integer."
    },
    {
      question: "What does Math.floor(9.9) return?",
      options: ["9.0", "10.0", "9", "10"],
      answer: 0,
      explanation: "<code>Math.floor()</code> returns the largest double value that is less than or equal to the argument and is equal to a mathematical integer."
    },
    {
      question: "What is the difference between <code>Math.random()</code> and <code>java.util.Random</code>?",
      options: ["Math.random() is a static method; Random is a class that allows generating various types of random data.", "They are the same.", "Random is faster.", "Math.random() is only for integers."],
      answer: 0,
      explanation: "<code>Math.random()</code> is a convenience method that uses a single pseudo-random number generator. <code>Random</code> is a class that can be instantiated to generate ints, longs, booleans, etc., and can be seeded."
    },
    {
      question: "Which method in Math class returns the larger of two values?",
      options: ["Math.max()", "Math.larger()", "Math.greater()", "Math.high()"],
      answer: 0,
      explanation: "<code>Math.max(a, b)</code> returns the greater of two values."
    },
    {
      question: "Which method in Math class returns the smaller of two values?",
      options: ["Math.min()", "Math.smaller()", "Math.less()", "Math.low()"],
      answer: 0,
      explanation: "<code>Math.min(a, b)</code> returns the smaller of two values."
    },
    {
      question: "What is the result of Math.round(2.5)?",
      options: ["2", "3", "2.0", "3.0"],
      answer: 1,
      explanation: "<code>Math.round(2.5)</code> returns 3 (an int). For positive numbers, it rounds up."
    },
    {
      question: "What is the result of Math.round(-2.5)?",
      options: ["-2", "-3", "-2.0", "-3.0"],
      answer: 0,
      explanation: "<code>Math.round(-2.5)</code> returns -2 (an int). It rounds towards positive infinity for .5 cases."
    },
    {
      question: "Which class was introduced in Java 17 to provide better pseudo-random number generators?",
      options: ["RandomGenerator", "SecureRandom", "ThreadLocalRandom", "SplittableRandom"],
      answer: 0,
      explanation: "Java 17 introduced the <code>RandomGenerator</code> interface and a framework to make it easier to use various PRNG algorithms."
    },
    {
      question: "What is the difference between <code>Random</code> and <code>SecureRandom</code>?",
      options: ["SecureRandom is cryptographically secure; Random is not.", "Random is faster; SecureRandom is slower.", "SecureRandom uses non-deterministic output.", "All of the above."],
      answer: 3,
      explanation: "<code>SecureRandom</code> provides a cryptographically strong random number generator. It is much slower than <code>Random</code> but necessary for security-sensitive tasks."
    },
    {
      question: "What is the purpose of <code>ThreadLocalRandom</code>?",
      options: ["To generate random numbers in a multi-threaded environment without contention.", "To generate random numbers faster in single thread.", "To store random numbers.", "To secure random numbers."],
      answer: 0,
      explanation: "<code>ThreadLocalRandom</code> reduces contention among threads when generating random numbers, providing better performance in concurrent applications."
    },
    {
      question: "Which method in Math class calculates the sine of an angle?",
      options: ["Math.sin()", "Math.cosine()", "Math.tan()", "Math.asin()"],
      answer: 0,
      explanation: "<code>Math.sin()</code> returns the trigonometric sine of an angle (in radians)."
    },
    {
      question: "How do you convert degrees to radians in Java?",
      options: ["Math.toRadians()", "Math.toDegrees()", "Math.PI * degrees / 180", "Both Math.toRadians() and the formula"],
      answer: 3,
      explanation: "You can use the built-in <code>Math.toRadians()</code> method or the mathematical formula directly."
    }
  ],
  'io-network.html': [
    {
      question: "Which class is used to read data from a file character by character?",
      options: ["FileInputStream", "FileReader", "BufferedReader", "ObjectInputStream"],
      answer: 1,
      explanation: "<code>FileReader</code> is used for reading streams of characters from files."
    },
    {
      question: "What is the purpose of the <code>transient</code> keyword in serialization?",
      options: ["To make a variable static.", "To prevent a variable from being serialized.", "To make a variable constant.", "To encrypt a variable."],
      answer: 1,
      explanation: "Variables marked as <code>transient</code> are not saved during the serialization process."
    },
    {
      question: "Which class is used to write characters to a file?",
      options: ["FileOutputStream", "FileWriter", "BufferedWriter", "PrintWriter"],
      answer: 1,
      explanation: "<code>FileWriter</code> is used for writing streams of characters to files."
    },
    {
      question: "What is the difference between Byte Streams and Character Streams?",
      options: ["Byte streams handle 8-bit bytes; Character streams handle 16-bit Unicode characters.", "Character streams are faster.", "Byte streams are only for images.", "They are the same."],
      answer: 0,
      explanation: "Byte streams (InputStream/OutputStream) are used for reading and writing binary data. Character streams (Reader/Writer) are used for reading and writing text data."
    },
    {
      question: "What is the purpose of the <code>BufferedReader</code> class?",
      options: ["To read data faster by buffering characters.", "To read primitive data types.", "To read objects.", "To read from a URL."],
      answer: 0,
      explanation: "<code>BufferedReader</code> reads text from a character-input stream, buffering characters so as to provide for the efficient reading of characters, arrays, and lines."
    },
    {
      question: "Which class is used to connect to a server in Java networking?",
      options: ["ServerSocket", "Socket", "URLConnection", "DatagramSocket"],
      answer: 1,
      explanation: "The <code>Socket</code> class is used by a client to connect to a server."
    },
    {
      question: "What is the purpose of the <code>ServerSocket</code> class?",
      options: ["To connect to a client.", "To listen for incoming connections from clients.", "To send data over the network.", "To parse URLs."],
      answer: 1,
      explanation: "<code>ServerSocket</code> is used by servers to listen for incoming client requests on a specific port."
    }
  ],
  'generics.html': [
    {
      question: "What is the primary purpose of Generics in Java?",
      options: ["To improve performance at runtime.", "To provide compile-time type safety and eliminate casting.", "To allow multiple inheritance.", "To make code shorter."],
      answer: 1,
      explanation: "Generics enable types (classes and interfaces) to be parameters when defining classes, interfaces, and methods, providing stronger type checks at compile time."
    },
    {
      question: "What does the wildcard <code>? extends T</code> mean in generics?",
      options: ["Any type that is a superclass of T.", "Any type that is a subclass of T or T itself.", "Only type T.", "Any type at all."],
      answer: 1,
      explanation: "This is an upper-bounded wildcard. It matches any type that is a subtype of T, or T itself."
    },
    {
      question: "What is Type Erasure in Java Generics?",
      options: ["The removal of type information at compile time.", "The removal of type information at runtime.", "An error that occurs when types don't match.", "A feature that makes generics faster."],
      answer: 1,
      explanation: "Type erasure is the process where the compiler removes all information related to type parameters and type arguments within a class or method, replacing them with raw types or Object. This ensures backward compatibility."
    },
    {
      question: "What does the wildcard <code>? super T</code> mean in generics?",
      options: ["Any type that is a superclass of T or T itself.", "Any type that is a subclass of T.", "Only type T.", "Any type at all."],
      answer: 0,
      explanation: "This is a lower-bounded wildcard. It matches any type that is a supertype of T, or T itself."
    },
    {
      question: "Can you create an array of a generic type (e.g., <code>new T[10]</code>)?",
      options: ["Yes, always.", "No, it causes a generic array creation error.", "Yes, if T extends Object.", "No, unless you use a cast."],
      answer: 1,
      explanation: "You cannot create an array of a generic type directly because arrays need to know their exact component type at runtime, and generics are erased."
    },
    {
      question: "What is the benefit of using Generic Methods?",
      options: ["They allow the method to be used with different types without duplicating code.", "They make the method run faster.", "They allow the method to return multiple values.", "They are required for all methods."],
      answer: 0,
      explanation: "Generic methods introduce their own type parameters, allowing them to be used with different types independently of the class they are in."
    },
    {
      question: "What is a raw type in generics?",
      options: ["A generic type used without type arguments.", "A type that cannot be changed.", "A primitive type.", "An array type."],
      answer: 0,
      explanation: "A raw type is the name of a generic class or interface without any type arguments (e.g., using <code>List</code> instead of <code>List<String></code>)."
    }
  ]
};
