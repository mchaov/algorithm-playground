// Private fields need nodejs 12.x

class Queue {
    #data;
    #maxSize; // 0 = auto sizing

    constructor(maxSize) {
        this.#maxSize = typeof maxSize === "undefined" ? 0 : maxSize;
        this.clear();
    }

    clear() { this.#data = new Array(0); }

    get count() { return this.#data.length; }

    contains(element) { return this.#data.indexOf(element) > -1; }

    peek() { return this.#data.slice(); }

    enqueue(element) {
        if (this.#maxSize !== 0 && this.count > this.#maxSize) {
            throw new Error("queue overflow :)");
        }
        this.#data.push(element);
    }

    dequeue() {
        if (this.count <= 0) {
            throw new Error("queue underflow :)");
        }
        this.#data.shift();
    }
}

const q = new Queue(2);

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(
    q.count,
    q.contains(1),
    q.contains(4)
)

q.dequeue();

console.log(
    q.count,
    q.contains(1)
)

console.log(q.peek())
