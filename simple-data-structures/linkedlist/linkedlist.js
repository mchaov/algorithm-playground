// simple implementation of single linked list
// moved away from #private fields syntax as my editor is not too happy about it
// assume "_" = "private"

class LinkedListNode {
    list; next; value;
    constructor(value, list, next) {
        this.next = next;
        this.list = list;
        this.value = value;
    }
}

class LinkedList {
    _first;
    _last;

    constructor(fromElements) {
        if (Array.isArray(fromElements)) {
            fromElements.forEach(x => {
                if (this.first === undefined) {
                    this.addFirst(x);
                } else {
                    this.addLast(x);
                }
            });
        }
    }

    get count() {
        let c = 0;
        if (this._first !== undefined) {
            let element = this._first;
            while (element) {
                c += 1;
                if (element === element.next || element.next === undefined) {
                    break;
                } else {
                    element = element.next;
                }
            }
        }
        return c;
    }

    get first() { return this._first; }
    get last() { return this._last; }

    // yeah, no private methods in JS yet :)
    _ensureLLElement(element) {
        let e = element;
        if (element instanceof LinkedListNode) {
            e.next = undefined;
            e.list = this;
        } else {
            e = new LinkedListNode(element, this, undefined);
        }
        return e;
    }

    addFirst(element) {
        let newElement = this._ensureLLElement(element);
        let oldFirst = this.first;

        this._first = newElement;
        this._first.next = oldFirst;

        if (!this.last) {
            this.addLast(this.first);
            this.first.next = this._last;
        }

        if (Object.is(this.last, this.first)) {
            this.last.next = undefined;
        }
    }

    addLast(element) {
        if (!this.first) {
            return this.addFirst(element);
        }

        let newElement = this._ensureLLElement(element);
        if (this.last) {
            let oldLast = this.last;
            oldLast.next = newElement;
        }
        this._last = newElement;
    }

    addBefore(element1, element2) { }
    addAfter(element1, element2) { }

    clear() {
        this._first = undefined;
        this._last = undefined;
    }

    contains(element) { }

    find(element) { }
    findLast(element) { }

    remove(element) { }
    removeFirst() { }
    removeLast() { }
}

const ll = new LinkedList([1, 2, 3, 4]);

console.log(
    "\n## FIRST:", ll.first,
    "\n## SECOND:", ll.first.next,
    "\n## LAST:", ll.last,
    "\n## COUNT:", ll.count
);

ll.clear();

console.log("## COUNT post clear", ll.count);

ll.addFirst(1);

console.log(
    "\n## FIRST:", ll.first,
);

ll.addFirst(11);
ll.addFirst(111);

console.log(
    "\n## FIRST:", ll.first,
    "\n## SECOND:", ll.first.next,
    "\n## LAST:", ll.last,
    "\n## LAST NEXT:", ll.last.next,
);

ll.clear();

ll.addLast(33);
ll.addLast(22);
ll.addLast(11);
ll.addFirst(1111);
ll.addFirst(2222);

console.log(
    "\n## FIRST:", ll.first,
    "\n## SECOND:", ll.first.next,
    "\n## THIRD:", ll.first.next.next,
    "\n## FOURTH:", ll.first.next.next.next,
    "\n## FIFTH:", ll.first.next.next.next.next,
    "\n## LAST:", ll.last,
    "\n## LAST NEXT:", ll.last.next,
    "\n## COUNT:", ll.count
);

