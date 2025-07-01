
class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class Linkedlist {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    addFront(value) {
        const newnode = new Node(value)
        if (this.isEmpty()) {
            this.head = newnode
        } else {
            newnode.next = this.head;
            this.head = newnode
        }
        this.size++
    }

    addBack(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let temp = this.head
            while (temp.next) {
                temp = temp.next
            }
            temp.next = node
        }

    }

    addAtIndex(data, index) {
        if (index < 0 || index > this.size) {
            return `Invalid Index , Not Found`
        }
        if (index === 0 || this.isEmpty()) {
            return this.addFront(data)
        } else {
            const node = new Node(data)
            let prev = this.head
            let i = 0;
            while (i < index - 1) {
                prev = prev.next
                i++
            }
            node.next = prev.next
            prev.next = node
        }
        this.size++
    }

    removeNodeAt(index) {
        if (index < 0 || index > this.size) {
            return `Index Out of Index`
        }
        let removeNode
        if (index === 0) {
            removeNode = this.head
            this.head = this.head.next

        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.data
    }

    removeNodeValue(data) {
        if (this.isEmpty()) {
            return null;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return data;
        } else {
            let prev = this.head;
            while (prev.next && prev.next.data !== data) {
                prev = prev.next;
            }
            if (prev.next) {
                const removeNodeVal = prev.next;
                prev.next = removeNodeVal.next;
                this.size--;
                return data;
            }
            return null;
        }
    }



    search(value) {
        if (this.isEmpty()) {
            return -1;
        }
        let temp = this.head;
        let index = 0;
        while (temp) {
            if (temp.data === value) {
                return index;
            }
            temp = temp.next;
            index++;
        }
        return -1;
    }


    print() {
        if (this.isEmpty()) {
            return `Linked List is Empty , No Node available`
        } else {
            let temp = this.head
            let list = ""
            while (temp) {
                list += `${temp.data} > `
                temp = temp.next
            }
            return list
        }
    }

}

const user1 = new Linkedlist()
user1.addFront(2)
user1.addFront(3)
user1.addFront(4)
user1.addBack(5)
user1.addBack(6)
// user1.addBack(7)
// user1.addAtIndex(400 , 3)
// console.log(user1)
// user1.removeNodeAt(4)
console.warn(user1.search(2))
console.log(user1.print())
