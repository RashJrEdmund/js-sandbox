/*
Memoization is a functional programming technique which attempts
to increase a function’s performance by caching its previously
computed results. Each time a memoized function is called, its parameters
are used to index the cache. If the data is present, then it can be returned,
without executing the entire function. Otherwise the function is executed
and then the result is added to the cache. Let's take an example of adding
function with memoization,
*/

const memoizedAddition = () => {
    const cache = {};

    return (a, b) => {
        const a_b_key = [a, b].sort((x,z) => x - z).join('+');
        console.log(cache);
        if (a_b_key in cache) {
            console.log('from cache');
            return cache[a_b_key];
        }

        console.log('out of cache');
        const ans = a + b;

        cache[a_b_key] = ans;

        return ans;
    }
};

const sumNum = memoizedAddition();

sumNum(1,2);