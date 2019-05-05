/**
 * https://en.wikipedia.org/wiki/Euclidean_algorithm
 */
function gcd(x, y) {
    let z = x % y;
    return z > 0 ? gcd(y, z) : y
}
module.exports = gcd;