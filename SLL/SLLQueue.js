class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLLStack {
    constructor() {
        this.head = null;
        this.tail = null;
        
    }

    // push(value) - adds the given value to the stack
    push(value) {
        var newNode = new ListNode(value)
        if(this.head == null && this.tail == null) {
            this.head = newNode;
            this.tail = newNode;


        }
        else{
            newNode.next = this.head;
            this.head = newNode;

        }
    }
    
    pop() {
        if(this.head == null && this.tail == null) {
            return undefined
        }
        else if (this.head == this.tail) {
            var temp = this.head;
            this.head = null;
            this.tail = null;
            return temp.value;
        }
        else {
            var temp = this.head.next;
            var oldHead = this.head;
            this.head.next = null;
            this.head = temp;

        }
        return oldHead.value;
    }

    // top() - returns the top value without removing it
    top() {
        if(this.head == null && this.tail == null) {
            return undefined
        }
        else {
            return this.head.value;
        }
    }

    // contains(target) - returns true if the target value is in the stack,
    // false if not
    contains(target) {
        if(this.head == null && this.tail == null) {
            return false;
        }
        var runner = this.head;
        while(runner != null) {
            if(runner.value == target) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // isEmpty() - returns true if the stack is empty, false otherwise
    isEmpty() {
        // if(this.head == null && this.tail == null) {
        //     return true;
        // }
        // return false;
        return (this.head == null && this.tail == null);
    }


    size() {
        if(this.head == null && this.tail == null) {
            return 0;
        }
        var runner = this.head;
        var counter = 0;
        while(runner != null) {
            runner = runner.next;
        }
        return counter;
    }

}

class SLLQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.counter = 0;
    }
    enqueue(value) {
        var new_node = new ListNode(value);
        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
            ++this.counter;
        }

        else {
            this.tail.next = new_node;
            this.tail = new_node;
            ++this.counter;
        }
    }
    dequeue() {
        if (this.head == null) {
            return null;
        }
        else if (this.head == this.tail) {
            var temp = this.head;
            this.head = null;
            this.tail = null;
            --this.counter;
            return temp.value;
        }

        var temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        --this.counter;

        return temp.value;

    }
    front() {
        return this.head.value;
    }

    contains(target) {
        var runner = this.head;

        while (runner != null) {

            if (runner.value == target) {
                return true;
            }

            runner = runner.next;
        }

        return false;
    }
    isEmpty() {
        return (this.head == null)
    }
    size() {

        return this.counter

    }
    compareQueues(queue2) {

        if (this.size() != queue2.size()) {
            return false
        }
        var runner_this = this.head
        var runner_queue2 = queue2.head

        while (runner_this != null) {

            if (runner_this.value != runner_queue2.value) {
                return false;
            }
            runner_this = runner_this.next
            runner_queue2 = runner_queue2.next
        }
        return true;
    }

    // isPalindrome() - return true if the values of the queue form a palindrome,
    // and false otherwise. don't put the values of the queue into an array!
    // (or turn them into a string, either - your queue listnode values
    // may not always be able to be turned into a string)
    // do not modify the queue state in any way
    // also don't add some kind of tricky extra queue methods - they're not needed
    // maybe... use a stack? you'll need to copy that class into this file
    // you ain't gotta tho nbd it's just a suggestion
    isPalindrome() {
        if(this.head.value != this.tail.value) {
            return false;
        }
        let new_Stack = new SLLStack();

        var runner = this.head;
        while(runner != null){
            new_Stack.push(runner.value);
            runner = runner.next;
        }
        runner = this.head;
        while(runner != null){
            if (runner.value != new_Stack.pop()){
                return false;
            }
            runner = runner.next;
        }
        return true;
    }
}

// compareQueues (even-numbered group)
// return true if the queues have the same values in the same order
// false otherwise
// important: this is a non-destructive operation!
// do not modify either queue
function compareQueues(queue1, queue2) {
    var runner1 = queue1.head;
    var runner2 = queue2.head;

    if (queue1.size() == queue2.size()) {
        while (runner1 != null) {
            if (runner1.value == runner2.value){
                runner1 = runner1.next;
                runner2 = runner2.next;
            }
            else {
                return false;
            }
        }
        return true;
    }
    return false;
}


// test your queue implementation here!

var queue_A = new SLLQueue();

var queue_B = new SLLQueue();

var queue_C = new SLLQueue();

var queue_D = new SLLQueue();

var queue_E = new SLLQueue();

queue_A.enqueue(50);
queue_A.enqueue(0);
queue_A.enqueue(0);
queue_A.enqueue(50);
console.log(queue_A.isPalindrome());

queue_B.enqueue(50);
queue_B.enqueue(0);
queue_B.enqueue(5);
queue_B.enqueue(100);
console.log(queue_B.isPalindrome());

queue_C.enqueue(50);
queue_C.enqueue(0);
queue_C.enqueue(5);
queue_C.enqueue(0);
queue_C.enqueue(50);
console.log(queue_C.isPalindrome());

queue_D.enqueue('hi');
queue_D.enqueue('hello');
queue_D.enqueue('bye');
queue_D.enqueue('hello');
queue_D.enqueue('hi');
console.log(queue_D.isPalindrome());

queue_E.enqueue('hi');
queue_E.enqueue('hello');
queue_E.enqueue('bye');
queue_E.enqueue('bye');
queue_E.enqueue('hi');
console.log(queue_E.isPalindrome());