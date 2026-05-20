import java.util.*;

public class Main {
    public static void main(String[] args) {
        Queue<String> queue = new LinkedList<>();
        queue.offer("First");
        queue.offer("Second");
        System.out.println(queue.peek());
        System.out.println(queue.poll());

        PriorityQueue<Integer> pq = new PriorityQueue<>();
        pq.offer(30);
        pq.offer(10);
        pq.offer(20);
        System.out.println("Priority poll: " + pq.poll());

        Deque<String> deque = new ArrayDeque<>();
        deque.push("A");
        deque.push("B");
        System.out.println("Stack pop: " + deque.pop());

        deque.offerFirst("Front");
        deque.offerLast("Back");
        System.out.println(deque);
    }
}