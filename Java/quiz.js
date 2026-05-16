// JavaMaster Interactive Quiz Engine

const quizDB = {
  'what-is-java.html': {
    question: "Which of the following is NOT a feature of Java?",
    options: ["Platform Independent (WORA)", "Object-Oriented", "Manual Memory Management", "Strongly Typed"],
    answer: 2,
    explanation: "Java handles memory automatically using a Garbage Collector. In languages like C/C++, you must manually allocate and free memory, but Java prevents these types of memory leaks by managing the Heap for you."
  },
  'setup.html': {
    question: "What is the entry point for every Java application?",
    options: ["public void start()", "public static void main(String[] args)", "public void init()", "class Main"],
    answer: 1,
    explanation: "The JVM specifically looks for the EXACT signature: public static void main(String[] args). It must be public (so JVM can access it) and static (so JVM can run it without instantiating the class first)."
  },
  'datatypes.html': {
    question: "Where are primitive types stored in memory during a method execution?",
    options: ["The Heap (Warehouse)", "The Stack (Desk)", "Metaspace", "The String Pool"],
    answer: 1,
    explanation: "Local primitive variables (like int, double, boolean) and object references (remote controls) are stored directly on the Stack frame. Actual Objects are built on the Heap."
  },
  'operators.html': {
    question: "What happens in Short-Circuit Evaluation if the first condition of an AND (&&) check is false?",
    options: ["The second condition is evaluated normally.", "A compile-time error occurs.", "The JVM skips the second condition entirely.", "An exception is thrown."],
    answer: 2,
    explanation: "Like a lazy security guard, if the first check of an AND condition fails, the whole statement is guaranteed to be false. Java completely skips the right side, which is useful for preventing NullPointerExceptions."
  },
  'controlflow.html': {
    question: "Which loop is guaranteed to execute at least once?",
    options: ["for loop", "while loop", "do-while loop", "enhanced for loop"],
    answer: 2,
    explanation: "A do-while loop executes its code block first, and THEN checks the condition. Because of this, even if the condition is initially false, the block runs exactly one time."
  },
  'strings.html': {
    question: "Why should you use .equals() instead of == to compare Strings?",
    options: ["Because == compares memory addresses (Identity), while .equals() compares the actual characters (Value).", "Because == is slower than .equals().", "Because == only works for numbers.", "Because Strings don't support the == operator at compile time."],
    answer: 0,
    explanation: "The == operator checks if two remote controls point to the exact same physical object on the Heap. The .equals() method checks if the content (the characters inside) are identical."
  },
  'arrays.html': {
    question: "What is the fundamental limitation of a standard Java Array?",
    options: ["It can only hold primitive types.", "Its size is fixed upon creation and cannot be changed.", "It can only be iterated using a standard for loop.", "It cannot be passed to a method."],
    answer: 1,
    explanation: "Standard arrays are contiguous blocks of memory. Once you declare an array of size 10, it will forever be size 10. If you need a resizable array, you must use an ArrayList."
  },
  'methods.html': {
    question: "Java is strictly Pass-by-Value. What does this mean when you pass an Object to a method?",
    options: ["The method receives a clone of the original object.", "The method receives the actual memory address (Pass-by-Reference).", "The method receives a COPY of the remote control (reference).", "The method can reassign the original variable to point to a new object."],
    answer: 2,
    explanation: "Java passes a copy of the reference (the remote control). You can use this copied remote control to modify the original object's internal state, but you cannot reassign the original remote control to point to a new object."
  },
  'classes.html': {
    question: "What is a Constructor?",
    options: ["A method that destroys the object.", "A special method called automatically when using 'new' to initialize the object's state.", "A method that must return the class type.", "A static method used to call other classes."],
    answer: 1,
    explanation: "A constructor is the initialization script. It runs exactly once when the object is instantiated (using the 'new' keyword) to set up the default state of the object."
  },
  'inheritance.html': {
    question: "Polymorphism allows you to treat a subclass as its parent class. Which of these is the correct 'Remote Control' analogy?",
    options: ["Animal remote = new Dog();", "Dog remote = new Animal();", "Animal remote = new Animal();", "Dog remote = new Dog();"],
    answer: 0,
    explanation: "You can use an Animal remote control to point to a Dog object in the Heap. The remote control's type (Animal) dictates what buttons you can press, but the actual object (Dog) dictates how the action is performed at runtime."
  },
  'interfaces.html': {
    question: "What does an Interface primarily act as in Java?",
    options: ["A physical object.", "A contract of guaranteed behaviors.", "A database schema.", "A garbage collector."],
    answer: 1,
    explanation: "An Interface acts like a USB port. It defines a strict contract of methods that a class MUST implement. If a class claims to implement the interface, it promises to fulfill that contract."
  },
  'enums-records.html': {
    question: "What is the primary benefit of a Java Record?",
    options: ["It automatically creates mutable state.", "It eliminates boilerplate code (getters, equals, hashCode) for immutable data carriers.", "It allows multiple inheritance.", "It extends the String class."],
    answer: 1,
    explanation: "Records were introduced to eliminate the massive amount of boilerplate code required to create simple, immutable data-carrier objects (like DTOs)."
  },
  'lambdas.html': {
    question: "A Lambda expression can ONLY be used with an interface that has exactly ONE abstract method. What is this called?",
    options: ["A Polymorphic Interface", "A Functional Interface (SAM)", "A Default Interface", "A Generic Interface"],
    answer: 1,
    explanation: "A SAM (Single Abstract Method) or Functional Interface is required because the compiler needs to know exactly which single method you are trying to implement when you provide a lambda."
  },
  'streams.html': {
    question: "Why do we call Stream operations 'Lazy' (The Plumbing Analogy)?",
    options: ["They execute very slowly.", "They process data immediately as it's added.", "They only execute when a Terminal Operation (the faucet) is invoked.", "They cache data in memory forever."],
    answer: 2,
    explanation: "Intermediate operations (like filter and map) just build the plumbing. No water (data) actually flows through the pipes until you attach a Terminal Operation (like collect or forEach)."
  },
  'collections-deep.html': {
    question: "What is the main difference between an ArrayList and a LinkedList?",
    options: ["ArrayLists cannot hold null values.", "LinkedLists are stored in contiguous memory, while ArrayLists are scattered.", "ArrayLists are fast for random access, while LinkedLists are fast for inserting/deleting in the middle.", "LinkedLists are thread-safe."],
    answer: 2,
    explanation: "ArrayList uses contiguous memory, so finding element #50 is instant. LinkedList uses scattered nodes, so you have to traverse 50 links to find it, but inserting a new node doesn't require shifting arrays."
  },
  'exceptions-io.html': {
    question: "What is the purpose of the 'finally' block in an Exception sequence?",
    options: ["It catches only Checked Exceptions.", "It acts as a clean-up crew, guaranteed to run whether an exception occurred or not.", "It replaces the try block if an error occurs.", "It allows you to throw a new exception."],
    answer: 1,
    explanation: "The finally block always runs. It is historically used to close resources like files or database connections so they don't leak memory, even if the program crashed."
  },
  'concurrency.html': {
    question: "How does the 'synchronized' keyword prevent Race Conditions (The Shared Bank Account analogy)?",
    options: ["It runs all threads in parallel.", "It acts like a lock on a door; only one thread can hold the key to execute the block at a time.", "It destroys the threads.", "It prevents deadlocks automatically."],
    answer: 1,
    explanation: "Synchronization forces threads to queue up. When one thread enters the synchronized block, it locks the door behind it. Other threads must wait outside until the first thread finishes and unlocks the door."
  },
  'reflection.html': {
    question: "Why is Reflection considered dangerous in everyday application code?",
    options: ["It cannot read private variables.", "It requires a special license.", "It bypasses compile-time safety and can break encapsulation rules (accessing private data).", "It deletes objects from the heap."],
    answer: 2,
    explanation: "Reflection gives you 'lockpick' access. You can force private variables to become accessible, breaking encapsulation, and losing all the compile-time type-checking safety nets."
  },
  'jvm-internals.html': {
    question: "According to the Generational Hypothesis for Garbage Collection, what happens to most objects?",
    options: ["They live forever.", "They move directly to the Old Generation.", "They die young.", "They are stored in the Stack."],
    answer: 2,
    explanation: "Most objects (like temporary variables inside loops or methods) die very quickly after being created. The GC takes advantage of this by heavily scanning the 'Young Generation' space."
  },
  'modern-features.html': {
    question: "Does using 'var' for local variables make Java a dynamically typed language like JavaScript?",
    options: ["Yes, 'var' allows the variable to change types later.", "No, the compiler statically infers and locks the type at compile-time.", "Yes, it disables compile-time checks.", "No, 'var' can only be used for Strings."],
    answer: 1,
    explanation: "Java remains strictly statically typed. 'var' just acts as a detective—it figures out the type from the right side of the equals sign during compilation, saving you keystrokes."
  }
};

