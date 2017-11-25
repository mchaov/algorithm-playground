// Implementation using Wilson's theorem
// https://en.wikipedia.org/wiki/Wilson%27s_theorem
// slower than other methods when considered for large number
// but interesting for implementation
// (n-1)! === -1 (mod n)

function primeWilson(n) {
    if (n <= 1) return false;

    let f = 1;

    for (let i = 2; i < n; i++) {
        f = (f * i) % n;
        if (f % n === 0) return false;
    }

    if (f !== n - 1) return false;

    return true;
}

primeWilson(2);
primeWilson(3);
primeWilson(4);
primeWilson(5);
primeWilson(6);
primeWilson(7);