// Private fields need nodejs 12.x

class PriorityQueue {
    #data;
    #maxSize; // 0 = auto sizing
    #priorityPredicate;

    constructor({ priorityPredicate, maxSize }) {
        this.#maxSize = typeof maxSize === "undefined" ?
            0 :
            maxSize;

        this.#priorityPredicate = typeof priorityPredicate === "undefined" ?
            (a, b) => a > b :
            priorityPredicate;

        this.clear();
    }

    // soon to have private methods syntax :)
    getIndex(element) {
        if (this.count === 0) { return 0; }

        let mid;
        let left = 0;
        let right = this.count - 1;

        //poor man's binary search
        while (left <= right) {
            mid = Math.floor((left + right) / 2);
            if (this.#priorityPredicate(this.#data[mid], element)) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return Math.max(left, right, mid);
    }

    clear() { this.#data = new Array(0); }

    get count() { return this.#data.length; }

    contains(element) { return this.#data.indexOf(element) > -1; }

    peek() { return this.#data.slice(); }

    enqueue(element) {
        if (this.#maxSize !== 0 && this.count > this.#maxSize) {
            throw new Error("queue overflow :)");
        }

        this.#data.splice(this.getIndex(element), 0, element);
    }

    dequeue() {
        if (this.count <= 0) {
            throw new Error("queue underflow :)");
        }
        this.#data.shift();
    }
}

const q = new PriorityQueue({ maxSize: 10, priorityPredicate: (a, b) => a > b });

q.enqueue(3);
q.enqueue(1);
q.enqueue(11);
q.enqueue(5);
q.enqueue(4);
q.enqueue(2);
q.enqueue(3);
q.enqueue(3);
q.enqueue(4);
q.enqueue(8);
q.enqueue(7);


console.log(
    q.peek()
)

const q2 = new PriorityQueue({ maxSize: 0, priorityPredicate: (a, b) => a < b });

q2.enqueue(3);
q2.enqueue(1);
q2.enqueue(11);
q2.enqueue(5);
q2.enqueue(4);
q2.enqueue(2);
q2.enqueue(3);
q2.enqueue(3);
q2.enqueue(4);
q2.enqueue(8);
q2.enqueue(7);


console.log(
    q2.peek()
)