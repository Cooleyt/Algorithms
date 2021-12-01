//doubly linked lists

class Node{
    constructor(valueInput){
        this.value= valueInput;
        this.next = null;
        this.prev = null;
    }
}

class DLL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    addBack(value){
        if(this.head === null){
            let node = new Node(value);
            this.head = node;
            this.tail = node;
            ++this.length;
        }else{
            let runner = this.head;
            while(runner.next){
                runner = runner.next;
            }
            let node = new Node(value);
            runner.next = node;
            node.prev = runner
            this.tail = node;
            ++this.length;
        }
    }
    addFront(value){
        if(this.head === null){
            let node = new Node(value);
            this.head = node;
            this.tail = node;
            ++this.length;
        }else{
            let node = new Node(value);
            let runner = this.head;
            this.head = node;
            node.next = runner;
            runner.prev = node;
            ++this.length;
        }
    }
    
    removeBack(){
        if(this.head !== null){
            let runner = this.tail.prev;
            runner.next = null;
            this.tail = runner;
            --this.length;
        }
    }
    remFront(){
        if(this.head !== null){
            this.head = this.head.next;
            this.head.prev = null;
            --this.length;
        }
    }
    
    print(){
        let runner = this.head;
        while(runner){
            console.log(runner.value);
            runner = runner.next;
        }
    }
    printBackwards(){
        let runner = this.tail;
        while(runner){
            console.log(runner.value);
            runner = runner.prev;
            
        }
    }   

    reverse(){
        let runner = this.tail;
        this.tail = this.head;
        this.head = runner;
        let temp;
        while(runner){
            temp = runner.prev;
            runner.prev = runner.next;
            runner.next = temp;
            runner = runner.next;
        }
    }

    recursiveReverse(runner = this.head){
        let temp;
        if(runner == null){
            temp = this.head;
            this.head = this.tail;
            this.tail = temp;
        }else{
            temp = runner.prev;
            runner.prev = runner.next;
            runner.next = temp;
            this.recursiveReverse(runner.prev);
        }
    }
}

var list = new DLL();
list.addFront(8);
list.addFront(7);
list.addFront(6);
list.addFront(5);
list.addFront(4);
list.addFront(3);
list.addFront(2);
list.addFront(1);
list.print();
console.log();
list.recursiveReverse();
list.print();