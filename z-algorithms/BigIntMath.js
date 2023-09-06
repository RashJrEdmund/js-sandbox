class BigIntMath {
    static max(...values) {
        if (values.length === 0) {
            return null;
        }

        if (values.length === 1) {
            return values[0];
        }

        let max = values[0];
        for (let i = 1; i < values.length; i++) {
            if (values[i] > max) {
                max = values[i];
            }
        }
        return max;
    }

    static min(...values) {
        if (values.length === 0) {
            return null;
        }

        if (values.length === 1) {
            return values[0];
        }

        let min = values[0];
        for (let i = 1; i < values.length; i++) {
            if (values[i] < min) {
                min = values[i];
            }
        }
        return min;
    }

    static sign(value) {
        if (value > 0n) {
            return 1n;
        }
        if (value < 0n) {
            return -1n;
        }
        return 0n;
    }

    static abs(value) {
        if (this.sign(value) === -1n) {
            return -value;
        }
        return value;
    }

    // https://stackoverflow.com/questions/53683995/javascript-big-integer-square-root/58863398#58863398
    static rootNth(value, k = 2n) {
        if (value < 0n) {
            throw 'negative number is not supported'
        }

        let o = 0;
        let x = value;
        let limit = 100;

        while (x ** k !== k && x !== o && --limit) {
            o = x;
            x = ((k - 1n) * x + value / x ** (k - 1n)) / k;
        }

        return x;
    }

    static sqrt(value) {
        return BigIntMath.rootNth(value);
    }
}
// THE NEWTONITERATION FOR SQUARE ROOT
// function sqrt(value) {
//     if (value < 0n) {
//         throw 'square root of negative numbers is not supported'
//     }

//     if (value < 2n) {
//         return value;
//     }

//     function newtonIteration(n, x0) {
//         const x1 = ((n / x0) + x0) >> 1n;
//         if (x0 === x1 || x0 === (x1 - 1n)) {
//             return x0;
//         }
//         return newtonIteration(n, x1);
//     }

//     return newtonIteration(value, 1n);
// }

// sqrt(BigInt(9))


console.log(BigIntMath.sign(0n))