var removeNthFromEnd = function(head, n) {
    let runner = head;
    let temp = head;
    let counter = 1;
    if(runner.next === null){
        return null;
    }
    while(runner.next){
        ++counter;
        if(counter > n+1){
            temp = temp.next;
        }
        console.log(temp.val);
        runner = runner.next;
    }
    console.log(`counter: ${counter}`);
    if(counter === n){
        head = temp.next;
    }else{
        temp.next = temp.next.next;
    }
    return head;
};