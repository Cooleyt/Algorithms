class BSTNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}


class BST {
    constructor() {
        this.root = null
    }

    addNode(value){
        let node = new BSTNode(value);
        if(this.root === null){
            this.root = node;
        }else{
            let runner = this.root;
            while(runner){
                if(node.value < runner.value){
                    if(runner.left){
                        runner = runner.left;
                        console.log()
                    }else{
                        runner.left = node;
                        break;
                    }
                }
                else{
                    if(runner.right){
                        runner = runner.right;
                    }else{
                        runner.right = node;
                        break;
                    }
                }
            }
        }
    }

    findMin() {
        let runner = this.root;
        while(runner.left){
            runner = runner.left;
        }
        return runner.value;
    }

    findMax() {
        let runner = this.root;
        while(runner.right){
            runner = runner.right;
        }
        return runner.value;
    }

    print(){

    }

    contains(value, runner = this.root , found = false){
        if(runner){
            if(runner.left && value < runner.value ) found = this.contains(value, runner.left, found);
            if(runner.right && value > runner.value) found = this.contains(value, runner.right, found);
            if(value == runner.value) found = true;
            return found;
        }
        return found;
    }

    size(runner = this.root, count = 0){
        if(runner){
            if(runner.left) count = this.size(runner.left, count);
            if(runner.right) count = this.size(runner.right, count);
            return ++count;
        }
        return count;
    }

    depth(runner = this.root, count = 0){
        if(runner){
            let leftCount = count;
            let rightCount = count;
            if(runner.left) leftCount = this.depth(runner.left, count);
            if(runner.right) rightCount = this.depth(runner.right, count);
            if(leftCount > rightCount){
                count = leftCount
            }else{
                count = rightCount
            }
            console.log(`Value: ${runner.value}`);
            console.log(`Count: ${count}`);
            return ++count;
        }
        return count;
    }

    isBalance(runner = this.root, count = 0){
        if(runner){
            let leftCount = count;
            let rightCount = count;
            if(runner.left) leftCount = this.depth(runner.left, count);
            if(runner.right) rightCount = this.depth(runner.right, count);
            if(runner === this.root){
                if(Math.abs(leftCount - rightCount) <= 1){
                    return true;
                }else{
                    return false;
                }
            }
            if(leftCount > rightCount){
                count = leftCount
            }else{
                count = rightCount
            }
            console.log(`Value: ${runner.value}`);
            console.log(`Count: ${count}`);
            return ++count;
        }
        return count;
    }

    deleteNode(value, node = this.root) {
        if (node == null) {
            return node;
        }
        if (node.value > value){
            node.left = this.deleteNode(value, node.left);
            console.log(node.left.value)
        } else if (node.value < value) {
            node.right = this.deleteNode(value, node.right);
        } else {
            if (node.left == null && node.right == null){
                node == null;
            } else if (node.left && node.right) {
                let pred = this.findMax(node.left);
                let temp = pred;
                node.left = this.deleteNode(pred.value, node.left);
            } else {
                let child
                if (node.left) {
                    child = node.left
                    
                } else {
                    child = node.right
                }
                node = child;
            }
        }
        return node;
    }

}

var list = new BST();
list.addNode(10);
list.addNode(12);
list.addNode(11);
list.addNode(11);
list.addNode(9);
list.addNode(8);
list.addNode(6);
list.addNode(7);
list.addNode(1);
list.addNode(18);
list.addNode(10);

// console.log(list.findMax());
// console.log(list.findMin());
// console.log(list.contains(11));
// console.log(list.contains(5));

// console.log(list.size());
// console.log(list.depth());
// console.log(list.isBalance());

// console.log(list.remove(9));
console.log(list.depth());
