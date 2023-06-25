/*
A binary search function in JavaScript is a function that searches for
a value in a SORTED ARRAY. The function works by repeatedly dividing the
array in half and searching the half that is more likely to contain the
value. This process is repeated until the value is found or the array is empty.

The following is an example of a binary search function in JavaScript:
*/

const binarySearch = (arr, value) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === value) {
      return mid;
    } else if (arr[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
};

console.log(binarySearch([1, 2, 3, 5, 6], 3));
