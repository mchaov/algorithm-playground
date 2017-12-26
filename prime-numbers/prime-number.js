const { performance } = require('perf_hooks');

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

// https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
// find all prime numbers up to the provided one

function primeEratosten(n) {
    let sieve = new Float64Array(n).fill(0);
    let primes = [];
    let i = 2;
    while (i <= n) {
        if (sieve[i] === 0) {
            primes.push(i);
            let j = i * i;
            while (j <= n) {
                sieve[j] = 1;
                j += i;
            }
        }
        i++;
    }
    return primes;
}

// Find primes in

function findPrimes(n) {
    let primes = new Float64Array(n);
    let p = 0;

    function isP(n) {
        let i = 0;
        while (i < p && Math.pow(primes[i], 2) <= n) {
            if (n % primes[i] === 0) return 0;
            i++;
        }
        return 1;
    }

    let i = 2;
    while (i < n) {
        if (isP(i)) {
            primes[p] = i;
            p++;
        }
        i++;
    }

    return primes;
}

const total = 1000000000;
let perf = performance.now();
primeEratosten(total)
console.log("primeEratosten:", performance.now() - perf);

// perf = performance.now();
// findPrimes(total);
// console.log("findPrimes:", performance.now() - perf);
