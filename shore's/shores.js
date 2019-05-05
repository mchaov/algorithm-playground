const gcd = require("../helpers/greatestCommonDivisor");

/**
 * https://en.wikipedia.org/wiki/Shor%27s_algorithm
 * 
 * Shor's algorithm a.k.a. fuck RSA and your crypto bullshit xD
 * 
 * Bruteforce implementation! I don't have a quantum computer laying around ... duh ...
 * - Doesn't check if number is prime, prime N input example: primeFactors(PRIME) => [PRIME, PRIME]
 * 
 */

function getDivisors(N, r) {
    var p, q;
    for (let a = 1; a < N; a++) {
        let p1 = Math.pow(a, r) + 1;
        let q1 = Math.pow(a, r) - 1;
        p = gcd(p1, N);
        q = gcd(q1, N);
        if (p !== 1 && q !== 1) {
            break;
        }
    }
    return { p, q };
}

function primeFactors(N) {
    var r = 0;
    while (r++ !== null) {
        var { p, q } = getDivisors(N, r++);
        if (p !== 1 && q !== 1) {
            break;
        }
    }
    return [p, q];
}

// console.log(
//     `\nN = 5,         expected[5, 5];        received[${primeFactors(5).join(", ")}]`,
//     `\nN = 15,        expected[5, 3];        received[${primeFactors(15).join(", ")}]`,
//     `\nN = 21,        expected[3, 7];        received[${primeFactors(21).join(", ")}]`,
//     `\nN = 143,       expected[13, 11];      received[${primeFactors(143).join(", ")}]`,
//     `\nN = 56153,     expected[233, 241];    received[${primeFactors(56153).join(", ")}]`,
//     `\nN = ‭831211‬,    expected[1217, 683];   received[${primeFactors(831211).join(", ")}]`,
//     `\nN = 88315753,  expected[7691, 11483]; received[${primeFactors(88315753).join(", ")}]`,
// );