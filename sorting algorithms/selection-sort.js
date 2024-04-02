const selectionSort = (arr) => {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) { // i'm doing till 'i < n -1' so that when attempting 'j = i + 1' i won't have been the last index;
    let minIndx = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndx]) {
        minIndx = j;
      }
    }

    const temp = arr[i];
    arr[i] = arr[minIndx]; // swapping.
    arr[minIndx] = temp;
  }

  return arr;
}

const recursiveSelectionSort = (arr, i = 0) => {
  const n = arr.length;

  if (i >= n) return arr;

  let minIndx = i;

  for (let j = i + 1; j < n; j++) {
    if (arr[j] < arr[minIndx]) {
      minIndx = j;
    }
  }

  const temp = arr[i];
  arr[i] = arr[minIndx];
  arr[minIndx] = temp;

  return recursiveSelectionSort(arr, ++i);
};

const arrToSort = [3, 4, 1, 2, 5];

console.log('recursive sort', recursiveSelectionSort([...arrToSort]), '\n');

console.log('normal for loop', selectionSort([...arrToSort]), '\n');
