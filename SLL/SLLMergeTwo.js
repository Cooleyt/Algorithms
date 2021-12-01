var mergeTwoLists = function (l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    let output = null;
    let outputRunner = null;
    while (l1 || l2) {
        if (!l2 || (l1 && l1.val <= l2.val)) {
            if (outputRunner === null) {
                outputRunner = l1;
                output = outputRunner;
            } else {
                outputRunner.next = l1
                outputRunner = outputRunner.next;
            }
            l1 = l1.next;
        } else {
            if (outputRunner === null) {
                outputRunner = l2;
                output = outputRunner;
            } else {
                outputRunner.next = l2
                outputRunner = outputRunner.next;
            }
            l2 = l2.next;
        }
    }
    return output;
};