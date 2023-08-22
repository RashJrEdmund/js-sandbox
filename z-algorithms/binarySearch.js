/*
A binary search function in JavaScript is a function that searches for
a value in a SORTED ARRAY. The function works by repeatedly dividing the
array in half and searching the half that is more likely to contain the
value. This process is repeated until the value is found or the array is empty.

The following is an example of a binary search function in JavaScript:
*/

// WITH WHILE LOOP
const binarySearch = (arr, value) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === value) {
      return `using while and ${value} found at index: ${mid}`;
    } else if (arr[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
};

// USING THE RECURSIVE METHOD.

const recursiveSearch = (ARRAY, target, startIndx, endIndx) => {
  if (startIndx > endIndx) return 'Not found';

  const middle = Math.floor((startIndx + endIndx) / 2);

  if (ARRAY[middle] === target) {
    return `recusively found ${target} at index ${middle}`;
  }

  if (ARRAY[middle] > target) {
    return recursiveSearch(ARRAY, target, startIndx, middle - 1);
  }

  if (ARRAY[middle] < target) {
    return recursiveSearch(ARRAY, target, middle + 1, endIndx)
  }
}



const ARRAY = [1, 2, 3, 4, 5, 6];
const target = 5

// console.log(binarySearch(ARRAY, target));

console.log(recursiveSearch(ARRAY, target, 0, 5))
