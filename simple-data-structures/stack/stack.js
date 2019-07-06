// Private fields need nodejs 12.x

class Stack {
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

    push(element) {
        if (this.#maxSize !== 0 && this.count > this.#maxSize) {
            throw new Error("stack overflow :)");
        }
        this.#data.push(element);
    }

    pop() {
        if (this.count <= 0) {
            throw new Error("stack underflow :)");
        }
        this.#data.splice(this.count - 1, 1);
    }
}

var s = new Stack(2);

s.push(1);
s.push(2);
s.push(3);

console.log(
    s.count,
    s.contains(1),
    s.contains(4)
)

s.pop();

console.log(
    s.count,
    s.contains(3)
)

console.log(s.peek());