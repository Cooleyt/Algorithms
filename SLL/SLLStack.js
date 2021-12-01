class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// a stack! last in, first out
// we add/remove from the top of a stack
// what's going to be the "top" of our stack here?

class SLLStack {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // push(value) - adds the given value to the stack
    push(value) {
        var new_node = new ListNode(value);
        if(this.head == null && this.tail == null){
            this.head = new_node;
            this.tail = new_node;
        }else{
            new_node.next = this.head;
            this.head = new_node;
        }
    }

    // pop() - removes the top value from stack and returns it
    pop() {
        if(this.head == null){
            return false
        }
        if(this.head == this.tail){
            var temp = this.head;
            this.head = this.head.next; 
            this.tail = this.head;
        }else{
            var temp = this.head;
            this.head = this.head.next; 
        }
        return temp.value;
    }

    // top() - returns the top value without removing it
    top() {
        if(this.head == null){
            return false
        }
        return this.head.value;
    }

    // contains(target) - returns true if the target value is in the stack,
    // false if not
    contains(target) {
        var runner = this.head;
        while(runner != null){
            if(runner.value == target){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // isEmpty() - returns true if the stack is empty, false otherwise
    isEmpty() {
        if(this.head == null && this.tail == null){
            return true;
        }
        return false;
    }

    // size() - returns the size of the stack
    // bonus to think about: we can make this way faster - how?
    size() {
        var runner = this.head;
        var count = 0;
        while(runner != null){
            ++count;
            runner = runner.next;
        }
        return count;
    }
}

var x = new SLLStack();

console.log(x.pop());
console.log(x.top());
console.log(x.contains(1));
console.log(x.isEmpty());
console.log(x.size());

x.push(7);
x.push(3);
x.push(8);

console.log(x.top());
console.log(x.pop());
console.log(x.contains(8));
console.log(x.contains(7));
console.log(x.isEmpty());
console.log(x.size());