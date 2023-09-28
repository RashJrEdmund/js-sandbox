class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(...values) {
        this.head = null;
        values.forEach(value => this.push(value));
    }

    traverseToTail(node) {
        if (!node.next) return node;
        return this.traverseToTail(node.next);
    }

    push(value) {
        const node = new Node(value, null);
        if (!this.head) {
            this.head = node;
            return;
        }

        const tail = this.traverseToTail(this.head);
        tail.next = node;
    }

    peek() {
        if (!this.head) return null;
        return this.traverseToTail(this.head).value;
    }

    get(index) {
        return getValueAtNode(index, this.head, 0);

        function getValueAtNode(index, node, currentCount) {
            if (!node) return;
            if (index === currentCount) {
                return node.value;
            }

            return getValueAtNode(index, node.next, currentCount + 1);
        }
    }

    print(node) {
        if (!node && this.head) node = this.head;
        if (!node) return;

        console.log("Value =>", node.value);
        if (node.next) this.print(node.next);
    }

    pop() {
        function traverse(node) {
            if (!node?.next?.next) {
                return node;
            }
            return traverse(node.next);
        }

        const beforeTail = traverse(this.head);
        let tail = beforeTail.next;
        if (tail) {
            beforeTail.next = null;
        } else {
            tail = this.head;
            this.head = null;
        }
        return tail.value;
    }

    filter(closure) {
        const traverse = (node, parent) => {
            if (node.next) traverse(node.next, node);
            if (!closure(node.value)) {
                console.log("node=>", node)
                console.log("parent=>", parent)
                if (!parent) {
                    this.head = node.next;
                    node.next = null;
                } else {
                    parent.next = node.next;
                    node.next = null;
                }
                console.log("After node=>", node)
                console.log("After parent=>", parent?.next?.value)
            }
        }

        traverse(this.head);
    }
}

const numbers = new LinkedList(0, 0, 6, 8, 2, 0);
numbers.push(1);
numbers.push(3);
numbers.print();
console.log("--------");
numbers.push(2);
numbers.print();
console.log("popped", numbers.pop());
console.log(numbers.peek());
console.log("at 1", numbers.get(1));
numbers.filter((num) => num > 2);
console.log("--------");
numbers.print();
