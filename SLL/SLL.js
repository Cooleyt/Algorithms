class Node {
    constructor(val) {
        this.val = val;
        this.next = null; // node (.val, .next)
        //THIS IS NEW
        this.child = null; // SLL (.head)
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addToFront(val) {
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    printMe() {
        let returnStr = '';
        let runner = this.head;
        while (runner != null) {
            returnStr += `${runner.val} -> `;
            runner = runner.next;
        }
        console.log(returnStr);
        return returnStr;
    }

    // addToFront - adds a node with the given value to the head of the list
    addToFront(value) {
        var newNode = new ListNode(value);
        if (this.head == null && this.tail == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    // addToBack - adds a node with the given value to the tail of the list
    addToBack(value) {
        var newNode = new ListNode(value);
        if (this.head == null && this.tail == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;  // 
            this.tail = newNode;
        }
    }

    findMinNode() {
        if (this.head == null && this.tail == null) {
            return undefined;
        }
        var runner = this.head;
        var min = runner;
        while (runner.next != null) {
            runner = runner.next;
            if (min.value > runner.value) {
                min = runner;
            }
        }
        if (min.value > this.tail.value) {
            min = this.tail;
        }
        return min;
    }

    findMaxNode() {
        if (this.head == null && this.tail == null) {
            return undefined;
        }
        var runner = this.head;
        var max = runner;
        while (runner.next != null) {
            runner = runner.next;
            if (max.value < runner.value) {
                max = runner;
            }
        }
        if (max.value < this.tail.value) {
            max = this.tail;
        }
        return max;
    }

    partition(target) {
        if (this.head == null && this.tail == null) {
            return undefined;
        }
        if (this.head == this.tail) {
            return this
        }
        var less_than = [];
        var greater_than = [];
        var in_between = [];
        var runner = this.head;
        while (runner != null) {
            if (runner.value < target) {
                less_than.push(runner);
            }
            if (runner.value > target) {
                greater_than.push(runner);
            }
            if (runner.value == target) {
                in_between.push(runner);
            }
            runner = runner.next;
        }
        var final_array = less_than.concat(in_between, greater_than);
        this.head = final_array[0];
        this.tail = final_array[final_array.length - 1];
        for (var i = 0; i < final_array.length; ++i) {
            final_array[i].next = final_array[i + 1];
        }
        this.tail.next = null;

        return this

    }

    findSecondToLast() {
        if (this.head == null || this.head == this.tail) {
            return undefined;
        }
        var runner = this.head;
        while (runner.next != this.tail) {
            runner = runner.next;
        }
        return runner.value;
    }

    // contains - returns true if target is in the linked list (as a node value),
    // false otherwise
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

    removeFront() {
        if (this.head == null && this.tail == null) {
            return undefined;
        }
        if (this.head == this.tail) {
            this.tail = null;
        }
        var temp = this.head;
        this.head = temp.next;
        return temp.value;
    }

    removeBack() {
        if (this.head == null && this.tail == null) {
            return undefined;
        }
        var runner = this.head;
        var temp = this.tail;
        if (this.head == this.tail) {
            var temp = this.head;
            this.head = null;
            this.tail = null;
            return temp.value;
        }
        var runner = this.head;
        var temp = this.tail;
        while (this.tail != runner.next) {
            console.log(runner.value);
            runner = runner.next;
        }
        this.tail = runner;
        runner.next = null;
        return temp.value;
    }

    moveMaxToBack() {
        if (this.head == null && this.tail == null) {
            return undefined;
        }
        var temp = this.findMaxNode();
        if (temp != this.tail) {
            if (temp != this.head) {
                var runner = this.head;
                while (runner.next != temp) {
                    runner = runner.next;
                }
                runner.next = temp.next;
            } else {
                this.head = this.head.next;
            }
            this.tail.next = temp;
            this.tail = temp;
            this.tail.next = null;
        }
        console.log(this.display())
    }

    moveMinToFront() {
        if (this.head == null && this.tail == null) {
            return undefined;
        }
        var temp = this.findMinNode();
        if (temp != this.head) {
            var runner = this.head;
            while (runner.next != temp) {
                runner = runner.next;
            }
            if (temp == this.tail) {
                this.tail = runner;
                this.tail.next = null;
            } else {
                runner.next = temp.next;
            }
            temp.next = this.head;
            this.head = temp;
        }
    }





    //populates each node with a random amount of children from 0 to 4
    populateChildren() {

        let runner = this.head;

        while (runner !== null) {
            let numChildren = Math.floor(Math.random() * 5);
            if (numChildren !== 0) {
                let childList = new SLL();
                for (let i = 0; i < numChildren; ++i) {
                    childList.addToFront(Math.floor(Math.random() * 50));
                }
                runner.child = childList;
            }
            runner = runner.next;
        }
    }
    flattenChildren() {
        let runner = this.head;
        let temp
        while (runner != null) {
            temp = runner.next;
            if (runner.child != null) {
                runner.next = runner.child.head;
                let childRunner = runner.child.head;
                while (childRunner.next != null) {
                    childRunner = childRunner.next;
                }
                childRunner.next = temp;
                runner.child = null;
            }
            runner = temp;
        }
    }


    printMeWithChildren() {
        let returnStr = '';
        let runner = this.head;
        while (runner != null) {
            returnStr += `${runner.val}`;
            if (runner.child) {
                returnStr += "(";
                let runner2 = runner.child.head;
                while (runner2 !== null) {
                    returnStr += `${runner2.val} ->`;
                    runner2 = runner2.next;
                }
                returnStr += ")";
            }
            returnStr += " -> ";
            runner = runner.next;
        }
        console.log(returnStr);
        return returnStr;
    }

    reverseList() {
        var runner = this.head;
        var previous = null;
        var swap = this.head;

        while (runner != null) {
            swap = runner.next;
            runner.next = previous;
            previous = runner;
            runner = swap;
        }
        this.head = previous;

        console.log("head");
        console.log(this.head)
        return this
    }

    display() {
        let result = "";
        let runner = this.head;
        while (runner != null) {
            result += `${runner.value}--> `;
            runner = runner.next;
        }
        console.log(result);
        return this
    }


}


function generateNewList(length, min_value, max_value) {
    var newSLL = new SinglyLinkedList();
    for (var i = 0; i < length; ++i) {
        newSLL.addToFront(Math.floor(Math.random() * (max_value - min_value)) + min_value);
    }
    console.log(newSLL.display());
    return newSLL
}

var list = new SLL();
list.addToFront(5);
list.addToFront(4);
list.addToFront(3);
list.addToFront(2);
list.addToFront(1);
list.addToFront(0);
list.populateChildren();
list.printMeWithChildren();
list.flattenChildren();
list.printMeWithChildren();