(function() {
  const pageFile = window.location.pathname.split('/').pop() || 'index.html';
  const quizData = quizDB[pageFile];

  if (!quizData) return; // No quiz for this page

  const contentArea = document.querySelector('.content-area');
  if (!contentArea) return;

  const quizHTML = \`
    <div id="quiz-container" class="animate-fade">
      <div class="quiz-header">
        <span style="font-size: 28px;">🧠</span> Test Your Knowledge
      </div>
      <div class="quiz-question">\${quizData.question}</div>
      <div class="quiz-options">
        \${quizData.options.map((opt, i) => \`
          <label class="quiz-option" data-index="\${i}">
            <input type="radio" name="quiz" value="\${i}">
            <span>\${opt}</span>
          </label>
        \`).join('')}
      </div>
      <button class="quiz-btn" id="quiz-submit" disabled>Check Answer</button>
      <div class="quiz-feedback" id="quiz-feedback"></div>
    </div>
  \`;

  contentArea.insertAdjacentHTML('beforeend', quizHTML);

  const options = document.querySelectorAll('.quiz-option');
  const radios = document.querySelectorAll('.quiz-option input[type="radio"]');
  const submitBtn = document.getElementById('quiz-submit');
  const feedback = document.getElementById('quiz-feedback');

  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      submitBtn.disabled = false;
    });
  });

  submitBtn.addEventListener('click', () => {
    const selected = document.querySelector('.quiz-option input[type="radio"]:checked');
    if (!selected) return;

    const selectedIdx = parseInt(selected.value);
    const isCorrect = selectedIdx === quizData.answer;

    // Lock options
    radios.forEach(r => r.disabled = true);
    submitBtn.style.display = 'none';

    // Highlight options
    options.forEach((opt, idx) => {
      if (idx === quizData.answer) {
        opt.classList.add('correct');
      } else if (idx === selectedIdx && !isCorrect) {
        opt.classList.add('wrong');
      }
    });

    // Show feedback
    feedback.classList.add('show');
    if (isCorrect) {
      feedback.classList.add('success');
      feedback.innerHTML = \`<strong>✅ Correct!</strong><br><br>\${quizData.explanation}\`;
    } else {
      feedback.classList.add('error');
      feedback.innerHTML = \`<strong>❌ Incorrect.</strong><br><br>\${quizData.explanation}\`;
    }
  });
})();
