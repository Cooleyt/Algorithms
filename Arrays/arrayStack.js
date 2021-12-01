class ArrayStack {
    constructor() {
        this.contents = [];
    }
    // push(value) - adds the given value to the stack
    push(value) {
        this.contents.push(value);
    }

    // pop() - removes the top value from stack and returns it
    pop() {
        if(this.contents.length != 0){
            return this.contents.pop(); 
        }
        return false;
    }

    // top() - returns the top value without removing it
    top() {
        return this.contents[this.contents.length - 1];
    }

    // contains(target) - returns true if the target value is in the stack,
    // false if not
    contains(target) {
        for(var i = 0; i < this.contents.length; i++) {
            if(target == this.contents[i]) {
                return true;
            }
        }
        return false;
    }


    // isEmpty() - returns true if the stack is empty, false otherwise
    isEmpty() {
        return !this.contents.length;
    }

    // size() - returns the size of the stack
    size() {
        return this.contents.length;
    }
}

// make sure you test all six methods!
// make sure that you test any edge cases you find

var x = new ArrayStack();
x.push(7);
console.log(x);
console.log(x.pop());
console.log(x);
x.push(13);
x.push(5);
x.push(9);
console.log(x.top());
console.log(x.contains(8));
console.log(x.contains(13));
console.log(x.size());
console.log(x.isEmpty());
x.pop();
x.pop();
x.pop();
console.log(x.isEmpty());
console.log(x);