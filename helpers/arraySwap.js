function swap(i, j) {
    var t = this[i];
    this[i] = this[j];
    this[j] = t;
    return this;
}
Array.prototype.swap = swap;
module.exports = swap;