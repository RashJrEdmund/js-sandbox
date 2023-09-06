const obj = {
    val: 1n,
    name: "big number",
    sub: {
        sum: 2,
        sub_sub: {
            num: 2n
        }
    }
}

const jsonString = JSON.stringify(obj, (key, value) => {
    if (typeof value === 'bigint') {
        return value.toString() + 'n';
    } else {
        return value;
    }
});

/* 
    JSON, we can pass a function as the second argument (reviver)
    to the JSON.parse() method.
    This function is called for each key/value pair. Iin the Obj
*/

console.log(jsonString);

/* ==================== JSON_STRINGIGY ==================== */

const parsedObj = JSON.parse(jsonString, (key, value) => {
    if (typeof value === 'string' && /^\d+n$/.test(value)) {
        return BigInt(value.slice(0, -1));
    }
    return value;
});


/* 
    JSON.stringify() supports a second parameter called
    a replacer, which we can use for writing
    a generic function that over each key value pair (even nested one)
    in the object. say convert all BigInts to strings.
*/

console.log(parsedObj)